import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Modal,
  View,
  Pressable,
} from 'react-native';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';
import { getAuth, signOut } from 'firebase/auth';
import { useState } from 'react';
import { RFValue } from 'react-native-responsive-fontsize';

export default function Avatar({ avatarPosition, navigation }: any) {
  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal(!modal);
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);

  const handleSignOut = () => {
    setModal(!modal);
    signOut(auth);
    navigation.navigate('Login_Screen');
  };

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
      onPress={handleModal}
      style={[styles.avatar, avatarPosition]}
    >
      <Text style={styles.avatarText}>{avatar}</Text>
      <Modal
        transparent
        visible={modal}
        onRequestClose={handleModal}
        animationType="slide"
        hardwareAccelerated
      >
        <View style={styles.modal}>
          <Pressable style={styles.modalAvatar}>
            <Text style={styles.modalAvatarText}>{avatar}</Text>
          </Pressable>
          <TouchableOpacity
            onPress={handleSignOut}
            style={[styles.button, styles.buttonOutline]}
          >
            <Text style={styles.buttonOutlineText}>Sign Out</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleModal} style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  avatar: {
    position: 'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: '50%',
    width: '12%',
    borderWidth: 1.5,
    borderRadius: 50,
  },
  avatarText: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(18.4),
  },
  modal: {
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
  },
  modalAvatar: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 200,
    width: 200,
    borderWidth: 1,
    borderRadius: 1000,
    marginBottom: '50%',
  },
  modalAvatarText: {
    color: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(56),
  },
  modalText: {
    color: 'white',
  },
  button: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
    width: '35%',
    borderWidth: 1.5,
    borderRadius: 30,
    borderColor: 'white',
    marginBottom: '5%',
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
    fontSize: RFValue(16),
  },
  buttonOutlineText: {
    color: 'black',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(16),
  },
});
