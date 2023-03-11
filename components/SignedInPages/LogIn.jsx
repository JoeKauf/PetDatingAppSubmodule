import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Keyboard, TextInput } from 'react-native';
import MainButton from './MainButton';
import TextBox from './TextBox';
import { useDispatch } from "react-redux";
import { logInAccount } from '../../redux/userAuth';
import { logUserIn } from '../../data_layer/Users';

const LogIn = ({ navigation }) => {
    const dispatch = useDispatch();
    
    const [inputs, setInputs] = useState({});
    const _handleMultiInput = (name, text) => {
        setInputs(inputs => ({ ...inputs, [name]: text }))
    }

    const logIn = () => {
        function setLoggedIn(email, name, isShelter, chats) {
            dispatch(logInAccount({email: email, name: name, isShelter: isShelter, chats: chats}))
            isShelter ? navigation.navigate('Shelter Animals')  : navigation.navigate('Pet App')
        }
        
        logUserIn(inputs.Email, inputs.Password, setLoggedIn)     
    }

    return (
        <View>
            <Text style={styles.Subtitle}>Welcome Back</Text>
            <TextBox
                Title="Email"
                _handleMultiInput={_handleMultiInput}
            />
            <TextBox
                Title="Password"
                isPassword={true}
                _handleMultiInput={_handleMultiInput}
            />
            <MainButton
                buttonText={"Log In"}
                onButtonClick={logIn}
            />
        </View>
    );
}

const styles = StyleSheet.create({
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
    Subtitle: {
        fontWeight: '600',
        fontSize: 20,
        lineHeight: 27,
        textAlign: 'center',

        color: '#989898',
        marginTop: 40,
        marginBottom: 40,
    }
});

export default LogIn;