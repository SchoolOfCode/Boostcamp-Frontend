import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskTypeCard from '../components/TaskTypeCard';
import Logo from '../components/Logo';

export default function TaskTypeScreen({ navigation }: any) {
  const onScreenHandler = () => {
    navigation.navigate('On_Screen');
    // navigation.replace('On_Screen');
  };
  const offScreenHandler = () => {
    navigation.navigate('Off_Screen');
    // navigation.replace('Off_Screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
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
