import * as React from 'react';
import { View, Text, ScrollView } from 'react-native';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);
  return (
    <View style={styles.viewTela}>
      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Text style={styles.tituloTela}>Dashboard</Text>

        <View style={stylesUnico.caixa}>
          <Text style={stylesUnico.divTitulo}>
            {t('online_dashboard', lang)}
          </Text>
          <View style={stylesUnico.div}>
            <Text>{t('totalUsuarios_dashboard', lang)}</Text>
            <Text>{t('mensagens_dashboard', lang)}</Text>
            <Text>{t('totalDesafios_dashboard', lang)}</Text>
            <Text>{t('jogados100_dashboard', lang)}</Text>
          </View>

          <Text style={stylesUnico.divTitulo}>
            {t('mediaHoje_dashboard', lang)}
          </Text>
          <View style={stylesUnico.div}>
            <Text>{t('avaliativa_dashboard', lang)}</Text>
            <Text>{t('novosRegistrosHoje_dashboard', lang)}</Text>
            <Text>{t('mensagensHoje_dashboard', lang)}</Text>
            <Text>{t('jogadosHoje_dashboard', lang)}</Text>
            <Text>{t('picoHoje_dashboard', lang)}</Text>
          </View>

          <Text style={stylesUnico.divTitulo}>
            {t('mediaMes_dashboard', lang)}
          </Text>
          <View style={stylesUnico.div}>
            <Text>{t('avaliativa_dashboard', lang)}</Text>
            <Text>{t('novosRegistrosMes_dashboard', lang)}</Text>
            <Text>{t('registrosMes_dashboard', lang)}</Text>
            <Text>{t('mensagensMes_dashboard', lang)}</Text>
            <Text>{t('jogadosMes_dashboard', lang)}</Text>
            <Text>{t('picoMes_dashboard', lang)}</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
