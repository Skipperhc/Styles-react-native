import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import Colors from '../constants/colors'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>O jogo acabou!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={({uri: 'https://www.igrejauniversal.pt/wp-content/uploads/2018/06/as-4-leis-para-vencer-a-guerra-espiritual.jpg'})}
                    source={require('../assets/success.png')}
                    fadeDuration={300}
                    style={styles.image}
                    resizeMode="cover" />
            </View>
            <View style={styles.resultContainer}>
                <BodyText style={styles.resultText}>
                    O celular levou <Text style={styles.highligth}>{props.roundsNumber}</Text> tentativas para 
                    adivinhar o numero <Text style={styles.highligth}>{props.userNumber}</Text>.
            </BodyText>
            </View>
            <Button title="Novo jogo" onPress={props.onRestart} />
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: 150,
        borderWidth: 3,
        borderColor: 'black',
        width: 300,
        height: 300,
        overflow: 'hidden',
        marginVertical: 30
    },
    highligth: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 20
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;