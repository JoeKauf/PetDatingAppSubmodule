import React, { useState, useEffect } from 'react';
import {useSelector, useDispatch } from "react-redux";
import {View, StyleSheet } from 'react-native';

import PetCard from '../FindPets/PetCard/PetCard';
import TitlePage from './TitlePage';
import FilterByPet from './FilterByPet';
import Messages from './Messages';
import LikedPets from './LikedPets';

import { getLikedPets } from '../../data_layer/Pets';
import { addLikedPets } from '../../redux/mypets';

const ChatWithPets = ({ navigation, route }) => {
    const dispatch = useDispatch();
    const mypets = useSelector((state) => state);
    const email = mypets.userAuth.email

    const getPetData = () => {
        function setPetData(data) {
            dispatch(addLikedPets(data));
        }
        getLikedPets(email, setPetData)  
    }

    useEffect(() => {
        getPetData()
    }, [])

    const { page } = route.params;
    const [isChatToggle, setIsChatToggle] = useState(page != "Likes");
    const [selectedAnimal, setSelectedAnimal] = useState(undefined);

    const pets = mypets.mypets;

    return (
    <View style={{ backgroundColor: '#fff' }}>
            <TitlePage isChatToggle={isChatToggle} setIsChatToggle={setIsChatToggle} navigation={navigation}></TitlePage>
            {isChatToggle
                ?
                (<View>
                    <FilterByPet petData={pets} navigation={navigation}></FilterByPet>
                    <Messages navigation={navigation} email={email}></Messages>
                </View>) :
                (<View>
                    <LikedPets
                        email={email}
                        petData={pets}
                        navigation={navigation}
                        setSelectedAnimal={setSelectedAnimal}
                    />
                    {selectedAnimal && 
                    <View style={styles.petCard}>
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
                    />
                    </View>
                    }
                </View>)
            }
            
    </View>
    )
    
}

const styles = StyleSheet.create({
    petCard: {
        position: 'absolute',
    }
})

export default ChatWithPets;