// SignInScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LinearGradient } from 'react-native';

const Sign = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#FFFFFF', '#FF5F05']}
        style={styles.gradient}
        start={{ x: 0.2, y: 0.3 }}
        end={{ x: 0, y: 0 }}
      >
        <Text style={styles.welcomeText}>Welcome to Apply</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('UploadResume')}>
          <Text style={styles.buttonText}>SIGN IN WITH LINKEDIN</Text>
        </TouchableOpacity>
        <Text style={styles.termsText}>
          By signing in, you agree to our Terms and Conditions.
        </Text>
      </LinearGradient>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gradient: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20, // Set your padding value here
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    textAlign: 'center',
  },
  termsText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 40,
  },
  linkText: {
    textDecorationLine: 'underline',
  },
  button: {
    marginTop: 10,
    paddingVertical: 15,
    paddingHorizontal: 30, // Match the horizontal padding
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'white',
    width: '100%', // Ensure the button is full width
    alignItems: 'center', // Center text horizontally
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
  accountButton: {
    marginTop: 15, // Add space between buttons if needed
  },
  troubleText: {
    marginTop: 20,
    color: 'white',
    fontSize: 16,
    textDecorationLine: 'underline',
  }
});

export default Sign;