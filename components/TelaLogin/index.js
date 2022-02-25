import React, { useState } from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, AppContext2, AppContext3, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);
  const [regis] = React.useContext(AppContext2);
  const [conta, setConta] = React.useContext(AppContext3);

  const [nickInput, setNickInput] = useState('');
  const [senhaInput, setSenhaInput] = useState('');

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

      <Text style={styles.tituloTela}>{t('entrar_login', lang)}</Text>
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
          placeholder={t('usuario_login', lang)}
          value={nickInput}
          onChangeText={(text) => {
            setNickInput(text);
          }}
        />
        <TextInput
          style={styles.formInput}
          secureTextEntry={true}
          placeholder={t('senha_login', lang)}
          value={senhaInput}
          onChangeText={(text) => {
            setSenhaInput(text);
          }}
        />
        <TouchableOpacity
          onPress={() => {
            let verificar = regis.logar(nickInput, senhaInput);
            if(verificar){
              setConta(verificar);
              navigation.navigate('DrawerPrincipal');
            }
          }}>
          <Text style={styles.btnSalmao}>{t('entrar_login', lang)}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('TelaCadastrar')}>
        <Text style={styles.btnTransparente}>{t('cadastrar_login', lang)}</Text>
      </TouchableOpacity>
    </View>
  );
}
