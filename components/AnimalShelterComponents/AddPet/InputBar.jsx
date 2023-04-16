import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Text } from 'react-native';

const InputBar = ({ date, barWidth, sideText, side, placeholder, maxLength, value, setValue, isAlpha }) => {
    const styles = StyleSheet.create({
    dateUnderlines: {
        backgroundColor: '#6A6A6A',
        width: 15,
        height: 3,
        marginTop: -3,
        marginBottom: 5,
        marginRight: 10,
    },
    underlineSeperator: {
        width: 18,
    },
    inputBar: {
        backgroundColor: '#6A6A6A',
        height: 3,
        width: barWidth || 299,
        opacity: .2,
    },
    inputText: {
        fontWeight: '500',
        fontSize: 30,
        lineHeight: 30,
        
        color: '#6A6A6A',
        height: 35,
        width: barWidth || 299,
    },
    date: {
        fontWeight: '500',
        fontSize: 30,
        // lineHeight: 30,
        
        color: '#6A6A6A',
        height: 35,
        width: 299,
        letterSpacing: 6,
    },
});
    // const [value, setValue] = useState('')
    const OnDateChange = (text) => {
        if (text.slice(-1) === '.') {
            
        } else if (text.length === 2 && value.length < text.length) {
            setValue(text + '-')
        } else if (text.length === 5 && value.length < text.length) {
            setValue(text + '-')
        } else {
            setValue(text)
        }
    }
    return (
        <View>
            {date ?
            <View>
                <TextInput
                    style={styles.date}
                    selectionColor={'#23A617'}
                    placeholder={placeholder || '01-11-2001'}
                    keyboardType={'numeric'}
                    value={value}
                    onChangeText={(text) => OnDateChange(text)}
                    maxLength={10}
                />
                <View style={{ flexDirection: 'row'}}>
                    <View style={styles.dateUnderlines} />
                    <View style={styles.dateUnderlines} />
                        
                    <View style={styles.underlineSeperator} />
                    
                    <View style={styles.dateUnderlines} />
                    <View style={styles.dateUnderlines} />
                        
                    <View style={styles.underlineSeperator} />
                    
                    <View style={styles.dateUnderlines} />
                    <View style={styles.dateUnderlines} />
                    <View style={styles.dateUnderlines} />
                    <View style={styles.dateUnderlines} />
                </View>
                <View style={styles.inputBar} />
            </View> :
                <View style={{ flexDirection: 'row' }}>
                    {side === 'left' && <Text style={[styles.inputText, {marginRight: -70}]}>{sideText}</Text>}
                    <View>
                    <TextInput
                        style={styles.inputText}
                        selectionColor={'#23A617'}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                        placeholder={placeholder || 'Name...'}
                        maxLength={maxLength}
                        keyboardType={isAlpha ? null : 'numeric'}
                    />
                    <View style={styles.inputBar} />
                    </View>
                    {side === 'right' && <Text style={[styles.inputText, {paddingLeft: 10}]}>{sideText}</Text>}
                </View>
            } 
        </View>
    );
}



export default InputBar;