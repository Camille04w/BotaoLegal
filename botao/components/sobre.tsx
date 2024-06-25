import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import Home from './home'

export default function App() {

  const [page, setPage] = React.useState('sobre');

  const renderPage = () => {
    if (page === 'sobre'){
      return (
        <View style={styles.container}>
          <View style={styles.title}>
            <Text style={styles.logo}>MapMaster</Text>
          </View>
          
          <View style={styles.corpo}>
            <Text style={styles.text} >Encontre o seu destino com apenas um toque</Text>
            <TouchableOpacity style={styles.button} onPress={()=> setPage('sobre')}>
              <Text style={styles.buttonText}>Ver localização</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    } else if(page==='sobre'){
      return <Home />
    }
  };

  return <View style={styles.buttonText}>{renderPage()}</View>
  
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    flex: 1,
    backgroundColor: '#FFF',
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
    marginTop: 90,
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
    marginLeft: 60,
  },
  button: {
    width: '80%',
    borderRadius: 25,
    overflow: 'hidden',
  },
  buttonText:{
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },

});