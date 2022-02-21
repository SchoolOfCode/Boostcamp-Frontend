import { StyleSheet, Pressable, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import TaskCard from './TaskCard';
import Logo from './Logo';
import { useState, useEffect } from 'react';

const API_URL = process.env.REACT_APP_API_URL;

export default function OnScreenShortScreen({ navigation }: any) {
  const [task, setTask] = useState('');

  const onPressHandler = () => {
    navigation.navigate('Task_Type_Screen');
  };

  useEffect(() => {
    async function getTask() {
      const response = await fetch(`${API_URL}onscreen/short`);
      const data = await response.json();
      setTask(data.payload);
      console.log(data.payload);
    }
    getTask();
  });

  return (
    <SafeAreaView style={styles.container}>
      <Logo boostcampStyle={styles.boostcamp} starStyle={styles.star} />
      <TaskCard
        cardTitle="Open GoogleMaps and click anywhere. Enjoy exploring a new area for 5 minutes."
        cardText="This will benefit you by expanding your knowledge of random facts."
        buttonText="Complete Task"
        onPressHandler={onPressHandler}
      />
      <Pressable onPress={onPressHandler} style={{ ...styles.button }}>
        <Text style={styles.buttonText}>Complete Task</Text>
      </Pressable>
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
