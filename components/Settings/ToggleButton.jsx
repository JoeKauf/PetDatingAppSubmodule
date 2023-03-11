import React from 'react';
import { Text, StyleSheet, View, TouchableWithoutFeedback  } from 'react-native';
import { useDispatch } from "react-redux";

const ToggleButton = ({ name, value, setValue }) => {
    const dispatch = useDispatch();
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{name}</Text>
            <TouchableWithoutFeedback
                onPress={() => dispatch(setValue(!value))}
            >
                <View style={value ? styles.toggleSelected : styles.toggleUnselected}>
                    <View style={value ? styles.toggleSelectedCircle : styles.toggleUnselectedCircle} />
                </View>
            </TouchableWithoutFeedback >
        </View>
 );
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 5,
        paddingBottom: 5,
        display: 'flex',
        flexDirection: 'row',
        
        width: 370,
    },
    title: { 
        marginLeft: 26.375,
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */

        color: '#000000',
    },
    toggleSelected: {
        backgroundColor: 'rgba(70, 225, 56, 0.61)',
        borderColor: '#F3F2F2',
        marginLeft: 'auto',

        borderWidth: 1,
        borderRadius: 50,
        width: 51,
        height: 31,
    },
    toggleUnselected: {
        marginLeft: 'auto',
        backgroundColor: '#D9E4D8',
        borderColor: '#F3F2F2',
        borderWidth: 1,
        borderRadius: 50,
        width: 51,
        height: 31,
    },
    toggleSelectedCircle: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        width: 25,
        height: 25,
        right: 2,
        top: 2,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 4,    
    },
    toggleUnselectedCircle: {
        position: 'absolute',
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        width: 25,
        height: 25,
        left: 2,
        top: 2,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 4,    
    },

});


export default ToggleButton;