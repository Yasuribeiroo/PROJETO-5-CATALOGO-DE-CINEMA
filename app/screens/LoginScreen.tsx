import React, { useState } from 'react';
import { View, TextInput, Button, Alert, StyleSheet } from 'react-native';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email === 'usuario@email.com' && password === '123456') {
      Alert.alert('Login successful');
    } else {
      Alert.alert('Login failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#bbb" value={email} onChangeText={setEmail} />
      <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#bbb" value={password} secureTextEntry onChangeText={setPassword} />
      <Button title="Login" onPress={handleLogin} color="#ffcc00" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '90%',
    height: 50,
    backgroundColor: '#222',
    color: '#fff',
    fontSize: 18,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 8,
  },
});

export default LoginScreen;