import React, { useState } from 'react';

import { StyleSheet, View} from 'react-native';
import CatDogSwitch from './CatDogSwitch';
import FriendlyWith from './FriendlyWith';
import GenderSelection from './GenderSelection';
import MultiSelectFilter from './MultiSelectFilter';
import ToggleButton from './ToggleButton';
import HiddenSettings from './HiddenSettings';
import MaxDistance from './MaxDistance';
import TitlePage from './TitlePage';
import LocationTest from './LocationTest';

import {useSelector } from "react-redux";
import {
    updateCatAgeRange,
    updateDogAgeRange,
    updateCoat,
    updateCatSize,
    updateDogSize,
    updateCatGender,
    updateDogGender,
    updateCatFriendlyWith,
    updateDogFriendlyWith,
    updateCatHouseTrained,
    updateDogHouseTrained,
    updateMaxDistance
} from '../../redux/querySettings'

function breedIdToArray() {
    const state = useSelector((state) => state);
    const breedsList = state.query.type.isDog ? state.breeds.dog : state.breeds.cat
    const selectedBreedIds = state.query.type.isDog ? state.query.breed.dog : state.query.breed.cat 
    
    const convertedIdToNames = selectedBreedIds.map((breedID) => breedsList[breedID - 1].label)
    return convertedIdToNames.length > 0 ? convertedIdToNames : ["All Breeds"];
}

const Settings = ({ navigation }) => {
    const query = useSelector((state) => state.query);    
    const locationAlreadyFound = query.location.city && query.location.state;
    const breedInfo = breedIdToArray()

    return (
        <View>
            <TitlePage navigation={navigation} />
            <CatDogSwitch />
            <HiddenSettings navigation={navigation} route={() => navigation.navigate('Breed')} title="Breed" subtitle="" info={breedInfo} additionalPage={false} />
            <MultiSelectFilter
                title="Age Range"
                values={query.type.isDog ? query.ageRange.dog : query.ageRange.cat}
                updateValues={query.type.isDog ? updateDogAgeRange : updateCatAgeRange}
            />
            <View style={styles.selectionGrouping}>
                <GenderSelection
                    gender={query.type.isDog ? query.gender.dog : query.gender.cat}
                    updateValues={query.type.isDog ? updateDogGender : updateCatGender}
                />
                <View style={styles.verticalSeperator} />
                <FriendlyWith
                    friendlyWith={query.type.isDog ? query.friendlyWith.dog : query.friendlyWith.cat}
                    setFriendlyWith={query.type.isDog ? updateDogFriendlyWith : updateCatFriendlyWith} />
            </View>
            <MultiSelectFilter
                title="Coat"
                values={query.coat}
                updateValues={updateCoat}
            />
            <ToggleButton
                name="House Trained"
                value={query.type.isDog ? query.houseTrained.dog : query.houseTrained.cat}
                setValue={query.type.isDog ? updateDogHouseTrained : updateCatHouseTrained}
            />
            <MultiSelectFilter
                title="Size"
                values={query.type.isDog ? query.size.dog : query.size.cat}
                updateValues={query.type.isDog ? updateDogSize : updateCatSize}
            />
            <View style={styles.locationGrouping}>
                <HiddenSettings
                    disableButton={true}
                    title="Location"
                    subtitle="My Current Location"
                    info={locationAlreadyFound ? [`${query.location.city}, ${query.location.state}`] : ["Waiting..."]}
                    additionalPage={false} />
                {!locationAlreadyFound && <LocationTest />}
                <View style={styles.horizontalSeperator} />
                <MaxDistance maxDistance={query.maxDistance} setMaxDistance={updateMaxDistance} />
            </View>
        </View>
 );
}

const styles = StyleSheet.create({
    title: { 
        top: '50%',
        textAlign: 'center',
        justifyContent: 'center',
        
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '24px',
        lineHeight: '33px',

        color: '#23A617',
    },
    titleView: {
        height: 90,       
    },
    selectionGrouping: {
        width: '100%',

        display: 'flex',
        flexDirection: 'row',
    },
    verticalSeperator: {
        height: 72,
        borderColor: '#DBD9D9',

        borderLeftWidth: .5,
        margin: 5,
    },
    horizontalSeperator: {
        width: 340,
        borderColor: '#DBD9D9',
        borderWidth: .5,

        marginLeft: 26.375,
        marginRight: 26.375,
    },
    locationGrouping: {
        top: 60,
    },
    backButtonContainer: {
        position: 'absolute',
        left: 12,
        marginTop: 47,
        height: 48,
        width: 48,
    },
    backButton: {
        height: 48,
        width: 48,
    }
});


export default Settings;