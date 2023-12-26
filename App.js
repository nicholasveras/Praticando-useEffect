import React, {useState, useEffect} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);
  const [renderizado, setRenderizado] = useState(true);

  
  useEffect(() => {
    console.log('MONTOU!')
  },[]);

  return (
    <View style={styles.container}>
      <Button title='Aumentar' onPress={() => setContador(contador+1) }/>
      <Text style={{fontSize: 30}}>{contador}</Text>
      <Button title='Diminuir' onPress={() => setContador(contador-1) }/>
      <StatusBar style="auto" />

      <Button title='MOSTRAR NOME' onPress={() => setRenderizado(false)}/>

      {renderizado && <Nome/>}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

function Nome(){

  useEffect(() => {
    console.log('COMPONENTE NOME FOI MONTADO NA TELA!')

    return () => console.log('COMPONENTE DESMONTADO!')

  }, []);

  return <Text>NICHOLASSSSS</Text>
}