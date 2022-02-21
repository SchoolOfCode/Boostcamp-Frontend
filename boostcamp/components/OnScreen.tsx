import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskDurationCard from './TaskDurationCard';
import Logo from './Logo';

export default function OnScreen({ navigation }: any) {
  const onScreenShortHandler = () => {
    navigation.navigate('On_Screen_Short');
    // navigation.replace('On_Screen');
  };
  const onScreenMediumHandler = () => {
    navigation.navigate('Off_Screen_Medium');
    // navigation.replace('Off_Screen');
  };
  const onScreenLongHandler = () => {
    navigation.goBack();
    // navigation.navigate('Off_Screen_Long');
    // navigation.replace('Off_Screen');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      <TaskDurationCard
        onPressHandler={onScreenShortHandler}
        cardTitle="Short Task"
        cardText="A short task that you can do on your screen"
        borderColor="#EF8D72"
        buttonText="5-10 min."
      />
      <TaskDurationCard
        onPressHandler={onScreenMediumHandler}
        cardTitle="Medium Task"
        cardText="A medium task that you can do on your screen"
        borderColor="#5C60F4"
        buttonText="30-60 min."
      />
      <TaskDurationCard
        onPressHandler={onScreenLongHandler}
        cardTitle="Long Task"
        cardText="A long task that you can do on your screen"
        borderColor="#EC6364"
        buttonText="Abstract"
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
