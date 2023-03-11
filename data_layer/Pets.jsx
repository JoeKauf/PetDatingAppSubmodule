import { firebase } from '../firebaseConfig'
import { useSelector, useDispatch } from "react-redux";
import { addPet } from '../redux/mypets';
// import { getStorage, ref, uploadBytes } from "firebase/storage";
// Helper function
function getAge(dateString) {
  var now = new Date();
  var today = new Date(now.getYear(),now.getMonth(),now.getDate());

  var yearNow = now.getYear();
  var monthNow = now.getMonth();
  var dateNow = now.getDate();

  var dob = new Date(dateString.substring(6,10),
                     dateString.substring(0,2)-1,                   
                     dateString.substring(3,5)                  
                     );

  var yearDob = dob.getYear();
  var monthDob = dob.getMonth();
  var dateDob = dob.getDate();
  var age = {};
  var ageString = "";
  var yearString = "";
  var monthString = "";
  var dayString = "";


  var yearAge = yearNow - yearDob;

  if (monthNow >= monthDob)
    var monthAge = monthNow - monthDob;
  else {
    yearAge--;
    var monthAge = 12 + monthNow -monthDob;
  }

  if (dateNow >= dateDob)
    var dateAge = dateNow - dateDob;
  else {
    monthAge--;
    var dateAge = 31 + dateNow - dateDob;

    if (monthAge < 0) {
      monthAge = 11;
      yearAge--;
    }
  }

  age = {
      years: yearAge,
      months: monthAge,
      days: dateAge
      };

  if ( age.years > 1 ) yearString = " years";
  else yearString = " year";
  if ( age.months> 1 ) monthString = " months";
  else monthString = " month";
  if ( age.days > 1 ) dayString = " days";
  else dayString = " day";


  if ( (age.years > 0) && (age.months > 0) && (age.days > 0) )
      ageString = age.years + yearString;
  else if ( (age.years == 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.days + dayString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days == 0) )
    ageString = age.years + yearString;
  else if ( (age.years > 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.years + yearString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days > 0) )
    ageString = age.months + monthString;
  else if ( (age.years > 0) && (age.months == 0) && (age.days > 0) )
    ageString = age.years + yearString;
  else if ( (age.years == 0) && (age.months > 0) && (age.days == 0) )
    ageString = age.months + monthString;
  else ageString = "Oops! Age not found!";

  return ageString;
}

export default function addAPet(
    adoptionLocationName,
    email,
    name,            
    breed, 
    isDog,
    isMale,
    dob,
    isKidFriendly,
    isDogFriendly,
    isCatFriendly,
    price,
    weight,
    // coat,
    activityLevel,
    houseTrained,
    medicalStatus,
    description,
    picOne,
    picTwo,
    picThree,
    picFour,
    picFive,
    picSix
) {
    const petsRef = firebase.firestore().collection('Pets');

  const validatePetData = (
        adoptionLocationName &&
        email &&
        name &&            
        breed && 
        dob &&
        price &&
        weight &&
        // coat &&
        activityLevel &&
        medicalStatus &&
        description && 
        picOne &&
        picTwo &&
        picThree &&
        picFour &&
        picFive &&
        picSix
    );

    if (validatePetData) {
        // Add the data for a pet
        const petData = {
            adoptionLocationName: adoptionLocationName,
            email: email,
            name: name,            
            breed: breed, 
            isDog: isDog,
            isMale: isMale,
            dob: dob,
            isKidFriendly: isKidFriendly,
            isDogFriendly: isDogFriendly,
            isCatFriendly: isCatFriendly,
            price: price,
            weight: weight,
            // coat: weight,
            activityLevel: activityLevel,
            houseTrained: houseTrained,
            medicalStatus: medicalStatus,
            description: description,
            pictures: [picOne, picTwo, picThree, picFour, picFive, picSix],
        };            
        
        // Upload data to firestore
        petsRef
            .add(petData)
            .then((petID) => {
                const shelterInfoRef = firebase.firestore().collection('ShelterInfo').doc(email);  
                // Add animal to Shelter List
                isDog ? shelterInfoRef
                    .update( {
                        Dogs: firebase.firestore.FieldValue.arrayUnion(petID.id)  
                    }).then(console.log("Added to dogs"))
                    : shelterInfoRef
                    .update({
                        Cats: firebase.firestore.FieldValue.arrayUnion(petID.id)
                    }).then(console.log("Added to cats"))                        
            })
            .catch((error) => {
                // show an alert in case of error
                alert(error);
            })
    }
}

