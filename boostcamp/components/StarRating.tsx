import { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Text } from 'react-native';
import StarEmptySVG from '../SVG_Illustrations/StarEmpty.svg';
import StarFilledSVG from '../SVG_Illustrations/StarFilled.svg';

const StarRating = () => {
  const [defaultRating, setDefaultRating] = useState(0);
  const [maxRating, setMaxRating] = useState([1, 2, 3, 4, 5]);
  return (
    <View style={styles.card}>
      <Text style={styles.starText}>
        What did you think of your task for today?
      </Text>
      <View style={styles.starContainer}>
        {maxRating.map((item) => {
          return (
            <TouchableOpacity
              activeOpacity={0.7}
              key={item}
              onPress={() => setDefaultRating(item)}
              style={styles.stars}
            >
              <>
                {item <= defaultRating ? <StarFilledSVG /> : <StarEmptySVG />}
              </>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginTop: '-13%',
    height: '10%',
    width: 370,
    borderWidth: 1.5,
    borderRadius: 10,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  starContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  starText: {
    textAlign: 'center',
    fontFamily: 'Avenir',
    fontWeight: '100',
    fontSize: 13,
    width: 278,
  },
  stars: {
    margin: '1%',
  },
});

export default StarRating;
