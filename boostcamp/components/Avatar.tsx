import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';

export default function Avatar({ avatarPosition }: any) {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  // const handleSignOut = () => {
  //   signOut(auth);
  //   navigation.replace('Login_Screen');
  // };

  let avatar;
  const user = auth.currentUser;
  if (user != null) {
    const email = user.email;
    if (email != null) {
      avatar = email[0].toUpperCase();
    }
  }

  return (
    <TouchableOpacity
      // onPress={handleSignOut}
      style={[styles.avatar, avatarPosition]}
    >
      <Text style={styles.avatarText}>{avatar}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 52,
    borderWidth: 1.5,
    borderRadius: 30,
  },
  avatarText: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 23,
  },
});
