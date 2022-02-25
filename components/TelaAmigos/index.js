import * as React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';
import Constants from 'expo-constants';

import stylesUnico from './styles';
import styles from '../styles';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);
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
        <Icon
          name="user-friends"
          type="font-awesome-5"
          color="rgb(255,95,85)"
          size={28}
        />
        <Text style={styles.tituloTela}> {t('amigos_amigos', lang)} </Text>

        <View
          style={{
            backgroundColor: '#fff',
            padding: 15,
            borderRadius: 5,
            borderWidth: 1,
            width: '90%',
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              paddingBottom: 8,
              borderBottomWidth: 1,
            }}>
            <TextInput
              style={stylesUnico.formInput}
              placeholder={t('procurar_amigos', lang)}
            />
            <TouchableOpacity>
              <Text> {t('adicionar_amigos', lang)} </Text>
            </TouchableOpacity>
          </View>
          <View>
            <View style={stylesUnico.amigo}>
              <Image
                source={require('../../assets/imgs/carasaulo.png')}
                style={stylesUnico.foto}
              />
              <Text> SoloQ Tortuga Vrau </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
