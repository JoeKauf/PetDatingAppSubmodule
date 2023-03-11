import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import { Slider } from '@miblanchard/react-native-slider';
import { useDispatch } from "react-redux";

const MaxDistance = ({ maxDistance, setMaxDistance }) => {
    const dispatch = useDispatch();
    const isAnwhere = maxDistance > 300
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Max Distance</Text>
                <Text style={styles.distance}>{isAnwhere ? "Anywhere" : maxDistance + " Miles"} </Text>
            </View>
            <Slider
                value={maxDistance}
                onValueChange={value => dispatch(setMaxDistance(value))}
                animateTransitions={true}
                minimumTrackTintColor="#23A617"
                maximumTrackTintColor="#DBD9D9"
                thumbTintColor="#ffff"
                thumbStyle={styles.thumbStyle}
                maximumValue={315}
                minimumValue={15}
                step={15}
            />
        </View>
 );
}

const styles = StyleSheet.create({
    container: {
        marginLeft: 26.375,
        marginRight: 26.375 + 20,
        paddingTop: 6,
        paddingBottom: 6,

    },
    title: { 
        fontWeight: '500',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */

        color: '#000000',
    },
    header: {
        textAlign: 'center',
        justifyContent: 'space-between',

        display: 'flex',
        flexDirection: 'row',
    },
    thumbStyle: {
        backgroundColor: '#FFFFFF',
        borderRadius: 50,
        width: 25,
        height: 25,
        shadowColor: 'rgba(0, 0, 0, 0.25)',
        shadowOffset: { width: 2, height: 2},
        shadowOpacity: 1,
        shadowRadius: 4,    
    }, 
    distance: {
        fontWeight: '300',
        fontSize: 18,
        lineHeight: 25,
        /* identical to box height */

        color: '#514F4F',
    }
});


export default MaxDistance;