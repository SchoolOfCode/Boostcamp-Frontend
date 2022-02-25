import { StyleSheet, Platform, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskTypeCard from '../components/TaskTypeCard';
import Logo from '../components/Logo';
import Avatar from '../components/Avatar';

export default function TaskTypeScreen({ navigation }: any) {
  const onScreenHandler = () => {
    navigation.navigate('On_Screen');
  };
  const offScreenHandler = () => {
    navigation.navigate('Off_Screen');
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
      <TaskTypeCard
        onPressHandler={onScreenHandler}
        cardTitle="On Screen"
        cardText="A task that involves looking at your screen"
        borderColor="#EF86A0"
        svgImage = "onscreen"
      />
      <TaskTypeCard
        onPressHandler={offScreenHandler}
        cardTitle="Off Screen"
        cardText="A task to take away from your screen"
        borderColor="#64FCD9"
        svgImage= "offscreen"
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
