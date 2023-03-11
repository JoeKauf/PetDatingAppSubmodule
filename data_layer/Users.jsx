import {firebase} from '../firebaseConfig'

export function addRegularUser(email, password, name, setLoggedIn) {
    const usersRef = firebase.firestore().collection('Users').doc(email);

    usersRef.get()
        .then((docSnapshot) => {
            if (docSnapshot.exists) {
                alert('Email is already used, please use a different one.')
            } else {
                // Check if we have new field data
                if (email && password && name) {
                    // get the timestamp
                    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

                    // Add the data for a user
                    const data = {
                        password: password,
                        name: name,
                        isShelter: null,
                        createdAt: timestamp,
                        chats: [],
                    };
        
                    // Upload data to firestore
                    usersRef
                        .set(data)
                        .then(() => {
                            // Create swipes doc in firestore
                            const swipesRef = firebase.firestore().collection('Swipes').doc(email);

                            const swipesData = {
                                LikedPets: [],
                                DislikedPets: [],
                            }
                            swipesRef.set(swipesData)
                            setLoggedIn()
                        })
                        .catch((error) => {
                            // show an alert in case of error
                            alert(error);
                        })
                }
            }
        });
}

export function addShelterOrBreeder(email, password, name, AddressOne, AddressTwo, Country, Zip, setLoggedIn) {   
    if (email && password && name && AddressOne && Country && Zip) {
        const usersRef = firebase.firestore().collection('Users').doc(email);
        const shelterInfoRef = firebase.firestore().collection('ShelterInfo').doc(email);

        usersRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    alert('Email is already used, please use a different one.')
                } else {
                    // Check if we have new field data
                    // get the timestamp
                    const timestamp = firebase.firestore.FieldValue.serverTimestamp();

                    // Add the data for a user
                    const data = {
                        password: password,
                        name: name,
                        isShelter: true,
                        createdAt: timestamp,
                        chats: [],
                    };
                    
                    // Upload data to firestore
                    usersRef
                        .set(data)
                        .then(() => {
                            const shelterData = {
                                AddressOne: AddressOne,
                                AddressTwo: AddressTwo,
                                Country: Country,
                                Zip: Zip,
                                Cats: [],
                                Dogs: [],
                            }
                            shelterInfoRef.set(shelterData);
                            setLoggedIn()
                        })
                        .catch((error) => {
                            // show an alert in case of error
                            alert(error);
                        })
                }
            });
    }
}

export function logUserIn(email, password, setLoggedIn) {
    if (email && password) {
        const usersRef = firebase.firestore().collection('Users').doc(email);

        usersRef.get()
            .then((docSnapshot) => {
                if (docSnapshot.exists) {
                    let data = docSnapshot.data();
                    if (data.password === password) {
                        setLoggedIn(docSnapshot.id, data.name, data.isShelter, data.chats);
                    } else {
                        alert('Invalid credentials: please try again.')
                    }
                } else {
                    alert('Invalid credentials: please try again.')
                }
            });
    }
}