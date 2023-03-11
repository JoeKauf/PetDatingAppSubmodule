import React from 'react';
import { Image, StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { useDispatch } from "react-redux";

const FriendlyWith = ({ friendlyWith, setFriendlyWith }) => {
    const dispatch = useDispatch();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Friendly With</Text>
            <View style={styles.petImageRow}>
                <TouchableOpacity
                    onPress={() => dispatch(setFriendlyWith(
                        {
                            isKidFriendly: !friendlyWith.isKidFriendly,
                            isDogFriendly: friendlyWith.isDogFriendly,
                            isCatFriendly: friendlyWith.isCatFriendly,
                        }
                    ))}
                >
                    <Image
                        style={friendlyWith.isKidFriendly ? styles.selectedImageStyling : styles.imageStyling}
                        source={require("../../assets/kid-select-icon.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => dispatch(setFriendlyWith(
                        {
                            isKidFriendly: friendlyWith.isKidFriendly,
                            isDogFriendly: !friendlyWith.isDogFriendly,
                            isCatFriendly: friendlyWith.isCatFriendly,
                        }
                    ))}
                >
                    <Image
                        style={friendlyWith.isDogFriendly ? styles.selectedImageStyling : styles.imageStyling}
                        source={require("../../assets/dog-black-icon.png")}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => dispatch(setFriendlyWith(
                        {
                            isKidFriendly: friendlyWith.isKidFriendly,
                            isDogFriendly: friendlyWith.isDogFriendly,
                            isCatFriendly: !friendlyWith.isCatFriendly,
                        }
                    ))}
                >
                    <Image
                    style={friendlyWith.isCatFriendly ? styles.selectedImageStyling : styles.imageStyling}
                    source={require("../../assets/cat-black-icon.png")}
                    />
                </TouchableOpacity>
            </View>
        </View>
 );
}

const styles = StyleSheet.create({
    container: {
        width: 195,
        paddingLeft: 21,
    },
    title: {
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,

        color: '#000000', 
    },
    petImageRow: {
        // width: 210,
        textAlign: 'center',
        justifyContent: 'center',

        display: 'flex',
        flexDirection: 'row',
    },
    selectedImageStyling: {
        marginRight: 21,
        marginTop: 9,
        height: 40,
        width: 40,
        borderRadius: '50%',
        justifyContent: "center",
        shadowColor: 'rgba(36, 166, 24, 1)',
        shadowOffset: { width: 0, height: 0},
        shadowOpacity: .6,
        shadowRadius: 3,  
    }, 
    imageStyling: {
        marginRight: 21,
        marginTop: 9,
        height: 40,
        width: 40,
    }, 
});


export default FriendlyWith;