import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TabTwoScreen() {
  const navigation = useNavigation();

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === 'moreto' && password === '123') {
      navigation.navigate('./Home/index'); // alterar
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <Text style={styles.subtitle}>
        ao maior app de aluguel de * do {'\n'}
        <Text style={styles.highlight}>Brasil</Text>
      </Text>

      <View style={styles.loginBox}>
        <Text style={styles.label}>Usuário</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite o usuário"
          placeholderTextColor="#999"
          value={username}
          onChangeText={setUsername}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite a senha"
          placeholderTextColor="#999"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <View style={styles.inputButton}>
          <TouchableOpacity style={styles.buttonGreen} onPress={handleLogin}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonRed} onPress={() => Alert.alert('Criar conta', 'Redirecionar para tela de cadastro')}>
            <Text style={styles.buttonText}>Criar conta</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingTop: 60,
    paddingLeft: 40,
    paddingRight: 40,
  },
  title: {
    fontSize: 50,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 38,
    marginBottom: 40,
  },
  highlight: {
    color: 'green',
    fontWeight: 'bold',
  },
  loginBox: {
    marginTop: 80,
  },
  inputButton: {
    marginTop: 30,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
    fontWeight: '500',
  },
  input: {
    height: 50,
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 25,
    backgroundColor: '#FFF',
    borderColor: '#CCC',
  },
  buttonGreen: {
    backgroundColor: '#32CD32',
    paddingVertical: 15,
    borderRadius: 8,
    marginBottom: 20,
    alignItems: 'center',
  },
  buttonRed: {
    backgroundColor: '#B22222',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
