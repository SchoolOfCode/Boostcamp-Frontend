import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TaskTypeCard({
  onPressHandler,
  cardTitle,
  cardText,
  borderColor,
}: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardText}>{cardText}</Text>
      <Pressable
        onPress={onPressHandler}
        style={[styles.button, { borderColor: borderColor }]}
      >
        <Text style={styles.buttonText}>Choose Me</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 250,
    width: 380,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 25,
  },
  cardTitle: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 20,
    top: 130,
    left: 25,
  },
  cardText: {
    fontFamily: 'Avenir',
    fontWeight: '100',
    fontSize: 17,
    top: 130,
    left: 25,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    top: 140,
    height: 43,
    width: 330,
    borderWidth: 1.5,
    borderRadius: 20,
  },
  buttonText: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 24,
  },
});
