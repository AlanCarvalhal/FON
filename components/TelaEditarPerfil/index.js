import React, { useState } from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, AppContext2, AppContext3, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);
  const [regis, setRegis] = React.useContext(AppContext2);
  const [conta, setConta] = React.useContext(AppContext3);

  const [emailInput, setEmailInput] = useState('');
  const [nickInput, setNickInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');
  const [confirmInput, setConfirmInput] = useState('');
  const [fotonput, setFotoInput] = useState('');

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

      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={stylesUnico.titulo}>{t('foto_editarperfil', lang)}</Text>

        <Image
          style={stylesUnico.imagem}
          source={require('../../assets/imgs/Saulo.png')}
        />

        <Icon
          name="camera"
          type="font-awesome-5"
          color="#555"
          size={33}
          containerStyle={{ marginLeft: 80, marginTop: -25 }}
          iconStyle={{ color: 'rgb(255,95,85)' }}
          onPress={() => {}}
        />

        <Text style={stylesUnico.leftNegri}>
          {t('alterardados_editarperfil', lang)}
        </Text>

        <View style={stylesUnico.caixaTexto}>
          <Text>{t('alterarnome_editarperfil', lang)}</Text>

          <TextInput
            style={stylesUnico.textInput}
            placeholder={t('nome_editarperfil', lang)}
            value={nickInput}
            onChangeText={(text) => {
              setNickInput(text);
            }}
          />

          <Text>{t('alteraremail_editarperfil', lang)}</Text>

          <TextInput
            style={stylesUnico.textInput}
            placeholder={t('email_editarperfil', lang)}
            value={emailInput}
            onChangeText={(text) => {
              setEmailInput(text);
            }}
          />

          <Text>{t('alterarsenha_editarperfil', lang)}</Text>

          <TextInput
            secureTextEntry={true}
            style={stylesUnico.textInput}
            placeholder={t('senha_editarperfil', lang)}
            value={senhaInput}
            onChangeText={(text) => {
              setSenhaInput(text);
            }}
          />

          <TextInput
            secureTextEntry={true}
            style={stylesUnico.textInput}
            placeholder={t('confirmar_editarperfil', lang)}
            value={confirmInput}
            onChangeText={(text) => {
              setConfirmInput(text);
            }}
          />

          <TouchableOpacity
            onPress={() => {
              if (senhaInput == '' || senhaInput == confirmInput) {
                Alert.alert(
                  t('confirmarAlertTitle_editarperfil', lang),
                  t('confirmarAlert_editarperfil', lang),
                  [
                    {
                      text: t('sim_editarperfil', lang),
                      onPress: () => {
                        let verificar = regis.editarConta(
                          conta.nick,
                          nickInput,
                          emailInput,
                          senhaInput,
                          fotonput
                        );
                        if (verificar) {
                          navigation.goBack();
                          setConta(verificar[0]);
                          setRegis(verificar[1]);
                        }
                      },
                    },
                    {
                      text: t('nao_editarperfil', lang),
                      style: 'cancel',
                    },
                  ]
                );
              } else {
                alert(t('naoConfere_editarperfil', lang));
              }
            }}>
            <Text style={styles.btnSalmao}>
              {t('salvar_editarperfil', lang)}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
