import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import Button from '../../components/Button';

import styles from './styles';

const SignUp = ({navigation}) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSignUp = () => {
        
    };

    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Username' 
                value={username} 
                onChangeText={setUsername} 
                style={styles.input}
            />
            
            <TextInput 
                placeholder='Email' 
                value={email} 
                onChangeText={setEmail} 
                style={styles.input}
            />
            
            <TextInput 
                placeholder="Password" 
                value={password} 
                onChangeText={setPassword} 
                secureTextEntry 
                style={styles.input} 
            />
            <TextInput 
                placeholder="Confirm Password" 
                value={confirmPassword} 
                onChangeText={setConfirmPassword} 
                secureTextEntry 
                style={styles.input} 
            />

            <Button mode='contained' onPress={handleSignUp}>
                Sign up
            </Button>
            <Text>
                Already have and account?
            </Text>

            <Button mode='outlined' onPress={() => navigation.navigate('Login')}>Login</Button>
        </View>
    )
}

export default SignUp;