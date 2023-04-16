import React, { useState, useEffect } from 'react';
import TitlePage from './TitlePage'
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import PetCard from '../../FindPets/PetCard/PetCard';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setAnimalType } from '../../../redux/addPet'
import { getAnimalShelterPets } from '../../../data_layer/Pets';
import LikedPets from './LikedPets';
import BottomNav from './BottomNav';

const ShelterAnimals = ({ navigation }) => {
    const dispatch = useDispatch();
    const [selectedAnimal, setSelectedAnimal] = useState(undefined);
    const email = useSelector((state) => state.userAuth.email);
    const [isDog, setDogValue] = useState(true)
    const [cats, setCats] = useState([])
    const [dogs, setDogs] = useState([])

    const setIsDog = (value) => {
        setDogValue(value)
        dispatch(setAnimalType(value));
    }

    useEffect(() => {
        console.log("Get Animals pre")
        getAnimalShelterPets(email, setCats, setDogs);
        console.log("Get Animals post")
    }, [])

    return (
        <View>
            <View style={{height: 165}}>
                <TitlePage isDog={isDog} setIsDog={setIsDog} navigation={navigation} />
            </View>
            <View style={{height: 675}}>
                <LikedPets isDog={isDog} navigation={navigation} setSelectedAnimal={setSelectedAnimal} petData={isDog ? dogs : cats} />
                {selectedAnimal && <View style={styles.petCard}>
                    <PetCard
                        email={email}
                        isSwipeDisabled="true"
                        swipe={null}
                        petIndex={null}
                        showSwipeResults={null}
                        petData={selectedAnimal}
                        goBack={null}
                        navigation={navigation}
                        style={styles.petCard}
                        setSelectedAnimal={setSelectedAnimal}
                        isAnimalShelter={true}
                />
                </View>}
            </View>
            <View style={{ width: '100%', height: 120, flexDirection: 'row' }}>
                <View style={{ width: 360, height: 10}}></View>
                <BottomNav  navigation={navigation} />
            </View>
        </View>
 );
}

const styles = StyleSheet.create({
    petCard: {
        position: 'absolute',
        top: 0,
    }
});

export default ShelterAnimals;