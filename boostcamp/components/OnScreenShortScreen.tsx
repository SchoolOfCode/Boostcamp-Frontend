import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskCard from './TaskCard';
import Logo from './Logo';

export default function OnScreenShortScreen({ navigation }: any) {
  const onPressHandler = () => {
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      <TaskCard
        cardTitle="Open GoogleMaps and click anywhere. Enjoy exploring a new area for 5 minutes."
        cardText="This will benefit you by expanding your knowledge of random facts."
        borderColor="#EF8D72"
        buttonText="Complete Task"
        onPressHandler={onPressHandler}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  boostcamp: {
    bottom: 25,
    right: 20,
  },
  star: {
    bottom: 28,
    right: 155,
  },
});
