/*
    To-do: on hold due to time constraints, searchable location as alternative to
           background location.
*/
import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import * as Location from 'expo-location';
DropDownPicker.setMode("BADGE");

const SearchableLocation = ({navigation}) => {
  const [open, setOpen] = useState(true);
  const [value, setValue] = useState(null);
  const [items, setItems] = useState([
    {label: 'German Shepherd', value: '1'},
    { label: 'Golden Retriever', value: '2' },
    {label: 'Doberman Pincher', value: '3'},
    { label: 'Poodle', value: '4' },
    {label: 'Jack Russel', value: '5'},
    { label: 'Yorkshire Terrier', value: '6' },  
    {label: 'Pug', value: '7'},
    {label: 'Pitbull', value: '8'}
  ]);

    return (
    <View style={styles.dropDownPicker}>
        <View style={styles.titleView}>
            <TouchableOpacity
                style={styles.backButtonContainer}
                onPress={() => navigation.goBack()}
            >
                <Image
                    style={styles.backButton}
                    source={require("../../assets/back-button-icon.png")}
                    />
            </TouchableOpacity>
            <Image style={styles.imageContainer}
                source={require("../../assets/map-black-icon.png") 
                }
            />
            <Text style={styles.title}>Location</Text>
        </View>
      <DropDownPicker
        searchable={true}    
        open={true}
        value={value}
        items={items}
        setValue={setValue}
        setItems={setItems}
        showBadgeDot={true}
        dropDownDirection="BOTTOM"
        maxHeight={500}
        showArrowIcon={false}
        badgeTextStyle={{
            color: "#ffff",
        }}
        badgeDotStyle={{
            backgroundColor: '#23A617',
        }}
        badgeStyle={{
            backgroundColor: '#23A617',
          }}
          badgeColors={["#23A617"]}
        modalContentContainerStyle={{
            height: 100,
        }}
        searchPlaceholder="Search..."
        loading={true}
    />
</View>
  );
}

const styles = StyleSheet.create({
    title: {     
        fontWeight: '700',
        fontSize: 22,
        lineHeight: 30,
        /* identical to box height */

        textAlign: 'center',
    },
    titleView: {
        alignItems: 'center',
        paddingTop: 35,
    },
    imageContainer: {
        height: 30,
        width: 36,
        marginTop: 10,
    },
    titleSeperator: {
        borderRightWidth: '1px solid #000000',
        height: 30,
        // padding: 2,
        margin: 7.5,
    }, 
    backButtonContainer: {
        position: 'absolute',
        left: 12,
        marginTop: 47,
    },
    backButton: {
        position: 'absolute',
        height: 48,
        width: 48,
    }
});
export default SearchableLocation;