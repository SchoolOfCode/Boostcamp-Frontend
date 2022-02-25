//import {useState} to use state for the star rating component and other props from react native
import { useState } from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import { StarEmpty, StarFilled } from "../SVG_Illustrations";

//declare const for images of empty star and filled star

const starImgFilled =
  "https://www.pngfind.com/pngs/m/657-6575006_star-with-rounded-edges-png-star-rounded-corners.png";
const starImgCorner =
  "https://www.pinclipart.com/picdir/big/394-3949390_computer-icons-clip-art-star-png-icon-transparent.png";

// declare rating bar, which returns star image, wrapped in TouchableOpacity

const StarRating = () => {
  //add initial default state for ratings and max rating
  const [defaultRating, setdefaultRating] = useState(0);
  const [maxRating, setmaxRating] = useState([1, 2, 3, 4, 5]);
  //style for starRatingStyle = style for a line of 5 stars
  return (
    <View style={styles.starRatingStyle}>
      {maxRating.map((item, key) => {
        return (
          <TouchableOpacity
            activeOpacity={0.7}
            key={item}
            onPress={() => setdefaultRating(item)}
          >
            <Image
              //starImageStyle = style for a star
              style={styles.starImageStyle}
              source={item <= defaultRating ? { StarFilled } : { StarEmpty }}
            />
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  starRatingStyle: {
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  starImageStyle: {
    width: 40,
    height: 40,
    resizeMode: "cover",
  },
});

export default StarRating;
