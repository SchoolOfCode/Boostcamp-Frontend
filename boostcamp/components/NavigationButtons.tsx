import { View, StyleSheet, Text, Pressable } from 'react-native';
import House from '../SVG_Illustrations/House.svg';
import Arrow from '../SVG_Illustrations/Arrow.svg';

export default function NavigationButtons({
  backPosition,
  homePosition,
  backHandler,
  homeHandler,
}: any) {
  return (
    <View>
      <Pressable onPress={backHandler} style={[styles.button, backPosition]}>
        <Arrow />
      </Pressable>
      <Pressable onPress={homeHandler} style={[styles.button, homePosition]}>
        <House />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  button: {
    position: 'absolute',
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 52,
    borderWidth: 1.5,
    borderRadius: 30,
  },
});
