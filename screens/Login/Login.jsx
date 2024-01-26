import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './style';
import Background from '../../components/Background';
import Logo from '../../components/Logo';
import Button from '../../components/Button';

import emailValidator from '../../useful/emailValidator';

const LoginScreen = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // for testing purpose
    if (emailValidator(email) == 'Email is not valid') {
      alert(emailError);
    }
    if (password.length < 5) {
      alert('Password must be at least 5 characters long');
      return;
    }

    if (email == 'andreipanait00@gmail.com' && password == '123456'){
      navigation.navigate('Home');
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    }
  };

  const handleGoogleLogin = () => {

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
