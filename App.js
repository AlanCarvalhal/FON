import React, {useContext} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList, 
  DrawerItem,
} from '@react-navigation/drawer';

import {
  Amigos,
  Cadastrar,
  Conversao,
  Dashboard,
  Desafiar,
  Desafio,
  EditarPerfil,
  EqGases,
  Inicial,
  Login,
  Notific,
  NumQuant,
  Pontuac,
  Principal,
  Suporte,
  VerPerfil,
} from './components/index';

import pt from './lang/pt.json';
import en from './lang/en.json';
import es from './lang/es.json';

import { Registros } from './backend/perfis';

export const t = (key, lang) => {
  switch (lang) {
    case 'en':
      return en[key];
    case 'es':
      return es[key];
    default:
      return pt[key];
  }
};

const StackJogar = createStackNavigator();
function StackJogarComp({ navigation }) {
  return (
    <StackJogar.Navigator screenOptions={{ headerShown: false }}>
      <StackJogar.Screen name="TelaPrincipal" component={Principal} />
      <StackJogar.Screen name="TelaEqGases" component={EqGases} />
      <StackJogar.Screen name="TelaNumQuant" component={NumQuant} />
      <StackJogar.Screen name="TelaConversao" component={Conversao} />
      <StackJogar.Screen name="TelaDesafio" component={Desafio} />
      <StackJogar.Screen name="StackDesafiarComp" component={StackDesafiarComp} />
    </StackJogar.Navigator>
  );
}

const StackDesafiarAmigos = createStackNavigator();
function StackDesafiarComp({ navigation }) {
  return (
    <StackDesafiarAmigos.Navigator screenOptions={{ headerShown: false }}>
      <StackDesafiarAmigos.Screen name="TelaDesafiar" component={Desafiar} />
      <StackDesafiarAmigos.Screen name="TelaDesafio" component={Desafio} />
    </StackDesafiarAmigos.Navigator>
  );
}

const StackPerfil = createStackNavigator();
function StackPerfilComp({ navigation }) {
  return (
    <StackPerfil.Navigator screenOptions={{ headerShown: false }}>
      <StackPerfil.Screen name="TelaVerPerfil" component={VerPerfil} />
      <StackPerfil.Screen name="TelaEditarPerfil" component={EditarPerfil} />
      <StackPerfil.Screen name="TelaPontuac" component={Pontuac} />
    </StackPerfil.Navigator>
  );
}

const StackAdmin = createStackNavigator();
function StackAdminComp({ navigation }) {
  return (
    <StackAdmin.Navigator screenOptions={{ headerShown: false }}>
      <StackAdmin.Screen name="TelaDashboard" component={Dashboard} />
    </StackAdmin.Navigator>
  );
}

const DrawerPrincipal = createDrawerNavigator();
function DrawerPrincipalComp({ navigation }) {
  const [lang] = React.useContext(AppContext);
  return (
    <DrawerPrincipal.Navigator screenOptions={{ headerShown: false }}>
      <DrawerPrincipal.Screen name="StackJogarComp" options={{title:t('principal_drawer', lang)}} component={StackJogarComp} />
      <DrawerPrincipal.Screen name="StackPerfilComp" options={{title:t('perfil_drawer', lang)}} component={StackPerfilComp} />
      <DrawerPrincipal.Screen name="TelaAmigos" options={{title:t('amigos_drawer', lang)}} component={Amigos} />
      <DrawerPrincipal.Screen name="TelaSuporte" options={{title:t('fale_drawer', lang)}} component={Suporte} /> 
      <DrawerPrincipal.Screen name="TelaPontuac" options={{title:t('pontuac_drawer', lang)}} component={Pontuac} />
    </DrawerPrincipal.Navigator>
  );
}

export const AppContext = React.createContext();
export const AppContext2 = React.createContext();
export const AppContext3 = React.createContext();

const StackApp = createStackNavigator();
export default function App() {
  const [lang, setLang] = React.useState('pt');
  const [regis, setRegis] = React.useState(new Registros);
  const [conta, setConta] = React.useState();

  return (
    <AppContext.Provider value={[lang, setLang]}>
      <AppContext2.Provider value={[regis, setRegis]}>
        <AppContext3.Provider value={[conta, setConta]}>
          <NavigationContainer>
            <StackApp.Navigator screenOptions={{ headerShown: false }}>
              <StackApp.Screen name="TelaInicial" component={Inicial} />
              <StackApp.Screen name="TelaLogin" component={Login} />
              <StackApp.Screen name="TelaCadastrar" component={Cadastrar} />
              <StackApp.Screen name="DrawerPrincipal" component={DrawerPrincipalComp} />
              <StackApp.Screen name="StackAdminComp" component={StackAdminComp} />
            </StackApp.Navigator>
          </NavigationContainer>
        </AppContext3.Provider>
      </AppContext2.Provider>
    </AppContext.Provider>
  );
}
