import React from 'react'
import { View, Text, StyleSheet, Button, Image } from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <TitleText>O jogo acabou!</TitleText>
            <View style={styles.imageContainer}>
                <Image
                    // source={require('../assets/success.png')}
                    fadeDuration={300}
                    source={({uri: 'https://www.igrejauniversal.pt/wp-content/uploads/2018/06/as-4-leis-para-vencer-a-guerra-espiritual.jpg'})}
                    style={styles.image}
                    resizeMode="cover" />
            </View>
            <BodyText>Numero de rodadas: {props.roundsNumber}</BodyText>
            <BodyText>Numero escolhido: {props.userNumber}</BodyText>
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
    }
});

export default GameOverScreen;