export function getPets(setPetData, query) {
    const isDog = query.type.isDog;
    const houseTrained = query.houseTrained;
    const friendlyWith = query.friendlyWith;

    const usersRef = firebase.firestore().collection('Pets');
    const limit = 1
    usersRef
        // .where("isDog", "==", isDog)
        // .where("houseTrained", "==", isDog ? houseTrained.dog : houseTrained.cat)
        // .where("isKidFriendly", "==", isDog ? friendlyWith.dog.isKidFriendly : friendlyWith.cat.isKidFriendly) 
        // .where("isCatFriendly", "==", isDog ? friendlyWith.dog.isCatFriendly : friendlyWith.cat.isCatFriendly)       
        // .where("isDogFriendly", "==", isDog ? friendlyWith.dog.isDogFriendly : friendlyWith.cat.isDogFriendly)
        // .limit(limit)
        .get()
        .then((docSnapshot) => {
            let dataList = [];
            let index = 1;
            let length = docSnapshot.size;
            docSnapshot.forEach((doc) => {    
                // console.log("Pictures: ", doc.data().pictures)
                const data = {
                    petID: doc.id,
                    id: index,
                    email: doc.data().email,
                    name: doc.data().name,
                    age: getAge(doc.data().dob),
                    adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                    distanceAway: '2 miles away', // Need functionality
                    gender: doc.data().isMale ? 'Male' : 'Female',
                    breed: 'need fx', // Need functionality
                    friendlyWith: {
                        kids: doc.data().isKidFriendly,
                        dogs: doc.data().isCatFriendly,
                        cats: doc.data().isDogFriendly,
                    },
                    price: `$${doc.data().price}`,
                    weight: `${doc.data().weight} lbs`,
                    activityLevel: doc.data().activityLevel,
                    houseTrained: doc.data().houseTrained,
                    medicalStatus: doc.data().medicalStatus,
                    description: doc.data().description,
                    pictures: doc.data().pictures,
                }
                dataList.push(data)
                index++
                if (index === length + 1) {
                    setPetData(dataList);
                }
            })
        });
}

export function swipeRight(
    petID,
    pictureNumber,
) {
  const email = useSelector((state) => state.userAuth.email)
  const petsRef = firebase.firestore().collection('Swipes').doc(email); // need email for id

    const validatePetData = (
        email &&
        petID &&
        pictureNumber
    );

    if (validatePetData) {
        // Upload data to firestore
        petsRef
            .update( {
              LikedPets: firebase.firestore.FieldValue.arrayUnion(petID)
            })
            .then(() => {
                // const petsRef = firebase.firestore().collection('Swipes').doc(email);
            })
            .catch((error) => {
                // show an alert in case of error
                alert(error);
            })
    }
}

export function swipeLeft(
    petID,
    pictureNumber,
) {
  const email = useSelector((state) => state.userAuth.email)
  const petsRef = firebase.firestore().collection('Swipes').doc(email); // need email for id
    
  const validatePetData = (
        email &&
        petID &&
        pictureNumber
    );

    if (validatePetData) {
        // Upload data to firestore
        petsRef
            .update( {
              LikedPets: firebase.firestore.FieldValue.arrayUnion(petID)
            })
            // .then(() => {
            //     // const petsRef = firebase.firestore().collection('Swipes').doc(email);
                        
            // })
            .catch((error) => {
                // show an alert in case of error
                alert(error);
            })
    }
}

