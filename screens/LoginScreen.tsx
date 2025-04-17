import React, { useState } from 'react';
import { Text, View, TextInput, Button, TouchableOpacity, Image } from 'react-native';
import styles from '../styles/LoginStyles'; // Asegúrate de que la ruta sea correcta

const LoginScreen = ({ onLogin, navigation }: any) => {
  // Si navigation es undefined, inicializamos con un objeto que tiene un método navigate vacío
  const nav = navigation || { navigate: () => console.log('Navigation not available') };
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);
    onLogin(); // Llama a esta función después de un login exitoso
  };

  const handleGoogleLogin = () => {
    // Aquí iría la implementación real de la autenticación con Google
    console.log('Google Login iniciado');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Login" onPress={handleLogin} color="#4285F4" />
      
      <View style={styles.orContainer}>
        <View style={styles.line} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.line} />
      </View>
      
      <TouchableOpacity style={styles.googleButton} onPress={handleGoogleLogin}>
        <Image
          source={{ uri: 'https://es.m.wikipedia.org/wiki/Archivo:Google_%22G%22_logo.svg' }}
          style={styles.googleIcon}
        />
        <Text style={styles.googleButtonText}>Login with Google</Text>
      </TouchableOpacity>
      
      <Text
        style={styles.link}
        onPress={() => nav.navigate('SignUp')} // Navega a la pantalla de SignUp
      >
        Don't have an account? Sign Up
      </Text>
    </View>
  );
};

export default LoginScreen;