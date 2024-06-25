import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';

import Sobre from './sobre'

export default function App() {

  const [page, setPage] = React.useState('home');

  const renderPage = () => {
    if (page === 'home'){
      return (
        <View style={styles.container}>
          <Text style={styles.title}>MapMaster</Text>
          <View style={styles.containerImagem}>
          <Image style={styles.imagem} source={require('../assets/images/imagem1.png')}/>
          </View>
            <Text style={styles.text} >Encontre o seu destino com apenas um {''}
              <Text style={styles.hover}>toque</Text>
            </Text>
            <TouchableOpacity style={styles.button} onPress={()=> setPage('sobre')}>
              <Text style={styles.button}>Ver localização</Text>
            </TouchableOpacity>
          </View>
      );
    } else if(page==='sobre'){
      return <Sobre />
    }
  };

  return <View style={styles.buttonText}>{renderPage()}</View>
 
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#FFF',
    fontFamily: 'Poppins_400Regular',
  },
  containerImagem:{
    justifyContent: 'center',
    alignItems: 'center',
  },
  corpo: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    fontFamily: 'Poppins_400Regular',
    margin:30,
  },
  logo: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
    marginTop: 67,
  },
  imagem: {
    marginTop: 20,
    width: 320,
    height: 240,

  },
  text: {
    fontSize: 26,
    color: '#000',
    textAlign: 'center',
    marginTop: 70,
    margin: 40,
    padding: 20,
    marginBottom: 80,
  },
  title: {
    display: 'flex',
    padding: 40,
    marginLeft: 30,
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 0,
  },
  hover: {
    color: '#000AFF',
    fontWeight: 'bold',
  },
  button: {
    width:300,
    height:100,
    backgroundColor:'#0047FF',

  },
  buttonText:{

  },

});