import React from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'

const GameOverScreen = props => {
    return (
        <View style={styles.screen}>
            <Text>O jogo acabou!</Text>
            <Text>Numero de rodadas: {props.roundsNumber}</Text>
            <Text>Numero escolhido: {props.userNumber}</Text>
            <Button title="Novo jogo" onPress={props.onRestart}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default GameOverScreen;