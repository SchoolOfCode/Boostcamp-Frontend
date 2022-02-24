import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskDurationCard from './TaskDurationCard';
import Logo from './Logo';
import Avatar from './Avatar';

export default function OffScreen({ navigation }: any) {
  const offScreenShortHandler = () => {
    navigation.navigate('Off_Screen_Short');
  };
  const offScreenMediumHandler = () => {
    navigation.navigate('Off_Screen_Medium');
  };
  const offScreenLongHandler = () => {
    navigation.navigate('Off_Screen_Long');
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      <Avatar avatarPosition={styles.avatarPosition} />
      <TaskDurationCard
        onPressHandler={offScreenShortHandler}
        cardTitle="Short Task"
        cardText="A short task away from your screen"
        borderColor="#EF8D72"
        buttonText="5-10 min."
        svgImage = "shortImage"
      />
      <TaskDurationCard
        onPressHandler={offScreenMediumHandler}
        cardTitle="Medium Task"
        cardText="A medium task away from your screen"
        borderColor="#5C60F4"
        buttonText="30-60 min."
        svgImage = "mediumImage"
      />
      <TaskDurationCard
        onPressHandler={offScreenLongHandler}
        cardTitle="Long Task"
        cardText="A long task away from your screen"
        borderColor="#EC6364"
        buttonText="Abstract"
        svgImage = "longImage"
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
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
  avatarPosition: { top: 62, right: 30 },
});
