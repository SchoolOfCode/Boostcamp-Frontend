import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TaskCard({
  onPressHandler,
  cardTitle,
  cardText,
  borderColor,
  buttonText,
}: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardText}>{cardText}</Text>
      <Pressable
        onPress={onPressHandler}
        style={{ ...styles.button, borderColor: borderColor }}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 450,
    width: 370,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 25,
  },
  cardTitle: {
    alignSelf: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 20,
    top: 40,
    width: 270,
  },
  cardText: {
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir',
    height: 50,
    fontWeight: '100',
    fontSize: 18,
    top: 290,
    width: 278,
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    left: 180,
    top: 50,
    height: 43,
    width: 175,
    borderWidth: 1.5,
    borderRadius: 12,
  },
  buttonText: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 22,
    left: 18,
    bottom: 12,
  },
});
