import { View, Text, Pressable, StyleSheet } from 'react-native';
import OnScreenSVG from '../SVG_Illustrations/Onscreen.svg';
import OffScreenSVG from '../SVG_Illustrations/Writing.svg';

export default function TaskTypeCard({
  onPressHandler,
  cardTitle,
  cardText,
  borderColor,
  svgImage,
}: any) {
  return (
    <View style={styles.card}>
      <>
        {svgImage === 'offscreen' ? (
          <OffScreenSVG style={styles.svgImage} width={170} height={170} />
        ) : (
          <OnScreenSVG style={styles.svgImage} width={170} height={170} />
        )}
      </>
      {/* <OnScreenSVG style={styles.svgImage} width={170} height={170}/>
      <OffScreenSVG style={styles.svgImagetwo} width={170} height={170}/> */}
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
  svgImage: {
    position: 'absolute',
    fontSize: 20,
    top: 0,
    left: 120,
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
