import { StyleSheet, Pressable, Text, Platform, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskCard from './TaskCard';
import Logo from './Logo';
import { useState, useEffect } from 'react';
import { API_URL } from '@env';

export default function OffScreenShortScreen({ navigation }: any) {
  const [task, setTask] = useState({
    taskInstructions: '',
    taskBenefits: '',
  });

  const onPressHandler = () => {
    navigation.navigate('Task_Type_Screen');
  };

  useEffect(() => {
    async function getTask() {
      const response = await fetch(`${API_URL}tasks/offscreen/short`);
      const data = await response.json();
      setTask(data.payload[Math.random() * data.length]);
    }
    getTask();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      <TaskCard
        cardTitle={task.taskInstructions}
        cardText={task.taskBenefits}
      />
      <Pressable onPress={onPressHandler} style={{ ...styles.button }}>
        <Text style={styles.buttonText}>Complete Task</Text>
      </Pressable>
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
  button: {
    backgroundColor: 'black',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 43,
    width: 175,
    borderWidth: 1.5,
    borderRadius: 30,
  },
  buttonText: {
    color: 'white',
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
