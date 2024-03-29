import {
  StyleSheet,
  TouchableOpacity,
  Text,
  Platform,
  StatusBar,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskCard from './TaskCard';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { API_URL } from '@env';
import Avatar from './Avatar';
import NavigationButtons from './NavigationButtons';
import StarRating from './StarRating';
import { RFValue } from 'react-native-responsive-fontsize';

export default function TaskScreenTemplate({
  navigation,
  route,
  svgImage,
}: any) {
  const [task, setTask] = useState({
    taskInstructions: '',
    taskBenefits: '',
  });

  const backHandler = () => {
    navigation.goBack();
  };

  const homeHandler = () => {
    navigation.replace('Task_Type_Screen');
  };

  // Eventually will differ in functionality from the homeHandler
  const completeHandler = () => {
    navigation.replace('Task_Type_Screen');
  };

  function useFetch() {
    useEffect(() => {
      async function getTask() {
        const response = await fetch(`${API_URL}${route}`);
        const data = await response.json();
        const tasks = data.payload;
        const randomTaskIndex = Math.floor(Math.random() * tasks.length);
        setTask(tasks[randomTaskIndex]);
      }
      getTask();
    }, []);
  }

  useFetch();

  return (
    <SafeAreaView style={[styles.container, styles.AndroidSafeArea]}>
      <View style={styles.navBar}>
        <View style={styles.logo}>
          <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
        </View>
        <Avatar
          avatarPosition={styles.avatarPosition}
          navigation={navigation}
        />
      </View>
      <View style={styles.card}>
        <TaskCard
          cardTitle={task.taskInstructions}
          cardText={task.taskBenefits}
          svgImage={svgImage}
        />
      </View>
      <StarRating />
      <TouchableOpacity onPress={completeHandler} style={styles.completeButton}>
        <Text style={styles.completeButtonText}>Complete Task</Text>
      </TouchableOpacity>
      <NavigationButtons
        backHandler={backHandler}
        homeHandler={homeHandler}
        backPosition={styles.backPosition}
        homePosition={styles.homePosition}
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
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  navBar: {
    height: Platform.OS === 'ios' ? '12%' : '8%',
    width: '100%',
    justifyContent: 'center',
  },
  logo: {
    paddingTop: Platform.OS === 'ios' ? '5%' : 0,
  },
  boostcamp: {
    left: '13%',
  },
  star: {
    left: '5%',
  },
  avatarPosition: {
    alignSelf: 'flex-end',
    right: '5%',
  },
  card: {
    height: '75%',
    width: '86%',
    alignItems: 'center',
    top: '2%',
  },
  completeButton: {
    position: 'absolute',
    backgroundColor: 'black',
    alignSelf: 'center',
    width: '50%',
    padding: '2.5%',
    bottom: '3%',
    borderWidth: 1.5,
    borderRadius: 30,
  },
  completeButtonText: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(17.6),
  },
  backPosition: {
    bottom: '2.5%',
    left: '10%',
  },
  homePosition: {
    bottom: '2.5%',
    right: '10%',
  },
});
