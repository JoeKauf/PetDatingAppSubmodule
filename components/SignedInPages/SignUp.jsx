import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import SignUpProgress from './SignUpProgress';
import MainButton from './MainButton';
import Account from './Account';
import ShelterInfo from './ShelterInfo';
import ShelterLocation from './ShelterLocation';
import { addRegularUser, addShelterOrBreeder } from '../../data_layer/Users' 
import { useDispatch } from "react-redux";
import { logInAccount } from '../../redux/userAuth';

const SignUp = ({ navigation }) => {
    const dispatch = useDispatch();
    const [inputs, setInputs] = useState({});
    const _handleMultiInput = (name, text) => {
        setInputs(inputs => ({ ...inputs, [name]: text }))
    }
    
    const [isAnimalShelter, setIsAnimalShelter] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const increasePageCount = () => setCurrentPage(currentPage != 3 ? currentPage + 1 : 3)

    const signUpAccount = () => {
        function setLoggedIn() {
            dispatch(logInAccount({email: inputs.Email.toLowerCase(), name: inputs.Name, isShelter: isAnimalShelter}))
            isAnimalShelter ? navigation.navigate('Shelter Animals') : navigation.navigate('Pet App')
        }

        if (inputs.Email) {
            isAnimalShelter ? addShelterOrBreeder(inputs.Email.toLowerCase(), inputs.Password, inputs.Name, inputs.AddressOne, inputs.AddressTwo ? inputs.AddressTwo: null, inputs.Country, inputs.Zip, setLoggedIn) : addRegularUser(inputs.Email.toLowerCase(), inputs.Password, inputs.Name, setLoggedIn)
        } 
    }

    const selectedPage = currentPage === 1 ?
        <Account
            setIsAnimalShelter={setIsAnimalShelter}
            isAnimalShelter={isAnimalShelter}
            _handleMultiInput={_handleMultiInput}
        /> : < ShelterLocation _handleMultiInput={_handleMultiInput} />
    
    return (
        <>
            {isAnimalShelter ? <SignUpProgress currentPage={currentPage} isAnimalShelter={isAnimalShelter} /> :
            <Text style={styles.Subtitle}>Join the Community</Text>}
            {selectedPage}
            <MainButton
                buttonText={currentPage === 2 || !isAnimalShelter ? "Sign Up" : "Next"}
                onButtonClick={currentPage === 2 || !isAnimalShelter ? signUpAccount  : increasePageCount} />
        </>
    );
}

const styles = StyleSheet.create({
    Subtitle: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 27,
        textAlign: 'center',

        color: '#989898',
        marginBottom: 15,
        marginTop: 40,
    },
    prorgressContainer: {
        flexDirection: 'row',
        marginTop: 45,
    },
    progressText: {
        position: 'absolute',
        bottom: -20,
        left: -5,

        width: 90,
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 20,
        letterSpacing: '0.05em',

        color: '#919191',
    },
    progressBubble: {
        backgroundColor: '#23A617',
        borderRadius: 50,
        width: 50,
        height: 50,
    },
    progressBubbleText: {
        color: '#ffff',
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 27,
        textAlign: 'center',
        marginTop: 9,

        color: '#FFFFFF',
    },
    progressSeperator: {
        borderBottomWidth: 1,
        borderBottomColor: '#DBD9D9',
        margin: 9,
        marginBottom: 25,

        width: 50,
    }
});

export default SignUp;