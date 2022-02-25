import * as React from 'react';
import { Text, View, Image, TouchableOpacity, TextInput } from 'react-native';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({navigation}) {
  const [lang] = React.useContext(AppContext);
  return(
    <View style={styles.viewTela}>
      <Icon
        name="bars"
        type="font-awesome"
        color='#555'
        containerStyle={styles.btnMenu}
        iconStyle={styles.btnIcon}
        onPress={() => navigation.openDrawer()}/>
    
      <Text style={styles.tituloTela}>
        {t('jogar_principal', lang)}
      </Text>
      <Image 
        style={{
          height:110,
          maxHeight:"100%",
          maxWidth:"100%",
          resizeMode: 'contain',
        }}
        source={require("../../assets/imgs/fon_logo.png")}/>

      <TouchableOpacity
        onPress={() => navigation.navigate('TelaEqGases')}>
        <Text 
          style={[styles.btnSalmao, styles.btnJogar]}>
          {t('equacao_principal', lang)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('TelaNumQuant')}>
        <Text 
          style={[styles.btnSalmao, styles.btnJogar]}>
          {t('quanticos_principal', lang)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('TelaConversao')}>
        <Text 
          style={[styles.btnSalmao, styles.btnJogar]}>
          {t('conversao_principal', lang)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('StackDesafiarComp')}>
        <Text 
          style={[styles.btnSalmao, styles.btnJogar]}>
          {t('desafiar_principal', lang)}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => navigation.navigate('TelaDesafio')}>
        <Text 
          style={[styles.btnSalmao, styles.btnJogar]}>
          {t('diario_principal', lang)}
        </Text>
      </TouchableOpacity>
    </View>
  );
}