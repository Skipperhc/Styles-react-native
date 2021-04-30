import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Image,
    Dimensions,
    ScrollView
} from 'react-native'

import BodyText from '../components/BodyText'
import TitleText from '../components/TitleText'
import MainButton from '../components/MainButton'
import Colors from '../constants/colors'

const GameOverScreen = props => {
    return (
        <ScrollView>
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
                <MainButton onPress={props.onRestart}>Novo jogo</MainButton>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20
    },
    image: {
        width: '100%',
        height: '100%'
    },
    imageContainer: {
        borderRadius: Dimensions.get('window').width * 0.7 / 2,
        borderWidth: 3,
        borderColor: 'black',
        width: Dimensions.get('window').width * 0.7,
        height: Dimensions.get('window').width * 0.7,
        overflow: 'hidden',
        marginVertical: Dimensions.get('window').height / 30
    },
    highligth: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: Dimensions.get('window').width / 60
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOverScreen;