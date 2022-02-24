import {
  StyleSheet,
  Platform,
  StatusBar,
  TouchableOpacity,
  Text,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskTypeCard from '../components/TaskTypeCard';
import Logo from '../components/Logo';
import { signOut, getAuth } from 'firebase/auth';
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebase';

export default function TaskTypeScreen({ navigation }: any) {
  const onScreenHandler = () => {
    navigation.navigate('On_Screen');
  };
  const offScreenHandler = () => {
    navigation.navigate('Off_Screen');
  };

  const app = initializeApp(firebaseConfig);

  const handleSignOut = () => {
    signOut(getAuth(app));
    navigation.replace('Login_Screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      <TouchableOpacity onPress={handleSignOut} style={styles.avatar}>
        <Text style={styles.avatarText}>Sign Out</Text>
      </TouchableOpacity>
      <TaskTypeCard
        onPressHandler={onScreenHandler}
        cardTitle="On Screen"
        cardText="A task that involves looking at your screen"
        borderColor="#EF86A0"
      />
      <TaskTypeCard
        onPressHandler={offScreenHandler}
        cardTitle="Off Screen"
        cardText="A task to take away from your screen"
        borderColor="#64FCD9"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  AndroidSafeArea: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  avatar: {
    position: 'absolute',
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 52,
    borderWidth: 1.5,
    borderRadius: 30,
    top: 80,
    right: 30,
  },
  avatarText: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 15,
  },
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boostcamp: {
    bottom: 115,
    right: 20,
  },
  star: {
    bottom: 118,
    right: 155,
  },
});
