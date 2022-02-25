import * as React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ScrollView,
} from 'react-native';
import { Icon } from 'react-native-elements';

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
        <Text style={styles.tituloTela}>Desafios</Text>

        <Text style={{ fontWeight: '700' }}>Desafios em Andamento:</Text>

        <View style={stylesUnico.caixaTexto}>
          <Text style={{ textAlign: 'center', borderBottomWidth: 1 }}>
            Total de Desafios:
          </Text>

          <View style={stylesUnico.notLinha}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={stylesUnico.imagem}
                source={require('../../assets/imgs/carasaulo.png')}
              />
              <Text style={stylesUnico.nickName}>SoloQ Tortuga Vrau</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
              }}>
              <Text> Sua Vez! </Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'green' }}>5</Text>
                <Text style={stylesUnico.versus}>x</Text>
                <Text style={{ color: 'red' }}>3</Text>
              </View>
            </View>
          </View>

          <View style={stylesUnico.notLinha}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={stylesUnico.imagem}
                source={require('../../assets/imgs/carasaulo.png')}
              />
              <Text style={stylesUnico.nickName}>SoloQ Tortuga Vrau</Text>
            </View>
            <View
              style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 100,
              }}>
              <Text>Aguardando...</Text>
              <View style={{ flexDirection: 'row' }}>
                <Text style={{ color: 'green' }}>2</Text>
                <Text style={stylesUnico.versus}>x</Text>
                <Text style={{ color: 'red' }}>4</Text>
              </View>
            </View>
          </View>
        </View>

        <Text style={stylesUnico.versus}>Desafiar Amigos</Text>

        <View style={stylesUnico.caixaTexto}>
          <TextInput style={stylesUnico.textInput} placeholder="Search" />

          <Text style={{ textAlign: 'center', borderBottomWidth: 1 }}>
            Total de Resultados:
          </Text>

          <View style={stylesUnico.notLinha}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={stylesUnico.imagem}
                source={require('../../assets/imgs/carasaulo.png')}
              />
              <Text style={stylesUnico.nickName}>SoloQ Tortuga Vrau</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TelaDesafio')}>
              <Text style={styles.btnSalmao}>Desafiar</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesUnico.notLinha}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={stylesUnico.imagem}
                source={require('../../assets/imgs/carasaulo.png')}
              />
              <Text style={stylesUnico.nickName}>SoloQ Tortuga Vrau</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TelaDesafio')}>
              <Text style={styles.btnSalmao}>Desafiar</Text>
            </TouchableOpacity>
          </View>

          <View style={stylesUnico.notLinha}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Image
                style={stylesUnico.imagem}
                source={require('../../assets/imgs/carasaulo.png')}
              />
              <Text style={stylesUnico.nickName}>SoloQ Tortuga Vrau</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('TelaDesafio')}>
              <Text style={styles.btnSalmao}>Desafiar</Text>
            </TouchableOpacity>
          </View>
        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('TelaDesafio')}>
          <Text style={styles.btnSalmao}>Jogar Desafio Diário</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
