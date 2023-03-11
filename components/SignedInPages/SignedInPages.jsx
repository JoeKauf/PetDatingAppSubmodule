import React, {useState} from 'react';
import { Text, StyleSheet, View, TouchableOpacity } from 'react-native';
import SignUp from './SignUp';
import LogIn from './LogIn';

const SignedInPages = ({ navigation }) => {
    const [isSignUp, setIsSignUp] = useState(false);
    return (
        <View style={styles.titleView}>
            <View></View>
            <View style={styles.row}>
                    <Text style={styles.title}>Pet App</Text>
            </View>
            <View style={styles.signUpToggles}>
                <TouchableOpacity
                    style={[styles.underlineToggle, !isSignUp && styles.activeUnderline]}
                    onPress={() => setIsSignUp(false)}
                    activeOpacity={!isSignUp && 1}
                >
                    <Text style={[styles.toggle, !isSignUp && styles.activeToggle]}>Log In</Text>
                </TouchableOpacity>
                <View style={{ marginRight: 250 }} />
                <TouchableOpacity
                    style={[styles.underlineToggle, isSignUp && styles.activeUnderline]}
                    onPress={() => setIsSignUp(true)}
                    activeOpacity={isSignUp && 1}
                >
                    <Text style={[styles.toggle, isSignUp && styles.activeToggle]}>Sign Up</Text>
                </TouchableOpacity>
            </View>
            {
                isSignUp ? <SignUp navigation={navigation}/> : <LogIn navigation={navigation} />
            }
        </View>
 );
}

const styles = StyleSheet.create({
    row: {
        flexDirection: 'row',        
    },
    signUpToggles: {
        flexDirection: 'row',
        marginTop: 10,
    },
    title: {     
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: 24,
        lineHeight: 33,

        color: '#23A617',
    },
    titleView: {
        alignItems: 'center',
        paddingTop: 40,
    },
    toggle: {
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,
        color: '#919191',
    },
    activeToggle: {
        color: '#4C4C4C',
        fontWeight: '700',
    },
    underlineToggle: {
        borderBottomWidth: 2,
        // paddingTop: -10,
        borderColor: '#919191',
    },
    activeUnderline: {
        borderColor: '#23A617',
    },
    regularText: {
        position: 'absolute',
        right: 20,
        fontWeight: '400',
        fontSize: 15,
        lineHeight: 20,

        color: '#777777',
    },
    hyperlinkText: {
        fontWeight: '700',
        fontSize: 15,
        lineHeight: 20,
        textDecorationLine: 'underline',
        paddingTop: 2,
        paddingLeft: 4,

        color: '#777777',
    }, 
    isSingedUp: {
        width: '100%',
        // marginLeft: 120,
        marginTop: 10,
        
    }
});

export default SignedInPages;