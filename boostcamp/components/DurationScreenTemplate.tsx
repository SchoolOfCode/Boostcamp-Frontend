import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskDurationCard from './TaskDurationCard';
import Logo from './Logo';
import Avatar from './Avatar';

export default function DurationScreenTemplate({
  navigation,
  taskScreenType,
  cardText,
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
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <View style={styles.navBar}>
        <View style={styles.logo}>
          <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
        </View>
        <Avatar avatarPosition={styles.avatarPosition} />
      </View>
      <View style={styles.cards}>
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
      </View>
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navBar: {
    height: Platform.OS === "ios" ? "12%" : "8%",
    width: "100%",
    justifyContent: 'center',
  },
  logo: {
    paddingTop: Platform.OS === 'ios' ? "15%" : 0,
  },
  boostcamp: {
   left: "13%",
  },
  star: {
    left: "5%",
  },
  avatarPosition: { 
    alignSelf: "flex-end",
    right: "5%",
  },
  cards: {
    height: "75%",
    top: "2%",
    justifyContent: 'space-between',
  }
});
