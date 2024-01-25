import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';

import styles from './style';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {

  };

  return (
    <View style={styles.container}>
      <TextInput 
        placeholder='Email' 
        value={email} 
        onChangeText={setEmail} 
        style={styles.input} 
      />
      <TextInput 
        placeholder='Password' 
        value={password} 
        onChangeText={setPassword} 
        secureTextEntry 
        style={styles.input} 
      />
      <Button title='Login' onPress={handleLogin} />
      <Text onPress={() => navigation.navigate('SignUp')}>
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};


export default LoginScreen;
