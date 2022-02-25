import { View, Text, Pressable, Platform, StyleSheet } from 'react-native';
import OnscreenShortSVG from '../SVG_Illustrations/onScreenImages/OnscreenShort.svg';
import OnscreenMediumSVG from '../SVG_Illustrations/onScreenImages/OnscreenMedium.svg';
import OnscreenLongSVG from '../SVG_Illustrations/onScreenImages/OnscreenLong.svg';

import OffscreenShortSVG from '../SVG_Illustrations/offScreenImages/WritingShort.svg';
import OffscreenMediumSVG from '../SVG_Illustrations/offScreenImages/WritingMedium.svg';
import OffscreenLongSVG from '../SVG_Illustrations/offScreenImages/WritingLong.svg';
export default function TaskCard({ cardTitle, cardText, svgImage }: any) {
  return (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>{cardTitle}</Text>
      <>
        {svgImage === 'shortImageOnScreen' ? (
          <OnscreenShortSVG style={styles.svgImage} width={200} height={200} />
        ) : svgImage === 'mediumImageOnScreen' ? (
          <OnscreenMediumSVG style={styles.svgImage} width={240} height={240} />
        ) : svgImage === 'longImageOnScreen' ? (
          <OnscreenLongSVG style={styles.svgImage} width={240} height={240} />
        ) : svgImage === 'shortImageOffScreen' ? (
          <OffscreenShortSVG style={styles.svgImage} width={240} height={240} />
        ) : svgImage === 'mediumImageOffScreen' ? (
          <OffscreenMediumSVG
            style={styles.svgImage}
            width={240}
            height={240}
          />
        ) : (
          <OffscreenLongSVG style={styles.svgImage} width={240} height={240} />
        )}
      </>
      <Text style={styles.cardText}>{cardText}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    // Temporary height until tasks have been length checked.
    // height: 450,
    height: "100%",
    width: 370,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    marginBottom: 25,
  },
  svgImage: {
    top: "9%",
    alignSelf: "center",
  },
  cardTitle: {
    alignSelf: "center",
    textAlign: 'center',
    fontFamily: "Avenir",
    fontWeight: 'bold',
    fontSize: 20,
    top: "5%",
    width: '90%',
  },
  cardText: {
    textAlign: 'center',
    alignSelf: 'center',
    alignItems: 'center',
    flexWrap: 'wrap',
    justifyContent: 'center',
    fontFamily: "Avenir",
    height: 150,
    fontWeight: '100',
    fontSize: 18,
    top: "13%",
    width: 278,
  },
});
