import React, {useState} from 'react';
import { Text, View, Image, TouchableOpacity, TextInput, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, AppContext3, t } from '../../App';

export default function App({navigation}) {
  const [lang, setLang] = React.useContext(AppContext);
  const [conta] = React.useContext(AppContext3);

  const [reload, setReload] = useState();

  const unsubscribe = navigation.addListener('focus', () => {
    setReload(Math.floor(Math.random()*1000000));
  });

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
        <Image style={stylesUnico.imagem} source={require('../../assets/imgs/Saulo.png')}/>
        
        <Text style={stylesUnico.leftNegri}> {t('dados_perfil', lang)} </Text>
        
        <View style={stylesUnico.caixaTexto}>
          <Text> {t('nick_perfil', lang)} {conta.nick}</Text>
          <Text> {t('email_perfil', lang)} {conta.email}</Text>
        </View>   
        
        <TouchableOpacity
            onPress={() => navigation.navigate('TelaEditarPerfil')}>
          <Text style={styles.btnSalmao}> 
            {t('editar_perfil', lang)}
          </Text>
        </TouchableOpacity>
        
        <Text style={stylesUnico.leftNegri}> {t('estats_perfil', lang)} </Text>
        
        <View style={stylesUnico.caixaTexto}>
          <Text> {t('desafios_perfil', lang)} {conta.qtd_desafio_diario}</Text>
          <Text> {t('vitorias_perfil', lang)} {conta.qtd_vitoria_amigo}</Text>
          <Text> {t('tempo_perfil', lang)} {conta.tempo_online}</Text>
        </View>
              
        <TouchableOpacity
            onPress={() => navigation.navigate('TelaPontuac')}>
          <Text style={styles.btnSalmao}> 
            {t('analisar_perfil', lang)} 
          </Text>
        </TouchableOpacity>
        
        <View
          style={{
          marginTop: 15,
          alignItems: 'center',
          justifyContent: 'center',
          }}>

          <Text> {t('idioma_perfil', lang)} </Text>        
          <View style={{ marginTop: 5, flexDirection: 'row' }}>
            <TouchableOpacity
              onPress={() => {
                setLang("pt");
              }}
              style={styles.bandeiraTouchable}>
              <Image
                style={styles.bandeiraImage}
                source={require('../../assets/imgs/bandeira_br.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setLang("en");
              }}
              style={styles.bandeiraTouchable}>
              <Image
                style={styles.bandeiraImage}
                source={require('../../assets/imgs/bandeira_us.png')}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setLang("es");
              }}
              style={styles.bandeiraTouchable}>
              <Image
                style={styles.bandeiraImage}
                source={require('../../assets/imgs/bandeira_es.png')}
              />
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}