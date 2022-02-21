import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function TaskCard({ cardTitle, cardText }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardText}>{cardText}</Text>
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
    top: 35,
    width: 270,
  },
  cardText: {
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Avenir',
    height: 50,
    fontWeight: '100',
    fontSize: 18,
    top: 230,
    width: 278,
  },
});
