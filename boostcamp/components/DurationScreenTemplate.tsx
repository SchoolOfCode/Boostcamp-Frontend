import { StyleSheet, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskDurationCard from './TaskDurationCard';
import Logo from './Logo';
import Avatar from './Avatar';

export default function DurationScreenTemplate({
  navigation,
  taskScreenType,
  cardText,
  svgImage,
}: any) {
  const ShortHandler = () => {
    navigation.navigate(`${taskScreenType}_Screen_Short`);
  };
  const MediumHandler = () => {
    navigation.navigate(`${taskScreenType}_Screen_Medium`);
  };
  const LongHandler = () => {
    navigation.navigate(`${taskScreenType}_Screen_Long`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      <Avatar avatarPosition={styles.avatarPosition} />
      <TaskDurationCard
        onPressHandler={ShortHandler}
        cardTitle="Short Task"
        cardText={`A short task ${cardText} your screen`}
        borderColor="#EF8D72"
        buttonText="5-10 min."
        svgImage="shortImage"
      />
      <TaskDurationCard
        onPressHandler={MediumHandler}
        cardTitle="Medium Task"
        cardText={`A medium task ${cardText} your screen`}
        borderColor="#5C60F4"
        buttonText="30-60 min."
        svgImage="mediumImage"
      />
      <TaskDurationCard
        onPressHandler={LongHandler}
        cardTitle="Long Task"
        cardText={`A long task ${cardText} your screen`}
        borderColor="#EC6364"
        buttonText="Abstract"
        svgImage="longImage"
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
