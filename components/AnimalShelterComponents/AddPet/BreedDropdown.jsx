import React, { useState } from 'react';
import { Text, StyleSheet, View, TouchableOpacity, Image } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { useDispatch } from "react-redux";
// import { updateDogBreedSelection, updateCatBreedSelection } from '../../redux/querySettings'
import { useSelector } from "react-redux";

DropDownPicker.setMode("BADGE");

const BreedDropdown = () => {
    const dispatch = useDispatch();
    const breeds = useSelector((state) => state.breeds);
    const isDog = useSelector((state) => state.query.type.isDog);
    const queryBreeds = useSelector((state) => state.query.breed);

    const [value, setValue] = useState(isDog ? queryBreeds.dog : queryBreeds.cat);
    const breedValue = isDog ? queryBreeds.dog : queryBreeds.cat;
    if (value != breedValue) {
        dispatch(isDog ? updateDogBreedSelection(value) : updateCatBreedSelection(value) )
    }
    
    return (
    <View style={styles.dropDownPicker}>
      <DropDownPicker
        multiple={true}
        searchable={true}    
        open={true}
        value={value}
        items={isDog ? breeds.dog : breeds.cat}
        setValue={setValue}
        dropDownDirection="BOTTOM"
        maxHeight={400}
        placeholder="Currently showing all breeds."
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
        searchPlaceholder="Search..."
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
        height: 42,
        width: 47,
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
export default BreedDropdown;