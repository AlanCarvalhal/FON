import React , { useState } from 'react';
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);

  const [eletron, setEletron] = useState('');
  const [principal, setPrincipal] = useState('');
  const [azimutal, setAzimutal] = useState('');
  const [mag, setMag] = useState('');
  const [spin, setSpin] = useState('');
  const [result, setResult] = useState({princ:' ', mag:' ', azim:' ', spi:' '});
  
  function q_calculo(input) {
    let 
      metade,
      posLetra,
      posNumero,
      valencia = new Array(),
      result = {
        princ: ' ',
        azim: ' ',
        mag: ' ',
        spi: ' '
      }

    if(input.length>0){
      input = input.toLowerCase();

      posLetra = input.search(/[a-z]/);
      valencia.push(input.slice(0, posLetra));

      input = input.replace(`${valencia[0]}`, '');

      posNumero = input.search(/[0-9]/);
      valencia.push(input.slice(0, posNumero));

      valencia.push(input.slice(posNumero));

      result.princ = valencia[0];

      switch (valencia[1]){
        case 's':
          result.azim = 0;
          metade = 1;
          break;

        case 'p':
          result.azim = 1;
          metade = 3;
          break;

        case 'd':
          result.azim = 2;
          metade = 5;
          break;

        case 'f':
          result.azim = 3;
          metade = 7;
          break;

        default:
          break;
      }

      result.mag = ((valencia[2] - 1) % metade) - result.azim;
      if(result.mag>0){
        result.mag = `${result.mag}`;
      }

      if (valencia[2] <= metade) {
        result.spi = '-1/2';
      } else {
        result.spi = '+1/2';
      }
    }

    return result;
  }

  return (
    <View style={stylesUnico.container}>
      <Icon
        name="chevron-left"
        type="font-awesome"
        color="#555"
        containerStyle={styles.btnVoltar}
        iconStyle={styles.btnIcon}
        onPress={() => navigation.goBack()}
      />

      <Icon
        name="bars"
        type="font-awesome"
        color="#555"
        containerStyle={styles.btnMenu}
        iconStyle={styles.btnIcon}
        onPress={() => navigation.openDrawer()}
      />

      <Text style={styles.tituloTela}>
        {t('quanticos_numquant', lang)}
      </Text>

      <View style={{ alignItems: 'center' }}>
        <Text> {t('valencia_numquant', lang)} </Text>

        <TextInput
          style={stylesUnico.textInput}
          value={eletron}
          onChangeText={(text) => {setEletron(text)}}
        />

        <TouchableOpacity
          onPress={() => {
            setResult(q_calculo(eletron));
          }}>
          <Text style={styles.btnSalmao}>{t('calcular_numquant', lang)}</Text>
        </TouchableOpacity>
      </View>

      <View style={stylesUnico.funcao}>
        <View style={{marginRight:5}}>
          <Text> {t('principal_numquant', lang)} </Text>
          <Text style={stylesUnico.textInput}>{result.princ}</Text>

          <Text> {t('magnetico_numquant', lang)} </Text>
          <Text style={stylesUnico.textInput}>{result.mag}</Text>
        </View>

        <View style={{marginLeft:5}}>
          <Text> {t('azimutal_numquant', lang)} </Text>
          <Text style={stylesUnico.textInput}>{result.azim}</Text>

          <Text> {t('spin_numquant', lang)} </Text>
          <Text style={stylesUnico.textInput}>{result.spi}</Text>
        </View>
      </View>
    </View>
  );
}