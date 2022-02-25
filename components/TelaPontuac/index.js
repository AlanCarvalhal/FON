import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);
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
        <Text style={styles.tituloTela}> {t('pontuacao_pontuac', lang)} </Text>

        <Text style={stylesUnico.leftNegri}> {t('diario_pontuac', lang)} </Text>

        <View style={stylesUnico.caixaCinza}></View>

        <Text style={stylesUnico.leftNegri}> {t('contra_pontuac', lang)} </Text>

        <View style={stylesUnico.caixaCinza}></View>
      </ScrollView>
    </View>
  );
}
