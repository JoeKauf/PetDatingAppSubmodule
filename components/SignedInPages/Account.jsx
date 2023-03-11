import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import TextBox from './TextBox';

const Account = ({setIsAnimalShelter, isAnimalShelter, _handleMultiInput}) => {
    
    return (
        <View style={{ marginTop: 30 }}>
            <TextBox Title={isAnimalShelter ? "Shelter Name" : "Name"} _handleMultiInput={_handleMultiInput}/>
            <TextBox Title="Email" _handleMultiInput={_handleMultiInput} />
            <TextBox
                Title="Password"
                warningText="Must be 8 or more characters and contain at least 1 number and 1 special character"
                isPassword={true}
                _handleMultiInput={_handleMultiInput}
            />
            <View style={styles.checkboxContainer}>
                <TouchableOpacity
                    style={styles.uncheckedCheckbox}
                    onPress={() => setIsAnimalShelter(!isAnimalShelter)}
                >
                    {isAnimalShelter && <Image style={styles.image} source={require("../../assets/checked-checkbox-icon.png")} />}
                </TouchableOpacity>
                <Text style={styles.checkboxText}>Register as an Animal Shelter/Breeder.</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    checkboxContainer: {
        flexDirection: 'row',
        marginTop: 20,
        marginBottom: 15,
    },
    uncheckedCheckbox: {
        width: 20,
        height: 20,
        marginRight: 10,
        borderRadius: 3,

        borderWidth: 1,
    },
    checkedCheckBox: {
        width: 20,
        height: 20,
        backgroundColor: "#23A617",
    },
    checkboxText: {
        fontWeight: '700',
        fontSize: 14,
        lineHeight: 19,
        /* identical to box height */

        letterSpacing: '0.01em',

        color: '#514F4F',
    },
    image: {
        position: 'absolute',
        left: -4,
        top: -4,
        width: 26,
        height: 26,
    }
});

export default Account;