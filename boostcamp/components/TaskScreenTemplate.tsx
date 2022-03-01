import { StyleSheet, TouchableOpacity, Text, Platform, StatusBar, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskCard from './TaskCard';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { API_URL } from '@env';
import Avatar from './Avatar';

export default function TaskScreenTemplate({
  navigation,
  route,
  svgImage,
}: any) {
  const [task, setTask] = useState({
    taskInstructions: '',
    taskBenefits: '',
  });

  const onPressHandler = () => {
    navigation.navigate('Task_Type_Screen');
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
        <Avatar avatarPosition={styles.avatarPosition} />
      </View>
      <View style={styles.card}>
          <TaskCard
          cardTitle={task.taskInstructions}
          cardText={task.taskBenefits}
          svgImage={svgImage}
          />
          <View>
            <TouchableOpacity onPress={onPressHandler} style={styles.button}>
              <Text style={styles.buttonText}>Complete Task</Text>
            </TouchableOpacity>
          </View>
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
  card: {
    height: "75%",
    top: "2%",
    justifyContent: 'space-between',
  },
  button: {
    backgroundColor: 'black',
    alignSelf: "center",
    width: "60%",
    padding: "2.5%",
    borderWidth: 1.5,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontFamily: "Avenir",
    fontWeight: 'bold',
    fontSize: 22,
  },
});
