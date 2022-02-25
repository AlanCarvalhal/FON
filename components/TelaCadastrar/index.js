import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
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

  return (
    <View style={styles.viewTela}>
      <Icon
        name="chevron-left"
        type="font-awesome"
        color="#555"
        containerStyle={styles.btnVoltar}
        iconStyle={styles.btnIcon}
        onPress={() => navigation.goBack()}
      />

      <Text style={styles.tituloTela}>{t('cadastrar_cadastrar', lang)}</Text>

      <Image
        style={{
          height: 110,
          maxHeight: '100%',
          maxWidth: '100%',
          resizeMode: 'contain',
        }}
        source={require('../../assets/imgs/fon_logo.png')}
      />

      <View style={styles.formInicial}>
        <TextInput
          style={styles.formInput}
          placeholder={t('email_cadastrar', lang)}
          value={emailInput}
          onChangeText={(text) => {
            setEmailInput(text);
          }}
        />
        <TextInput
          style={styles.formInput}
          placeholder={t('usuario_cadastrar', lang)}
          value={nickInput}
          onChangeText={(text) => {
            setNickInput(text);
          }}
        />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          placeholder={t('senha_cadastrar', lang)}
          value={senhaInput}
          onChangeText={(text) => {
            setSenhaInput(text);
          }}
        />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          placeholder={t('confirmar_cadastrar', lang)}
          value={confirmInput}
          onChangeText={(text) => {
            setConfirmInput(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            let verificar = regis.criarConta(nickInput, emailInput, senhaInput);
            if(verificar){
              setConta(verificar[0]);
              setRegis(verificar[1]);
              navigation.navigate('DrawerPrincipal');
            }
          }}>
          <Text style={styles.btnSalmao}>{t('cadastrar_cadastrar', lang)}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
