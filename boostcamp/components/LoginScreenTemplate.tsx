import {
  StyleSheet,
  TextInput,
  View,
  Text,
  KeyboardAvoidingView,
  TouchableOpacity,
  Alert,
} from 'react-native';
import Logo from '../components/Logo';
import React, { useEffect, useState } from 'react';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { RFValue } from 'react-native-responsive-fontsize';

const LoginScreenTemplate = ({ navigation, screen }: any) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user: any) => {
      if (user) {
        navigation.navigate('Task_Type_Screen');
      }
    });
    return unsubscribe;
  }, []);

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log('Account created with:', user.email);
      })
      .catch((error: any) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  const handleRegister = () => {
    navigation.navigate('Register_Screen');
  };

  const handleLogin = async () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential: any) => {
        const user = userCredential.user;
        console.log('Logged in with:', user.email);
      })
      .catch((error: any) => {
        console.log(error);
        Alert.alert(error.message);
      });
  };

  return (
    <KeyboardAvoidingView style={styles.container} behavior="padding">
      <View style={styles.logoContainer}>
        <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
          style={styles.input}
        ></TextInput>
        <TextInput
          placeholder="Password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          style={styles.input}
          secureTextEntry
        ></TextInput>
      </View>
      <View style={styles.buttonContainer}>
        {screen === 'Login_Screen' ? (
          <>
            <TouchableOpacity onPress={handleLogin} style={styles.button}>
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleRegister}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Register</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            <TouchableOpacity onPress={handleSignUp} style={styles.button}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
              style={[styles.button, styles.buttonOutline]}
            >
              <Text style={styles.buttonOutlineText}>Back</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </KeyboardAvoidingView>
  );
};

export default LoginScreenTemplate;

// Not Responsive
const styles = StyleSheet.create({
  container: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '5%',
  },
  star: {
    bottom: '30.5%',
    right: '14%',
  },
  boostcamp: {
    bottom: '23%',
    left: '-11.5%',
  },
  inputContainer: {
    width: '80%',
  },
  input: {
    fontFamily: 'Avenir',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    paddingVertical: 12,
    borderRadius: 10,
    marginTop: 5,
  },
  buttonContainer: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 25,
  },
  button: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 5,
    width: '67.5%',
    borderWidth: 1.5,
    borderRadius: 30,
    marginBottom: 15,
  },
  buttonOutline: {
    backgroundColor: 'white',
  },
  buttonText: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(17.6),
  },
  buttonOutlineText: {
    color: 'black',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(17.6),
  },
});
