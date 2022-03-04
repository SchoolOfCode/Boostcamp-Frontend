import {
  View,
  Text,
  Pressable,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

import Svg, { Path } from 'react-native-svg';

import ShortTaskSVG from '../SVG_Illustrations/Run - Health.svg';
import MediumTaskSVG from '../SVG_Illustrations/Friends.svg';
import LongTaskSVG from '../SVG_Illustrations/Location.svg';

export default function TaskDurationCard({
  onPressHandler,
  cardTitle,
  cardText,
  borderColor,
  buttonText,
  svgImage,
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
    <TouchableOpacity style={styles.card} onPress={onPressHandler}>
      <>
        {svgImage === 'shortImage' ? (
          <ShortTaskSVG style={styles.svgImage} width={'70%'} height={'70%'} />
        ) : svgImage === 'mediumImage' ? (
          <MediumTaskSVG style={styles.svgImage} width={'70%'} height={'70%'} />
        ) : (
          <LongTaskSVG style={styles.svgImage} width={'70%'} height={'70%'} />
        )}
      </>
      <View style={styles.infoContainer}>
        <Text style={styles.cardTitle}>{cardTitle}</Text>
        <View style={styles.cardTextContainer}>
          <Text style={styles.cardText}>{cardText}</Text>
        </View>
        <View style={[styles.button, { borderColor: borderColor }]}>
          <Clock style={styles.clock} />
          <Text style={styles.buttonText}>{buttonText}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    height: '30%',
    width: '85%',
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
  },
  infoContainer: {
    width: '48%',
    right: '5%',
    height: '100%',
    alignSelf: 'flex-end',
    justifyContent: 'center',
  },
  cardTitle: {
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(18.4),
  },
  svgImage: {
    position: 'absolute',
    fontSize: RFValue(16),
    top: '15%',
    right: '43%',
  },
  cardTextContainer: {
    height: '30%',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  cardText: {
    fontWeight: '100',
    fontFamily: 'Avenir',
    fontSize: RFValue(12),
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '25%',
    width: '100%',
    borderWidth: 1.5,
    borderRadius: 12,
  },
  clock: {
    right: '36%',
    top: '33%',
  },
  buttonText: {
    display: 'flex',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: RFValue(17.6),
    left: '10%',
    bottom: '33%',
  },
});
