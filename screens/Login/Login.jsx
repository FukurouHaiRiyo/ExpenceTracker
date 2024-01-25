import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import {
  GoogleSignin,
  statusCodes,
} from '@react-native-google-signin/google-signin';

import styles from './style';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
  };

  const handleGoogleLogin = () => {
    // GoogleSignin.configure({});
  }

  return (
    <Background>
      <Logo/>
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
        <Button mode='contained' onPress={handleLogin}>
          Login
        </Button>
        <Text>
          Don't have an account?
        </Text>
        <Button mode='outlined' onPress={() => navigation.navigate('SignUp')}>Sign up</Button>

        <Text>Or sign in with Google</Text>
        <Button mode='outlined' onPress={handleGoogleLogin}>Google</Button>
      </View>
    </Background>
  );
};


export default LoginScreen;
