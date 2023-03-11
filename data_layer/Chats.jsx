import { firebase } from '../firebaseConfig'
/**
 * 
 * Looks through a user's chatIds to determine if there is an existing chat between
 * the user and animal shelter. If it does not exist, create the chat.
 * 
 * @param {Array} chatIds 
 * @param {UUID} petId 
 * @param {} callback  used to populate messages
 */
// export function getChatFromPetId(petId, userId, initializeChatId, setMessages) {
//     const getUserChats = firebase.firestore().collection('Users').doc(userId);
//     const chatsRef = firebase.firestore().collection('Chats');
//     let chatFound = false;

//     // Check if chat with specific pet Exists
//     getUserChats.get()
//         .then((doc) => {
//             const chatIds = doc.data().chats;
//             for (const chatId of chatIds) {
//             chatsRef.doc(chatId)
//                 .get()
//                 .then((doc) => {
//                     if (doc.data().petId === petId) {
//                         initializeChatId(chatId);
//                         getChatMessages(chatId, userId, setMessages)
//                         chatFound = true;
//                     }
//             })
//         if (chatFound) {
//             break;
//         }
//     }
//         })
// }

export function getChatFromPetId(petId, userId, initializeChatId, setMessages) {
    const getUserChats = firebase.firestore().collection('Users').doc(userId);
    const chatsRef = firebase.firestore().collection('Chats');
    let chatFound = false;

    // Check if chat with specific pet Exists
    getUserChats.onSnapshot((doc) => {
        const chatIds = doc.data().chats;
        if (chatIds) {
            for (const chatId of chatIds) {
                chatsRef.doc(chatId)
                    .onSnapshot((doc) => {
                        if (doc.data().petId === petId) {
                            initializeChatId(chatId, doc.data().regUserName);
                            getChatMessages(chatId, userId, setMessages)
                            chatFound = true;
                        }
                })
                if (chatFound) {
                    break;
                }
            }
        }

        })
}

/**
 * Sends a message for shelters or regular users.
 * @param {*} message 
 * @param {*} chatId null if not found
 * @param {*} senderId 
 * @param {*} userName 
 * @param {*} petId 
 * @param {*} shelterId // optional, this will be the pet's email
 */
export function sendAMessage(message, chatId, senderId, userName, petId, shelterId, initializeChatId) {
    const chatExists = chatId;
    const messagesRef = firebase.firestore().collection('Messages');
    const chatsRef = firebase.firestore().collection('Chats');
    const timestamp = Date.now();

    if (chatExists) {
        sendMessageToExistingChat(chatId, messagesRef, chatsRef, message, senderId, timestamp, userName)
    } else {
        createNewChat(messagesRef, chatsRef, message, senderId, timestamp, userName, petId, shelterId, initializeChatId)
    }
}

function sendMessageToExistingChat(chatId, messagesRef, chatsRef, message, senderId, timestamp, userName) {
    const messageData = {
        message: message,
        senderId: senderId,
        isRead: false,
        timeStamp: timestamp,
        readTime: null,
    }   

    messagesRef.doc(chatId).update({ messages: firebase.firestore.FieldValue.arrayUnion(messageData) })
    .then(() => {
        chatsRef.doc(chatId).update({
            timestamp: timestamp,
            lastMessage: message,
            senderName: userName, 
            isRead: false,
        })
    })
}

function createNewChat(messagesRef, chatsRef, message, senderId, timestamp, userName, petId, shelterId, initializeChatId) {
    const chatData = {
        timestamp: timestamp,
        petId: petId,
        shelterId: shelterId,
        regUserId: senderId,
        regUserName: userName,
        lastMessage: message,
        senderName: userName,
        isRead: false,
    }

    chatsRef.add(chatData).then((chatId) => {
        const messageData = {
            message: message,
            senderId: senderId,
            isRead: false,
            timeStamp: timestamp,
            readTime: null,
        }
        messagesRef.doc(chatId.id)
        .set({ messages: firebase.firestore.FieldValue.arrayUnion(messageData) })
        .then(() => {
            // Chat id to user chats
            firebase.firestore().collection('Users').doc('1').update({ chats: firebase.firestore.FieldValue.arrayUnion(chatId.id) });
            firebase.firestore().collection('Users').doc('test@gmail.com').update({ chats: firebase.firestore.FieldValue.arrayUnion(chatId.id) });
            initializeChatId(chatId.id)
        })
    })
}

export function getChats(userId, callback) {
    const usersRef = firebase.firestore().collection('Users').doc(userId);
    
    usersRef.onSnapshot((doc) => {
        const chats = doc.data().chats;
        if (chats) {
            getIndividualChatInfo(chats, callback);
        }
    })
}
/**
 * Gets chat specific information for a range of chats
 * @param {*} chatIds 
 */
function getIndividualChatInfo(chatIds, callback) {
    const chatsRef = firebase.firestore().collection('Chats');
    let hasBeenRun = false;
    let messageList = []; // This does not reset in between changes
    for (let i = 0; i < chatIds.length; i++) {
        const chatId = chatIds[i];
        chatsRef.doc(chatId).onSnapshot((doc) => {
            getPetData(doc.data(), chatId, addMessage);
            function addMessage(messageData) {
                if (hasBeenRun) {
                    let foundIndex = messageList.findIndex(item => item.petId == messageData.petId); 
                    messageList[foundIndex] = messageData;
                } else {
                    messageList.push(messageData)
                }
                if (i === chatIds.length - 1 || hasBeenRun) {
                    callback(messageList);
                    hasBeenRun = true;
                }
            }

        })
    }
}

function getPetData(chatData, chatId, addMessage) {
    const petRef = firebase.firestore().collection('Pets').doc(chatData.petId);
    
    let date = new Date(chatData.timestamp);
    let dayNum = date.getDay();
    const numsToDay = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    let dayString = numsToDay[dayNum - 1];
    petRef.get()
    .then((petDoc) => {
        const messageData = {
            chatId: chatId,
            petId: chatData.petId,
            petName: petDoc.data().name,
            profilePicture: petDoc.data().pictures[0],
            lastMessage: chatData.lastMessage,
            unread: !chatData.isRead,
            dateTime: `${dayString}`,
            amimalShelterName: petDoc.data().adoptionLocationName,
            regUserName: chatData.regUserName,
        }
        addMessage(messageData);
    })
}

export function getChatMessages(chatId, userId, callback) {
    let messageList = [];
    const messagesRef = firebase.firestore().collection('Messages').doc(chatId);
    messagesRef.get()
        .then((doc) => {
            if (doc.exists) {
                const messages = doc.data().messages
                for (let index = 0; index < messages.length; index++) {
                    const messageData = {
                        messageID: index,
                        messageInfo: messages[index].message,
                        isSender: messages[index].senderId === userId,
                    }
                    messageList.push(messageData)
                if (messages.length-1 === index) {
                    callback(messageList)
                }
            }
        }
    })
    
}