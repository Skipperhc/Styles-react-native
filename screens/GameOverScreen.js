import React, { useState, useEffect } from 'react'
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

    const [imageSize, setImageSize] = useState(Dimensions.get('window').width * 0.7);
    const [availableDeviceHeight, setAvailableDeviceHeight] = useState(Dimensions.get('window').height)

    useEffect(() => {
        const updateLayout = () => {
            setImageSize(Dimensions.get('window').width * 0.7);
            setAvailableDeviceHeight(Dimensions.get('window').height);
        }

        Dimensions.addEventListener('change', updateLayout);
        return () => {
            Dimensions.removeEventListener('change', updateLayout);
        }
    });

    return (
        <ScrollView>
            <View style={styles.screen}>
                <TitleText>O jogo acabou!</TitleText>
                <View style={{ borderRadius: imageSize, width: imageSize, height: imageSize, ...styles.imageContainer }}>
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
        borderWidth: 3,
        borderColor: 'black',
        overflow: 'hidden',
        marginVertical: 10
    },
    highligth: {
        color: Colors.primary,
        fontFamily: 'open-sans-bold'
    },
    resultContainer: {
        marginHorizontal: 30,
        marginVertical: 10
    },
    resultText: {
        textAlign: 'center',
        fontSize: Dimensions.get('window').height < 400 ? 16 : 20
    }
});

export default GameOverScreen;