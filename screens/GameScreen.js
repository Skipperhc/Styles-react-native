import React, { useState, useRef, useEffect } from 'react';
import { View, Text, StyleSheet, Button, Alert } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import NumberContainer from '../components/NumberContainer';
import Card from '../components/Card';
import MainButton from '../components/MainButton';
import DefaultStyles from '../constants/default-styles';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    } else {
        return rndNum;
    }
}

const GameScreen = props => {

    const [rounds, setRounds] = useState(0);
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    const { userChoice, onGameOver } = props;

    useEffect(() => {
        if (currentGuess === userChoice) {
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    const nextGuessHandler = direction => {
        if (direction === 'menor' && currentGuess < props.userChoice
            || direction === 'maior' && currentGuess > props.userChoice) {
            Alert.alert(
                'Não minta',
                'Você sabe que isso está errado',
                [{ text: 'Desculpa!', style: 'cancel' }]);
            return;
        }
        if (direction === 'menor') {
            currentHigh.current = currentGuess;
        } else {
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess);
        setCurrentGuess(nextNumber);
        setRounds(rounds => rounds + 1)
    }

    return (
        <View style={styles.screen}>
            <Text style={DefaultStyles.title}>Escolha do oponente</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card style={styles.buttonContainer}>
                <MainButton
                    onPress={nextGuessHandler.bind(this, 'menor')}>
                    <Ionicons
                        name={'md-remove'}
                        size={24}
                        color="white"
                    />
                </MainButton>
                <MainButton
                    onPress={nextGuessHandler.bind(this, 'maior')}>
                    <Ionicons
                        name={'md-add'}
                        size={24}
                        color="white"
                    />
                </MainButton>

            </Card>
        </View>
    );

}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
        maxWidth: '90%',
        width: 400
    }
});

export default GameScreen;