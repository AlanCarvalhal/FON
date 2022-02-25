import React, { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { Icon } from 'react-native-elements';
import RNPickerSelect from 'react-native-picker-select';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [atm, setAtm] = useState('');
  const [mol, setMol] = useState('');
  const [volume, setVolume] = useState('');
  const [temp, setTemp] = useState('');
  const [resultado, setResult] = useState(' ');

  const [atmBtn, setAtmBtn] = useState(false);
  const [molBtn, setMolBtn] = useState(false);
  const [volumeBtn, setVolumeBtn] = useState(false);
  const [tempBtn, setTempBtn] = useState(false);

  const [select, setSelect] = useState('');

  const [lang] = React.useContext(AppContext);

  function g_setCNTP() {
    setAtm('1');
    setVolume('22.4');
    setMol('1');
    setTemp('273.15');
  }

  function g_calculo() {
    let r = 0.082,
      valor;

    switch (select) {
      case 'ATMPicker':
        valor = (mol * r * temp) / volume;
        break;

      case 'LitrosPicker':
        valor = (mol * r * temp) / atm;
        break;

      case 'molsPicker':
        valor = (atm * volume) / (r * temp);
        break;

      case 'TempPicker':
        valor = (atm * volume) / (mol * r);
        break;
      default:
        valor = '';
        break;
    }

    valor != ''
      ? setResult(`${+parseFloat(valor).toFixed(12)}`)
      : setResult(' ');
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

      <Text style={styles.tituloTela}>{t('gases_eqgases', lang)}</Text>

      <View style={{width:'70%'}}>
        <RNPickerSelect
          placeholder={{}}
          onValueChange={(value) => {
            setSelect(value);

            switch (value) {
              case 'ATMPicker':
                setAtmBtn(false);
                setMolBtn(true);
                setVolumeBtn(true);
                setTempBtn(true);
                break;

              case 'LitrosPicker':
                setAtmBtn(true);
                setMolBtn(true);
                setVolumeBtn(false);
                setTempBtn(true);
                break;

              case 'molsPicker':
                setAtmBtn(true);
                setMolBtn(false);
                setVolumeBtn(true);
                setTempBtn(true);
                break;

              case 'TempPicker':
                setAtmBtn(true);
                setMolBtn(true);
                setVolumeBtn(true);
                setTempBtn(false);
                break;

              default:
                setAtmBtn(false);
                setMolBtn(false);
                setVolumeBtn(false);
                setTempBtn(false);
                break;
            }
          }}
          items={[
            {
              label: t('select_eqgases', lang),
              value: null,
              color: 'rgb(255,95,85)',
            },
            { label: t('pressao_eqgases', lang), value: 'ATMPicker' },
            { label: t('volume_eqgases', lang), value: 'LitrosPicker' },
            { label: t('mol_eqgases', lang), value: 'molsPicker' },
            { label: t('temperatura_eqgases', lang), value: 'TempPicker' },
          ]}
        />
      </View>

      <View style={stylesUnico.funcao}>
        <View style={{marginRight:5}}>
          <Text>{t('atm_eqgases', lang)}</Text>
          <TextInput
            style={stylesUnico.textInput}
            value={atm}
            onChangeText={(text) => {
              if (!isNaN(text)) {
                setAtm(text);
              } else {
                let anterior = atm;
                setAtm('Apenas números');
                setTimeout(function () {
                  setAtm(anterior);
                }, 2000);
              }
            }}
            editable={atmBtn}
          />

          <Text>{t('mols_eqgases', lang)}</Text>
          <TextInput
            style={stylesUnico.textInput}
            value={mol}
            onChangeText={(text) => {
              if (!isNaN(text)) {
                setMol(text);
              } else {
                let anterior = mol;
                setMol('Apenas números');
                setTimeout(function () {
                  setMol(anterior);
                }, 2000);
              }
            }}
            editable={molBtn}
          />
        </View>

        <View style={{marginLeft:5}}>
          <Text>{t('litros_eqgases', lang)}</Text>
          <TextInput
            style={stylesUnico.textInput}
            value={volume}
            onChangeText={(text) => {
              if (!isNaN(text)) {
                setVolume(text);
              } else {
                let anterior = volume;
                setVolume('Apenas números');
                setTimeout(function () {
                  setVolume(anterior);
                }, 2000);
              }
            }}
            editable={volumeBtn}
          />

          <Text>{t('kelvin_eqgases', lang)}</Text>
          <TextInput
            style={stylesUnico.textInput}
            value={temp}
            onChangeText={(text) => {
              if (!isNaN(text)) {
                setTemp(text);
              } else {
                let anterior = temp;
                setTemp('Apenas números');
                setTimeout(function () {
                  setTemp(anterior);
                }, 2000);
              }
            }}
            editable={tempBtn}
          />
        </View>
      </View>

      <View style={[stylesUnico.funcao, {width:'100%'}]}>
        <TouchableOpacity
          style={{width:'40%'}}
          onPress={() => {
            g_setCNTP();
          }}>
          <Text style={styles.btnSalmao}>{t('cntp_eqgases', lang)}</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{width:'40%'}}
          onPress={() => {
            g_calculo();
          }}>
          <Text style={styles.btnSalmao}>{t('calcular_eqgases', lang)}</Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text> {t('resultado_eqgases', lang)} </Text>
        <Text style={stylesUnico.resultado}>{resultado}</Text>
      </View>
    </View>
  );
}
