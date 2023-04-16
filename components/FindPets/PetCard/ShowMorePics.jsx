import React, {useState} from 'react';
import { LinearGradient } from 'expo-linear-gradient';
import ChatWithPet from './ChatWithPet';
import UnfilledHeart from './UnfilledHeart';
import { StyleSheet, isSwipeDisabled, View, Text, TouchableWithoutFeedback, Image } from 'react-native';

const ShowMorePics = (
    {
        email,
        petData,
        showSwipeResults,
        isSwipeDisabled,
        petIndex,
        swipe,
        navigation,
        setSelectedAnimal,
        isAnimalShelter,
    }) => {
    
    const [showMoreInfo, setShowMoreInfo] = useState(false);
    const styles = StyleSheet.create({
    petInfo: {
        position: 'absolute',
    },
    bottomContainer: {
        width: isSwipeDisabled ? 312 : 675,
    },
    LeftList: {
        width: isSwipeDisabled ? 156 : 187.5,
        overflow: 'hidden',
        backgroundColor: 'black',
        paddingBottom: 12,
    },
    RightList: {
        right: 0,
        width: isSwipeDisabled ? 156 : 187.5,
        overflow: 'hidden',
        backgroundColor: 'black',
        paddingBottom: 12,
        paddingRight: 12,
    },
    BottomList: {
        paddingRight: 12,
        borderTopColor: '#ffff',
        borderTopWidth: .25,
        width: isSwipeDisabled ? 312 : 375,
        overflow: 'hidden',
        backgroundColor: 'black',
        paddingBottom: 12,
        paddingTop: 12,
        bottom: 0,
        bottomBorder: '8px',
    },
    image: {
        maxWidth: 20,
        maxHeight: 20,
        marginTop: -2.7,
        marginRight: 7,
        }, 
    imageCluster: {
        maxWidth: 20,
        maxHeight: 20,
        marginTop: -2.7,
        marginRight: 2,
        },
    imageClusterBoolean: {
        position: 'absolute',
        maxWidth: 20,
        maxHeight: 20,
        top: 12,
        },
    InfoList: {
        fontSize: isSwipeDisabled ? '14px' : '16px',
        height: isSwipeDisabled ? 24 : 26,
        color: '#FFFFFF',
        left: isSwipeDisabled ? 9 : 15,
        },
    InfoListMultiLine: {
        fontSize: isSwipeDisabled ? '14px' : '16px',
        height: isSwipeDisabled ? 20 : 26,
        color: '#FFFFFF',
        left: isSwipeDisabled ? 35 : 41,
    },
    heading: {
        zIndex: 101,
        width: isSwipeDisabled ?312 : 375,
        overflow: 'visible'
    },
     infoTitle: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: isSwipeDisabled ? '20px' : '24px',
        lineHeight: '35px',
        color: '#FFFFFF',
        left: isSwipeDisabled ? 9 : 15,
    },
    infoSubheadingTop: {
        fontStyle: 'normal',
        fontWeight: '400',
        fontSize: '16px',
        lineHeight: '22px',
        left: isSwipeDisabled ? 9 : 15,
        width: 240,
        paddingBottom: 5,
        
        color: '#FFFFFF',
        },
    buttons: {
        position: 'absolute',
        flexDirection: 'row',
        right: 20,
        top: 20,
    }
});

    const ListItem = ({ description, imageURL }) => {
        return (
            <Text numberOfLines={1} style={styles.InfoList}>
                <Image style={styles.image} source={imageURL} />
                {description}
            </Text >
        );
    }
    const MultiLineListItem = ({ description, imageURL }) => {
        const charLimit = isSwipeDisabled ? 44 : 46
        
        let splitDescriptionOne = description
        let splitDescriptionTwo
        let splitDescriptionThree
        if (description.length > charLimit * 2) {
            splitDescriptionOne = description.substring(0, charLimit).trim()
            splitDescriptionTwo = description.substring(charLimit, charLimit + charLimit).trim();
            splitDescriptionThree = description.substring(charLimit + charLimit).trim();
        } else if (description.length > charLimit * 2) {
            splitDescriptionOne = description.substring(0, charLimit)
            splitDescriptionTwo = description.substring(charLimit);
        }

        return (
            <View>
                {splitDescriptionOne &&
                    < Text numberOfLines={1} style={styles.InfoList}>
                        <Image style={styles.image} source={imageURL} />
                        {splitDescriptionOne}
                    </Text >}
                {splitDescriptionTwo &&
                    <Text numberOfLines={1} style={styles.InfoListMultiLine}>
                        {splitDescriptionTwo}
                    </Text >}
                {splitDescriptionThree &&
                    <Text numberOfLines={1} style={styles.InfoListMultiLine}>
                        {splitDescriptionThree}
                    </Text >}
            </View>
        );
    }
    const LeftColumnInfo = (
        <View style={styles.LeftList}>
            <ListItem description={petData.gender} imageURL={petData.gender === "Male" ? require("../../../assets/male-icon.png") : require("../../../assets/female-white-icon.png")} />
            <ListItem description={petData.breed} imageURL={require("../../../assets/paw-icon.png")} />
            <ListItem description={petData.weight} imageURL={require("../../../assets/scale-icon.png")} />
            <Text numberOfLines={1} style={styles.InfoList}>
                <View>
                    <Image style={styles.imageCluster} source={require("../../../assets/kid-white-icon.png")} />
                    <Image style={styles.imageClusterBoolean} source={petData.friendlyWith.kids ? require("../../../assets/green-check-icon.png") : require("../../../assets/red-x-icon.png")} />
                </View>
                <View>
                    <Image style={styles.imageCluster} source={require("../../../assets/dog-white-icon.png")} />
                    <Image style={styles.imageClusterBoolean} source={petData.friendlyWith.dogs ? require("../../../assets/green-check-icon.png") : require("../../../assets/red-x-icon.png")} />
                </View>
                <View>
                    <Image style={styles.imageCluster} source={require("../../../assets/cat-white-icon.png")} />
                    <Image style={styles.imageClusterBoolean} source={petData.friendlyWith.cats ? require("../../../assets/green-check-icon.png") : require("../../../assets/red-x-icon.png")} />
                </View>
                {"Friendly"}
            </Text >
        </View>
    );

    const RightColumnInfo = (
        <View style={styles.RightList}>
            <ListItem description="" imageURL={null} />
            <ListItem description={petData.price} imageURL={require("../../../assets/money-icon.png")} />
            <ListItem description={petData.houseTrained ? "House Trained" : "Not House Trained"} imageURL={require("../../../assets/books-icon.png")} />
            <ListItem description={petData.activityLevel + " Energy"} imageURL={require("../../../assets/dumbell-icon.png")} />
        </View>
    );

    const Heading = () => {
            return (
                <LinearGradient
                    colors={['black', 'transparent']}
                    start={{ x: 0, y: 1 }}
                    end={{ x: 0, y: 0 }}
                    style={styles.heading}
                >
                    <Text style={styles.infoTitle}>{petData.name}, {petData.age}
                        
                    </Text>
                    <View style={styles.buttons}>
                        <ChatWithPet
                            navigation={navigation}
                            isSwipeDisabled={isSwipeDisabled}
                            petData={petData}
                            isAnimalShelter={isAnimalShelter}
                        />
                        <View style={{width: 17}}></View>
                        <UnfilledHeart
                            email={email}
                            petID={petData.petID}
                            showSwipeResults={showSwipeResults}
                            isSwipeDisabled={isSwipeDisabled}
                            petIndex={petIndex}
                            swipe={swipe}
                            id={petData.id}
                            setSelectedAnimal={setSelectedAnimal}
                            isAnimalShelter={isAnimalShelter}
                            />
                        </View>
                    {!showMoreInfo && <Text style={styles.infoSubheadingTop}>{petData.adoptionLocationName}{"\n"}{petData.distanceAway}</Text>}

                    
                </LinearGradient>
            );
        }

    return (
        <View>
            {/* <View style={{ flexDirection: 'row'}}>
                <TouchableHighlight
                    onPress={() => handleChooseNextPhoto("left")}>
                    <View style={styles.lastPic}></View>
                </TouchableHighlight>
                <TouchableHighlight
                    onPress={() => handleChooseNextPhoto("right")}>
                    <View style={styles.nextPic}></View>
                </TouchableHighlight>
            </View> */}
            <TouchableWithoutFeedback
                    style={{zIndex: 0}}    
                    onPress={() => setShowMoreInfo(!showMoreInfo)}
                >
                <View style={styles.bottomContainer}>
                    <Heading />
                    {showMoreInfo && (
                        <View>
                            <View style={{
                                flexWrap: 'wrap',
                                flexDirection: 'row',
                            }}>
                                {LeftColumnInfo}
                                {RightColumnInfo}
                            </View>
                            <View style={styles.BottomList}>
                                <MultiLineListItem description={petData.medicalStatus} imageURL={require("../../../assets/syringe-icon.png")} />
                                <MultiLineListItem description={petData.description} imageURL={require("../../../assets/news-icon.png")} />
                            </View>
                        </View>
                    )}
                </View>
            </TouchableWithoutFeedback>
        </View>
     );
}

export default ShowMorePics;