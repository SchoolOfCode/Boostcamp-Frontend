import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import OnScreenSVG from '../SVG_Illustrations/Onscreen.svg';
import OffScreenSVG from '../SVG_Illustrations/Writing.svg';
import { RFValue } from 'react-native-responsive-fontsize';

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
          <OffScreenSVG style={styles.svgImage} width={'70%'} height={'70%'} />
        ) : (
          <OnScreenSVG style={styles.svgImage} width={'70%'} height={'70%'} />
        )}
      </>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <Text style={styles.cardText}>{cardText}</Text>
      <TouchableOpacity
        onPress={onPressHandler}
        style={[styles.button, { borderColor: borderColor }]}
      >
        <Text style={styles.buttonText}>Choose Me</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '48%',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    justifyContent: 'center',
  },
  svgImage: {
    position: 'absolute',
    top: '0%',
    left: '25%',
  },
  cardTitle: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(14.4),
    top: '20%',
    left: '8%',
  },
  cardText: {
    fontFamily: 'Avenir',
    fontWeight: '100',
    fontSize: RFValue(12.8),
    top: '20%',
    left: '8%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignSelf: 'center',
    top: '25%',
    height: '20%',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 20,
  },
  buttonText: {
    display: 'flex',
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(19.2),
  },
});
