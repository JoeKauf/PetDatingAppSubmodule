import React, {useState} from 'react';
import { Text, StyleSheet, TextInput, View, Image, TouchableOpacity } from 'react-native';

const TextBox = ({ Title, inputTitle, warningText, isPassword, _handleMultiInput }) => {
    const [showPassword, setShowPassword] = useState(isPassword);
    const inputTitleText = inputTitle || Title
    return (
        <View style={styles.textBoxWrapper}>
            <Text style={styles.title}>{Title}</Text>
            <TextInput
                style={styles.textBox}
                secureTextEntry={showPassword}
                onChangeText={(text) => _handleMultiInput(inputTitleText, text)}
            />
            {isPassword &&
                <TouchableOpacity style={styles.imageContainer}
                    onPress={() => setShowPassword(!showPassword)}
                >
                    <Image style={styles.image} source={showPassword ? require("../../assets/show-password-icon.png") : require("../../assets/hide-password-icon.png")}/>
                </TouchableOpacity>
            }
            <Text style={styles.warningText}>{warningText}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    textBox: {
        width: 299,
        height: 30,

        borderWidth: 2,
        borderColor: '#D1D1D1',
        borderRadius: 12,
        fontSize: 15,
        paddingLeft: 11,
    },
    title: {
        fontWeight: '600',
        fontSize: 16,
        // lineHeight: 27,

        color: '#4C4C4C',
        opacity: .75,
    },
    warningText: {
        fontWeight: '300',
        fontSize: 14,
        lineHeight: 19,
        letterSpacing: '0.01em',
        width: 299, 
        
        color: '#514F4F',
    }, 
    imageContainer: {
        position: 'absolute',
        top: 22,
        right: 12,
    },
    image: {
        width: 26,
        height: 26,
    }
});

export default TextBox;