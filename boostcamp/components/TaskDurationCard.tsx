import { View, Text, Pressable, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

export default function TaskDurationCard({
  onPressHandler,
  cardTitle,
  cardText,
  borderColor,
  buttonText,
}: any) {
  const Clock = (props: any) => (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 512 512"
      width="65%"
      height="65%"
      stroke="black"
      fill="black"
      {...props}
    >
      <Path d="M232 120c0-13.3 10.7-24 24-24s24 10.7 24 24v123.2l85.3 56.8c11 7.4 14 22.3 5.8 33.3-6.5 11-21.4 14-32.4 5.8l-96-64c-6.7-3.6-10.7-11.1-10.7-20V120zM256 0c141.4 0 256 114.6 256 256S397.4 512 256 512 0 397.4 0 256 114.6 0 256 0zM48 256c0 114.9 93.1 208 208 208s208-93.1 208-208S370.9 48 256 48 48 141.1 48 256z" />
    </Svg>
  );

  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <View style={styles.cardTextContainer}>
        <Text style={styles.cardText}>{cardText}</Text>
      </View>
      <Pressable
        onPress={onPressHandler}
        style={{ ...styles.button, borderColor: borderColor }}
      >
        <Clock style={styles.clock} />
        <Text style={styles.buttonText}>{buttonText}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: 200,
    width: 380,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 25,
  },
  cardTitle: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 23,
    top: 40,
    left: 180,
  },
  cardTextContainer: {
    width: 158,
    height: 50,
    top: 45,
    left: 180,
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardText: {
    fontFamily: 'Avenir',
    fontWeight: '100',
    fontSize: 15,
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
  clock: {
    right: 65,
    top: 15,
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
