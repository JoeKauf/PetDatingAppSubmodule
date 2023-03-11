import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SignUpProgress = ({ currentPage, isAnimalShelter }) => {
    return (
        
        <View>
            {isAnimalShelter ? <View style={styles.prorgressContainer}>
                <View>
                    <View style={[styles.progressBubble, styles.progressPageSeen]}>
                        <Text style={styles.progressBubbleText}>1</Text>
                    </View>
                    <Text style={styles.progressText}>Account</Text>
                </View>
                <View style={styles.progressSeperator} />
                <View>
                    <View style={[styles.progressBubble, currentPage > 1 && styles.progressPageSeen]}>
                        <Text style={styles.progressBubbleText}>2</Text>
                    </View>
                    <Text style={styles.progressText}>Location</Text>
                </View>
            </View> :
                <View style={styles.prorgressContainerTwo}>
                    <View style={styles.progressSeperatorTwo} />
                    <View>
                        <View style={[styles.progressBubble, styles.progressPageSeen]}>
                            <Text style={styles.progressBubbleText}>1</Text>
                        </View>
                        <Text style={styles.progressText}>Sign Up</Text>
                    </View>
                    <View style={styles.progressSeperatorTwo} />
                </View>}
        </View>
 );
}

const styles = StyleSheet.create({
    prorgressContainer: {
        flexDirection: 'row',
        marginTop: 25,
        marginBottom: 22,
    },
    prorgressContainerTwo: {
        flexDirection: 'row',
        marginTop: 45,
    },
    progressText: {
        position: 'absolute',
        bottom: -15,
        left: -13,

        width: 90,
        fontWeight: '700',
        fontSize: 13,
        lineHeight: 20,
        letterSpacing: '0.05em',

        color: '#919191',
    },
    progressBubble: {
        backgroundColor: '#D1D1D1',
        borderRadius: 50,
        width: 30,
        height: 30,
    },
    progressPageSeen: {
        backgroundColor: '#23A617',
    },
    progressBubbleText: {
        color: '#ffff',
        fontWeight: '600',
        fontSize: 17,
        lineHeight: 27,
        textAlign: 'center',
        marginTop: 2,

        color: '#FFFFFF',
    },
    progressSeperator: {
        borderBottomWidth: 1,
        borderBottomColor: '#DBD9D9',
        margin: 9,
        marginBottom: 25,

        width: 100,
    },
    progressSeperatorTwo: {
        borderBottomWidth: 1,
        borderBottomColor: '#DBD9D9',
        margin: 9,
        marginBottom: 25,

        width: 75,
    }
});

export default SignUpProgress;