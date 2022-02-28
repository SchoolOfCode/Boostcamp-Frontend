import { View, StyleSheet, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

export default function Logo({ boostcampStyle, starStyle }: any) {
  const Star = (props: any) => (
    <View style={{ ...styles.star, ...starStyle }}>
      <Svg
        xmlns="http://www.w3.org/2000/svg"
        width="80%"
        height="80%"
        fill="black"
        viewBox="0 0 576 512"
        {...props}
      >
        <Path d="M287.9 0c9.2 0 17.6 5.25 21.6 13.52l68.6 141.28 153.3 22.7c9 1.3 16.4 7.6 19.3 16.2 2.8 8.7.5 18.2-5.9 24.5L433.6 328.4l26.3 155.5c1.5 9-2.2 18.2-9.7 23.5-7.4 5.3-18.1 6-25.3 1.7l-137-73.2-137.8 73.2c-7.2 4.3-17 3.6-24.5-1.7-7.4-5.3-11.1-14.5-10.5-23.5l27.1-155.5L31.11 218.2c-6.46-6.3-8.75-15.8-5.91-24.5 2.83-8.6 10.3-14.9 19.29-16.2l153.21-22.7 68.6-141.28C270.4 5.249 278.7 0 287.9 0zm0 78.95L235.4 187.2c-3.5 7.1-10.3 12.1-18.1 13.3L98.98 217.9 184.9 303c5.5 5.5 8 13.4 6.7 21.1l-20.2 119.6 105.2-56.2c7.1-3.8 15.6-3.8 22.6 0l105.2 56.2-20.2-119.6c-1.3-7.7 1.3-15.6 6.8-21.1l85.9-85.1-118.3-17.4c-7.9-1.2-14.7-6.2-18.1-13.3L287.9 78.95z" />
      </Svg>
    </View>
  );

  return (
    <SafeAreaView>
      <Star />
      <Text style={[styles.boostcamp, boostcampStyle]}>BOOSTCAMP</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  star: {
    position: 'absolute',
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'black',
    width: 25,
    height: 25,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boostcamp: {
    position: 'absolute',
    fontFamily: 'Avenir',
    fontWeight: 'bold',
    fontSize: 20,
  },
});
