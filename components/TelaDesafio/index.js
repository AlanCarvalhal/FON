import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, ScrollView } from 'react-native';
import { Icon } from 'react-native-elements';

import stylesUnico from './styles';
import styles from '../styles';

import { getPerguntas } from '../../backend/questoes';

import { AppContext, t } from '../../App';

export default function App({ navigation }) {
  const [lang] = React.useContext(AppContext);

  const [tempo, setTempo] = useState(90);
  const [temporiz, setTemporiz] = useState();

  const perguntas = getPerguntas(lang);

  class Temporizador {
    constructor(temp) {
      this.temporizador = setInterval(() => {
        if (temp == 0) {
          alert('Seu tempo acabou!');
          this.parar(false);
        } else {
          temp--;
          setTempo(temp);
        }
      }, 1000);
    }

    parar(v) {
      clearInterval(this.temporizador);

      if (v) {
        setTimeout(() => {
          navigation.goBack();
        }, 4000);
      } else {
        navigation.goBack();
      }
    }
  }

  function TempoComp() {
    useEffect(() => {
      setTemporiz(new Temporizador(tempo));
    }, []);

    return (
      <View style={{ flexDirection: 'row' }}>
        <Icon name="clock" type="font-awesome-5" size={32} />
        <Text style={{ fontSize: 24 }}>
          {tempo}
          {'"'}
        </Text>
      </View>
    );
  }

  function PerguntaComp() {
    const [questao, setQuestao] = useState(getPergunta(perguntas));
    const [cores, setCores] = useState(
      new Array(4).fill({ backgroundColor: '#b0ffea', color: '#000' })
    );

    function getPergunta(perguntas) {
      let questao = {};
      let random = Math.floor(Math.random() * perguntas.length);
      let nums = [1, 2, 3, 4];

      questao = perguntas[random];
      questao.alts = [];

      for (let i = nums.length; i >= 0; i--) {
        let numero = Math.floor(Math.random() * nums.length);
        questao.alts.push(nums[numero]);
        nums.splice(numero, 1);
      }

      questao.certa = questao.alts.indexOf(1);

      for (let i = 0; i < 4; i++) {
        switch (`${questao.alts[i]}`) {
          case '1':
            questao.alts[i] = questao.alt_certa;
            break;
          case '2':
            questao.alts[i] = questao.alt_2;
            break;
          case '3':
            questao.alts[i] = questao.alt_3;
            break;
          case '4':
            questao.alts[i] = questao.alt_4;
            break;
        }
        questao.alts[i] = `${questao.alts[i][0].toUpperCase()}${questao.alts[
          i
        ].slice(1)}`;
      }

      return questao;
    }

    function chutar(n, cores) {
      let sentinela = false;
      for(let i=0;i<4;i++){
        if(cores[i].backgroundColor=='lime'){
          sentinela=true;
          break;
        }
      }

      if(!sentinela){
        cores[n] = { backgroundColor: 'red', color: '#000' };
        cores[questao.certa] = { backgroundColor: 'lime', color: '#000' };

        n == questao.certa ? alert('Você acertou!') : alert('Você errou!');

        setTemporiz(temporiz.parar(true));

        return cores;
      }
      else{
        return cores;
      }
    }

    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '90%',
        }}>
        <View style={stylesUnico.pergunta}>
          <Text style={stylesUnico.enunciado}>{questao.enunciado}</Text>
        </View>

        <TouchableOpacity
          style={[
            stylesUnico.alt,
            { backgroundColor: cores[0].backgroundColor },
          ]}
          onPress={() => {
            setCores(chutar(0, cores));
          }}>
          <Text style={[stylesUnico.alt2, { color: cores[0].color }]}>
            {questao.alts[0]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            stylesUnico.alt,
            { backgroundColor: cores[1].backgroundColor },
          ]}
          onPress={() => {
            setCores(chutar(1, cores));
          }}>
          <Text style={[stylesUnico.alt2, { color: cores[1].color }]}>
            {questao.alts[1]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            stylesUnico.alt,
            { backgroundColor: cores[2].backgroundColor },
          ]}
          onPress={() => {
            setCores(chutar(2, cores));
          }}>
          <Text style={[stylesUnico.alt2, { color: cores[2].color }]}>
            {questao.alts[2]}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            stylesUnico.alt,
            { backgroundColor: cores[3].backgroundColor },
          ]}
          onPress={() => {
            setCores(chutar(3, cores));
          }}>
          <Text style={[stylesUnico.alt2, { color: cores[3].color }]}>
            {questao.alts[3]}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

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
        onPress={() => {
          setTemporiz(temporiz.parar(false));
        }}
      />

      <ScrollView
        style={{
          width: '100%',
        }}
        contentContainerStyle={{
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={stylesUnico.boxPergunta}>
          {TempoComp()}
        </View>
        {PerguntaComp()}
      </ScrollView>
    </View>
  );
}
