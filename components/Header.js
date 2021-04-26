import React from 'react'
import {View, Text, StyleSheet} from 'react-native'

import TitleText from '../components/TitleText'

const Header = props => {
    return (
        <View style={styles.header}>
            <TitleText>{props.title}</TitleText>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        width: '100%',
        height: 90,
        paddingTop: 30,
        backgroundColor: '#f7287b',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export default Header;