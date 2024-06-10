import { Text, View, StyleSheet, Image } from 'react-native';
import { useFonts, Poppins_400Regular } from '@expo-google-fonts/poppins';


import Button from '../../components/Button'
import { useFocusEffect } from 'expo-router';

export default function HomeScreen() {

  const Clicar = () => {
    alert("Apertei o botão")
}


  return (
    <View style={styles.container}>
      <div>
      <Text style={styles.title}>MapMaster</Text>
      </div>
      <Image style={styles.image} source={require('../../assets/images/imagem1.png')} />
      <Text style={styles.text} >Encontre o seu destino com apenas um toque</Text>
      <Button title="Ver localização" onPress={Clicar} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#FFF',
    fontFamily:'Poppins_400Regular'
  
  },
  title: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#000',
    marginTop:67,
  },
  image:{
    marginTop: 90,
    width:320,
    height:240,

  }, 
  text:{
    fontSize: 26,
    color: '#000',
    textAlign:'center',
    marginTop:70,
    margin:40,
    padding: 20,
    marginBottom:80,
  }
});
