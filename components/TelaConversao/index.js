import * as React from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { useState } from 'react';
import { Icon } from 'react-native-elements';

import { RadioButton } from 'react-native-paper';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [checked, setChecked] = React.useState('');
  const [pressao, setPressao] = React.useState('');
  const [vol, setVol] = React.useState('');
  const [temp, setTemp] = React.useState('');
  const [massa, setMassa] = React.useState('');
  const [resultado, setResultado] = React.useState([' ', ' ', ' ']);

  const [lang] = React.useContext(AppContext);

  function calculo() {
    let tipo = checked;
    let c_pressao = pressao;
    let c_vol = vol;
    let c_temp = temp;
    let results = [' ', ' ', ' '];

    switch (tipo) {
      case 'atm':
        results[0] = `${+parseFloat(c_pressao / 760).toFixed(12)}`;
        break;

      case 'mmHg':
        results[0] = `${+parseFloat(c_pressao * 760).toFixed(12)}`;
        break;

      case 'litros':
        results[1] = `${+parseFloat(c_vol / 1000).toFixed(12)}`;
        break;

      case 'ml':
        results[1] = `${+parseFloat(c_vol * 1000).toFixed(12)}`;
        break;

      case 'celsius':
        results[2] = `${+parseFloat(c_temp - 273.15).toFixed(12)}`;
        break;

      case 'kelvin':
        results[2] = `${+parseFloat(c_temp + 273.15).toFixed(12)}`;
        break;
    }
    setResultado(results);
  }

  return (
    <View
      style={[
        styles.viewTela,
        { justifyContent: 'flex-start', paddingTop: 90 },
      ]}>
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

      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.tituloTela}>
          {' '}
          {t('conversao_conversao', lang)}{' '}
        </Text>
        <View style={stylesUnico.container}>
          <Text> {t('qualcalc_conversao', lang)} </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View style={{ alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="atm"
                    status={checked === 'atm' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('atm')}
                  />
                  <Text>Atm</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="mmHg"
                    status={checked === 'mmHg' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('mmHg')}
                  />
                  <Text>mmHg</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => calculo()}>
                <Text style={styles.btnSalmao}> {t('calcular_conversao', lang)} </Text>
              </TouchableOpacity>
            </View>

            <View style={stylesUnico.caixasTexto}>
              <TextInput
                style={stylesUnico.textInput}
                placeholder={t('insira_conversao', lang)}
                value={pressao}
                onChangeText={(text) => setPressao(text)}
              />
              <View>
                <Text> {t('resultado_conversao', lang)} </Text>
                <Text style={stylesUnico.resultado}>{resultado[0]}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesUnico.container}>
          <Text> {t('qualcalc_conversao', lang)} </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View style={{ alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="litros"
                    status={checked === 'litros' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('litros')}
                  />
                  <Text>L / dm³</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="ml"
                    status={checked === 'ml' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('ml')}
                  />
                  <Text>mL / cm³</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => calculo()}>
                <Text style={styles.btnSalmao}> {t('calcular_conversao', lang)} </Text>
              </TouchableOpacity>
            </View>

            <View style={stylesUnico.caixasTexto}>
              <TextInput
                style={stylesUnico.textInput}
                placeholder={t('insira_conversao', lang)}
                value={vol}
                onChangeText={(text) => setVol(text)}
              />
              <View>
                <Text> {t('resultado_conversao', lang)} </Text>
                <Text style={stylesUnico.resultado}>{resultado[1]}</Text>
              </View>
            </View>
          </View>
        </View>

        <View style={stylesUnico.container}>
          <Text> {t('qualcalc_conversao', lang)} </Text>
          <View
            style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <View style={{ alignItems: 'flex-start' }}>
                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="celsius"
                    status={checked === 'celsius' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('celsius')}
                  />
                  <Text>Celsius</Text>
                </View>

                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                  <RadioButton
                    value="kelvin"
                    status={checked === 'kelvin' ? 'checked' : 'unchecked'}
                    onPress={() => setChecked('kelvin')}
                  />
                  <Text>Kelvin</Text>
                </View>
              </View>

              <TouchableOpacity
                onPress={() => calculo()}>
                <Text style={styles.btnSalmao}> {t('calcular_conversao', lang)} </Text>
              </TouchableOpacity>
            </View>

            <View style={stylesUnico.caixasTexto}>
              <TextInput
                style={stylesUnico.textInput}
                placeholder={t('insira_conversao', lang)}
                value={temp}
                onChangeText={(text) => setTemp(text)}
              />
              <View>
                <Text> {t('resultado_conversao', lang)} </Text>
                <Text style={stylesUnico.resultado}>{resultado[2]}</Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
