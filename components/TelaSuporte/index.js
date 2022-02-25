import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView
} from 'react-native';
import Constants from 'expo-constants';
import { Card } from 'react-native-paper';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);

  const [assunto, setAssunto] = useState('');
  const [msg, setMsg] = useState('');

  return (
    <View style={[styles.viewTela, {justifyContent:'flex-start', paddingTop:90}]}>
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
        <Text style={stylesUnico.leftNegri}>{t('fale_suporte', lang)}</Text>
        <View style={stylesUnico.caixaCinza}>
          <Text> {t('assunto_suporte', lang)} </Text>

          <TextInput
            style={{
              backgroundColor: '#FFFFFF',
              borderColor: 'black',
              borderWidth: 1,
              width: '100%',
              marginBottom: 10,
            }}
            value={assunto}
            onChangeText={(text)=>{
              setAssunto(text);
            }}
          />

          <Text>{t('mensagem_suporte', lang)}</Text>

          <TextInput
            style={{
              backgroundColor: '#FFFFFF',
              padding: 5,
              paddingBottom: 230,
              borderColor: 'black',
              borderWidth: 1,
              width: '100%',
              marginBottom: 10,
            }}
            multiline={true}
            value={msg}
            onChangeText={(text)=>{
              setMsg(text);
            }}
          />

          <TouchableOpacity
            onPress={()=>{
              alert(t('alert_suporte', lang));
              setAssunto('');
              setMsg('');
            }}>
            <Text style={styles.btnSalmao}> {t('enviar_suporte', lang)} </Text>
          </TouchableOpacity>
        </View>

        <Text style={stylesUnico.leftNegri}> {t('sac_suporte', lang)} </Text>

        <View style={stylesUnico.caixaCinza}>
          <Text style={{ textAlign: 'center' }}> +55 27 99297-4109 </Text>
          <Text style={{ textAlign: 'center' }}> +55 27 99514-3623 </Text>
        </View>
      </ScrollView>
    </View>
  );
}
