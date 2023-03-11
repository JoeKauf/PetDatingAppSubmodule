import React from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import { useDispatch } from "react-redux";

const MultiSelectFilter = ({ title, values, updateValues }) => { 
    const dispatch = useDispatch();
    
    const styles = StyleSheet.create({
    title: { 
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */

        color: '#000000',
    },
    selectedPill: {
        borderWidth: 1,
        borderLeftWidth: 0,
        color: '#000000',
        width: 344.25 / values.length,
        height: 32,
        borderColor: '#23A617',
        backgroundColor: 'rgba(35, 166, 23, 0.2)',
    },
    unselectedPill: {
        borderWidth: 1,
        borderLeftWidth: 0,
        color: '#000000',
        width: 344.25 / values.length,
        height: 32,
        borderColor: '#23A617',
        
    },
    rightSelectedPill: {
        borderWidth: 1,
        color: '#000000',
        width: 344.25 / values.length,
        height: 32,
        borderColor: '#23A617',
        backgroundColor: 'rgba(35, 166, 23, 0.2)',

        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    rightUnselectedPill: {
        borderWidth: 1,
        color: '#000000',
        width: 344.25 / values.length,
        height: 32,
        borderColor: '#23A617',

        borderTopLeftRadius: 16,
        borderBottomLeftRadius: 16,
    },
    leftSelectedPill: {
        borderWidth: 1,
        borderLeftWidth: 0,
        color: '#000000',
        width: 344.25 / values.length,
        height: 32,
        borderColor: '#23A617',
        backgroundColor: 'rgba(35, 166, 23, 0.2)',

        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    },
    leftUnselectedPill: {
        borderWidth: 1,
        borderLeftWidth: 0,
        color: '#000000',
        width: 344.25 / values.length,
        height: 32,
        borderColor: '#23A617',

        borderTopRightRadius: 16,
        borderBottomRightRadius: 16,
    },
    pillContianer: {
        width: '100%',
        textAlign: 'center',
        justifyContent: 'center',
        padding: 6,

        display: 'flex',
        flexDirection: 'row',
    },
    pillText: {
        textAlign: 'center',
        justifyContent: 'center',
        margin: 5,
    },
    container: {
        borderColor: '#DBD9D9',
        borderTopWidth: .5,
        borderBottomWidth: .5,
        paddingTop: 10,
        paddingBottom: 10,
        width: 344.25,
        marginLeft: 26.375,
    },
    imageContainer: {  
        width: 20,
        height: 20,
        marginTop: 4,
    },
    imagePillWrapper: {
        marginLeft: 4,
        textAlign: 'center',
        justifyContent: 'left',

        display: 'flex',
        flexDirection: 'row',
    }
    });
    
    let options = []
    values.forEach((value, i) =>
        options.push(
            <TouchableOpacity
                key={i}
                style={value.isSelected ?
                    i === 0 ? styles.rightSelectedPill : i === values.length - 1 ? styles.leftSelectedPill : styles.selectedPill : 
                    i === 0 ? styles.rightUnselectedPill : i === values.length - 1 ? styles.leftUnselectedPill : styles.unselectedPill}
                onPress={() => {
                        let updatedValues = values.map(el => (
                            el.value===value.value ? {...el, isSelected: !value.isSelected}: el
                        ))
                        // setSelectedValues(updatedValues)
                        updateValues && dispatch(updateValues(updatedValues))
                    }
                }
            >
                <View style={styles.imagePillWrapper}>
                    {value.isSelected ?
                        <Image style={styles.imageContainer} source={require("../../assets/multiselect-check-icon.png")} /> :
                        <View style={{width:20}} />
                    }
                    <Text style={styles.pillText}>{value.value}</Text>
                </View>
            </TouchableOpacity>
        )
    )

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <View style={styles.pillContianer}>
                {options}
            </View>
        </View>
 );
}

export default MultiSelectFilter;