export function getLikedPets(email, setPetData) {
    // Get swipes document for specific account    
    const swipesRef = firebase.firestore().collection('Swipes').doc(email);
    const petList = [];

    const getPetData = () => {
            swipesRef
        .get()
        .then((docSnapshot) => {
            const data = docSnapshot.data();
            const likedPetIDs = data.LikedPets;
            let index = 1;
            let numberOfIds = likedPetIDs.length
            for (const petId of likedPetIDs) { 
                const petsRef = firebase.firestore().collection('Pets').doc(petId);
                petsRef
                    .get()
                    .then((doc) => { 
                        function picCallBack(value) {
                            pictures = value;
                            const petData = {
                                petID: doc.id,
                                id: index,
                                // 'Like', 'Dislike', ''
                                email: doc.data().email,
                                result: '',
                                name: doc.data().name,
                                age: getAge(doc.data().dob), // need to undo
                                adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                                distanceAway: '2 miles away', // Need functionality
                                gender: doc.data().isMale ? 'Male' : 'Female',
                                breed: 'need fx', // Need functionality
                                friendlyWith: {
                                    kids: doc.data().isKidFriendly,
                                    dogs: doc.data().isCatFriendly,
                                    cats: doc.data().isDogFriendly,
                                },
                                price: `$${doc.data().price}`,
                                weight: `${doc.data().weight} lbs`,
                                activityLevel: doc.data().activityLevel,
                                houseTrained: doc.data().houseTrained,
                                medicalStatus: doc.data().medicalStatus,
                                description: doc.data().description,
                                pictures: pictures,
                            }
                            petList.push(petData)
                            if (index === numberOfIds) {
                                setPetData(petList)
                            }
                            index++;
                        }
                        getPhotos(petId, picCallBack)
                    })
            }            
        });
    }
    getPetData()
}

export function removeLikedPet(email, petID) {
    // Get swipes document for specific account    
    const swipesRef = firebase.firestore().collection('Swipes').doc(email);
    swipesRef.update({
        LikedPets: firebase.firestore.FieldValue.arrayRemove(petID),
        DislikedPets: firebase.firestore.FieldValue.arrayUnion(petID)
    })

}

// export function animalShelterDogs(email, setPetData) {
//     // Get swipes document for specific account    
//     const shelterInfoRef = firebase.firestore().collection('ShelterInfo').doc(email);
//     const petList = [];

//     const getPetData = () => {
//         shelterInfoRef
//         .get()
//         .then((docSnapshot) => {
//             const data = docSnapshot.data();
//             const dogs = data.Dogs;
//             let index = 1;
//             let numberOfIds = dogs.length
//             for (const petId of dogs) {
//                 const petsRef = firebase.firestore().collection('Pets').doc(petId);
//                 petsRef
//                     .get()
//                     .then((doc) => {
//                             const petData = {
//                                 petID: doc.id,
//                                 id: index,
//                                 // 'Like', 'Dislike', ''
//                                 result: '',
//                                 name: doc.data().name,
//                                 age: getAge(doc.data().dob), // need to undo
//                                 adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
//                                 distanceAway: '2 miles away', // Need functionality
//                                 gender: doc.data().isMale ? 'Male' : 'Female',
//                                 breed: 'need fx', // Need functionality
//                                 friendlyWith: {
//                                     kids: doc.data().isKidFriendly,
//                                     dogs: doc.data().isCatFriendly,
//                                     cats: doc.data().isDogFriendly,
//                                 },
//                                 price: `$${doc.data().price}`,
//                                 weight: `${doc.data().weight} lbs`,
//                                 activityLevel: doc.data().activityLevel,
//                                 houseTrained: doc.data().houseTrained,
//                                 medicalStatus: doc.data().medicalStatus,
//                                 description: doc.data().description,
//                                 pictures: pictures || [],
//                             }
//                             petList.push(petData)
//                             if(index === numberOfIds) {
//                                 setPetData(petList)
//                             }
//                             index++;
//                     })           
//     }
    
//     getPetData()
// }

