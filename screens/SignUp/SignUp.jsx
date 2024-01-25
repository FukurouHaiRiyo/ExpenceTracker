import React, {useState} from 'react';
import {Text, TextInput, Button, View} from 'react-native';

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

            <Button title='Sign Up' onPress={handleSignUp} />
            <Text onPress={() => navigation.navigate('Login')}>
                Already have and account? Login
            </Text>
        </View>
    )
}

export default SignUp;