import React, {useState, useEffect} from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext } from '../../App';

export default function App({ navigation }) {
  const [lang, setLang] = React.useContext(AppContext);
  const [sound, setSound] = React.useState();

  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require('../../assets/fon.mp3')
    );
    setSound(sound);
    await sound.playAsync();
  }

  useEffect(() => {
    playSound();
  }, [])

  return (
    <View style={styles.viewTela}>
      <Image
        style={{
          height: 150,
          maxHeight: '100%',
          maxWidth: '100%',
          resizeMode: 'contain',
        }}
        source={require('../../assets/imgs/fon_logo.png')}
      />
      <Image
        style={{
          marginTop: 5,
          height: 80,
          maxHeight: '100%',
          maxWidth: '100%',
          resizeMode: 'contain',
        }}
        source={require('../../assets/imgs/fon_nome.png')}
      />

      <View
        style={{
          marginTop: 40,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text>Selecione seu idioma</Text>
        <Text>Choose your language</Text>
        <Text>Seleccione su idioma</Text>

        <View style={{ marginTop: 5, flexDirection: 'row' }}>
          <TouchableOpacity
            onPress={() => {
              setLang('pt');
              navigation.navigate('TelaLogin');
            }}
            style={styles.bandeiraTouchable}>
            <Image
              style={styles.bandeiraImage}
              source={require('../../assets/imgs/bandeira_br.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setLang('en');
              navigation.navigate('TelaLogin');
            }}
            style={styles.bandeiraTouchable}>
            <Image
              style={styles.bandeiraImage}
              source={require('../../assets/imgs/bandeira_us.png')}
            />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setLang('es');
              navigation.navigate('TelaLogin');
            }}
            style={styles.bandeiraTouchable}>
            <Image
              style={styles.bandeiraImage}
              source={require('../../assets/imgs/bandeira_es.png')}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}
