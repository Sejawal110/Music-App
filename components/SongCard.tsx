import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import * as Font from 'expo-font';
import { Colors } from './constants/Colors';
import { Audio } from 'expo-av';

export default function SongCard({containerStyle, imageStyle, item, handlePlay}: {containerStyle: any, imageStyle: any, item: any, handlePlay: any }) {

  const [fonstLoaded] = Font.useFonts({
    'Medium': require('../assets/fonts/Gilroy-Medium.ttf'),
    'Regular': require('../assets/fonts/Gilroy-Regular.ttf')
  })

  if (!fonstLoaded) {
    return;
  } 


 
 



  return (
    <TouchableOpacity style={[ containerStyle]} onPress={() => handlePlay(item)} >
      <Image 
      source={{uri: item.artwork}} 
      style={[styles.cardImgStyle, imageStyle]}
      />
      <Text numberOfLines={1} style={styles.title}>{item.title}</Text>
      <Text style={styles.ArtistName}>{item.artist}</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({


    cardImgStyle: {
        width: 230,
        height: 230,
        borderRadius: 10,
    },

    title: {
      color: Colors.textPrimary,
      textAlign: 'center',
      fontSize: 23,
      paddingVertical: 5
    },

    ArtistName: {
      color: Colors.textSecondary,
      textAlign: 'center',
      fontSize: 18,
      paddingVertical: 3 ,
      fontFamily: 'Regular'
    },
})