export function getAnimalShelterPets(email, setCats, setDogs) {
    // Get swipes document for specific account    
    const shelterInfoRef = firebase.firestore().collection('ShelterInfo').doc(email);

    const getPetData = () => {
        shelterInfoRef
        .onSnapshot((docSnapshot) => {
            const catList = [];
            const dogList = [];
            const data = docSnapshot.data();
            const cats = data.Cats;
            const dogs = data.Dogs;
            let catIndex = 1;
            let dogIndex = 1;
            console.log("CatIds: ", cats)
            console.log("DogIds: ", dogs)
            for (const petId of cats) { 
                const petsRef = firebase.firestore().collection('Pets').doc(petId);
                petsRef
                    .get()
                    .then((doc) => { 
                        console.log("Id: ", doc.id)
                        const petData = {
                            petID: doc.id,
                            id: catIndex,
                            result: '',
                            name: doc.data().name,
                            age: getAge(doc.data().dob), // need to undo
                            adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                            distanceAway: '2 miles away', // Need functionality
                            gender: doc.data().isMale ? 'Male' : 'Female',
                            breed: 'need fx', // Need functionality
                            friendlyWith: {
                                kids: doc.data().isKidFriendly,
                                dogs: doc.data().isCatFriendly,
                                cats: doc.data().isDogFriendly,
                            },
                            price: `$${doc.data().price}`,
                            weight: `${doc.data().weight} lbs`,
                            activityLevel: doc.data().activityLevel,
                            houseTrained: doc.data().houseTrained,
                            medicalStatus: doc.data().medicalStatus,
                            description: doc.data().description,
                            pictures: doc.data().pictures,
                        }
                        catList.push(petData)
                        if (catIndex === cats.length) {
                            setCats([])
                            setCats(catList)
                        }
                        catIndex++;
                    })
            } 
            for (const petId of dogs) { 
                const petsRef = firebase.firestore().collection('Pets').doc(petId);
                petsRef
                    .get()
                    .then((doc) => { 
                        // console.log("Id: ", doc.id)
                        const petData = {
                            petID: doc.id,
                            id: dogIndex,
                            result: '',
                            name: doc.data().name,
                            age: getAge(doc.data().dob), // need to undo
                            adoptionLocationName: doc.data().adoptionLocationName, // Need functionality
                            distanceAway: '2 miles away', // Need functionality
                            gender: doc.data().isMale ? 'Male' : 'Female',
                            breed: 'need fx', // Need functionality
                            friendlyWith: {
                                kids: doc.data().isKidFriendly,
                                dogs: doc.data().isCatFriendly,
                                cats: doc.data().isDogFriendly,
                            },
                            price: `$${doc.data().price}`,
                            weight: `${doc.data().weight} lbs`,
                            activityLevel: doc.data().activityLevel,
                            houseTrained: doc.data().houseTrained,
                            medicalStatus: doc.data().medicalStatus,
                            description: doc.data().description,
                            pictures: doc.data().pictures,
                        }
                        dogList.push(petData)
                        if (dogIndex === dogs.length) {
                            setDogs([])
                            setDogs(dogList)
                        }
                        dogIndex++;
                    })
            }
        });
    }
    getPetData()
}

async function getPhotos(petID, picCallBack) {
    let pictures = [];
    firebase.storage().ref().child(`${petID}/one`).getDownloadURL()
    .then((url) => {
        pictures.push(url);
        firebase.storage().ref().child(`${petID}/two`).getDownloadURL()
        .then((url) => {
            pictures.push(url);
            firebase.storage().ref().child(`${petID}/three`).getDownloadURL()
            .then((url) => {
                pictures.push(url);
            })
            firebase.storage().ref().child(`${petID}/four`).getDownloadURL()
            .then((url) => {
                pictures.push(url);
            })
            firebase.storage().ref().child(`${petID}/five`).getDownloadURL()
            .then((url) => {
                pictures.push(url);
                firebase.storage().ref().child(`${petID}/six`).getDownloadURL()
                .then((url) => {
                    pictures.push(url);
                    picCallBack(pictures)
                })
            })
        })
    })
    .catch((error) => {
        // Handle any errors
    });
}