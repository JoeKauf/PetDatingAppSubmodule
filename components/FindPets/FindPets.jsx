import React, { useState, useRef, useMemo, useEffect } from 'react';
import { useSelector } from 'react-redux';

import TinderCard from 'react-tinder-card'

import {View } from 'react-native';
import HomeMenu from './HomeButtons/HomeMenu';
import PetCard from './PetCard/PetCard';
import { getPets } from '../../data_layer/Pets';

const FindPets = ({ navigation }) => {
    const query = useSelector((state) => state.query); 
    const [petData, petDataSet] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(petData.length - 1);
    const currentIndexRef = useRef(currentIndex);
    const [showSwipeResults, setShowSwipeResults] = useState(
            () => {
                const filledArray = Array(petData.length).fill(-1);
                return (filledArray)
            }
    );
    const childRefs =
        Array(petData.length)
            .fill(0)
            .map((i) => React.createRef())
        ;
    
    currentIndexRef.current = currentIndex;   

    const getPetData = (query) => {
        function setPetData(data) {
            petDataSet(data);
            setCurrentIndex(data.length - 1)
            setShowSwipeResults(() => {
                const filledArray = Array(petData.length).fill(-1);
                return (filledArray)
            })
        }
        getPets(setPetData, query)  
    }
    
    useEffect(() => {
        getPetData(query);
    }, [query])

    const updateCurrentIndex = (val) => {
        setCurrentIndex(val)
        currentIndexRef.current = val
    } 

    const canGoBack = currentIndex < petData.length - 1;
    const canSwipe = currentIndex >= 0;      

    const outOfFrame = (idx) => {
        currentIndexRef.current >= idx && childRefs[idx].current.restoreCard()
    }

    const swipe = async (dir) => {
        if (canSwipe && currentIndex < petData.length) {
            await childRefs[currentIndex].current.swipe(dir) // Swipe the card!
        }
    }

    // increase current index and show card
    const goBack = async () => {
        if (!canGoBack) return
        const newIndex = currentIndex + 1

        // Undo Last Swipe Result
        let newSwipeResults = [ ...showSwipeResults ];
        newSwipeResults[newIndex] = -1;
        setShowSwipeResults(newSwipeResults);
        
        updateCurrentIndex(newIndex)
        await childRefs[newIndex].current.restoreCard()
    }
    const onSwipe = (dir, index, setShowSwipeResults) => {
        // Set Swipe Results
        let newSwipeResults = [ ...showSwipeResults ];
        newSwipeResults[index] = dir === 'right' ? 1 : 0;
        setShowSwipeResults(newSwipeResults);
        
        updateCurrentIndex(index - 1)
    }
    
    
    const mappedPetCards =
        (petData.map((individualPet, index) => {
            return (
                <TinderCard
                    ref={childRefs[index]}
                    key={individualPet.id}
                    onSwipe={(dir) => onSwipe(dir, index, setShowSwipeResults)}
                    onCardLeftScreen={() => outOfFrame(index) }
                    preventSwipe={['up', 'down']}
                    swipeRequirementType={'position'}
                    swipeThreshold={50}
                >
                    <PetCard
                        swipe={swipe}
                        goBack={goBack}
                        petData={individualPet}
                        showSwipeResults={showSwipeResults}
                        setShowSwipeResults={setShowSwipeResults}
                        petIndex={index}
                        navigation={navigation}
                    />
                </TinderCard>)
        }));

    return (
        <View style={{backgroundColor: '#fff'}}>
            <View style={{ height: 725 }}>
                {mappedPetCards}
            </View>
            <View style={{height: 75}}>            
                <HomeMenu navigation={navigation} />
            </View>
        </View>
 );
}


export default FindPets;