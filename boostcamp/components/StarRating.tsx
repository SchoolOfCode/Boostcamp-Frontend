//import {useState} to use state for the star rating component and other props from react native
import { useState } from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import StarEmptySVG from '../SVG_Illustrations/StarEmpty.svg';
import StarFilledSVG from '../SVG_Illustrations/StarFilled.svg';

//declare const for images of empty star and filled star

// declare rating bar, which returns star image, wrapped in TouchableOpacity

const StarRating = () => {
  //add initial default state for ratings and max rating
  const [defaultRating, setdefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  //style for starRatingStyle = style for a line of 5 stars
  //
  return (
    <View style={styles.starRatingStyle}>
      {maxRating.map((item) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setdefaultRating(item)} //by this line we're changing our defualt rating and below it will check and parse value for item
          >
            <>{item <= defaultRating ? <StarFilledSVG /> : <StarEmptySVG />}</>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  starRatingStyle: {
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: 'cover',
  },
});

export default StarRating;
