import { StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Colors } from '../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import * as Font from 'expo-font';
import Feather from '@expo/vector-icons/Feather';
import PlayerRepeatToggle from '../PlayerRepeatToggle';
import PlayerShuffleToggle from '../PlayerShuffleToggle';
import PlayerProgressBar from '../PlayerProgressBar';
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from '../PlayerControls';
import { useNavigation, useRoute } from '@react-navigation/native';

const PHIMG = require('../../assets/images/music2.png')

export default function PlayerScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const currentTrack = route.params.currentTrack;

  const [fonstLoaded] = Font.useFonts({
    'Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
    'Regular': require('../../assets/fonts/Gilroy-Regular.ttf')
  })

  if (!fonstLoaded) {
    return;
  }

  
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const duration = currentTrack?.duration || 0;

  useEffect(() => {
    let interval;

    if (isPlaying) {
      interval = setInterval(() => {
        setProgress(prevProgress => {
          if (prevProgress < duration) {
            return prevProgress + 1; 
          } else {
            clearInterval(interval);
            return duration;
          }
        });
      }, 1000);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval); 
  }, [isPlaying, duration]);

  const handleProgressChange = (value) => {
    setProgress(value);
   
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="arrowleft" size={24} color={Colors.iconPrimary} />
        </TouchableOpacity>
        <Text style={styles.headingTxt}>Playing Now</Text>
      </View>

      <View style={styles.coverImgContainer}>
        <Image
          source={currentTrack?.artwork ? { uri: currentTrack?.artwork } : PHIMG}
          style={styles.coverImg}
        />
      </View>

      <View style={styles.titleHeartContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{currentTrack?.title || 'Not Playing'}</Text>
          <Text style={styles.artistName}>{currentTrack?.artist}</Text>
        </View>

        <TouchableOpacity>
          <AntDesign name={true ? 'hearto' : 'heart'} size={24} color={Colors.iconSecondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.playerControlContainer}>
        <TouchableOpacity>
          <Feather name={'volume-1'} size={30} color={Colors.iconSecondary} />
        </TouchableOpacity>

        <View style={styles.repeatShuffleWrapper}>
          <PlayerRepeatToggle />
          <PlayerShuffleToggle />
        </View>
      </View>

      
      <PlayerProgressBar
       
      />

      <View style={styles.playPauseContainer}>
        <GoToPreviousButton />
        <PlayPauseButton  />
        <GoToNextButton />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bacground,
    padding: 20
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%'
  },
  headingTxt: {
    color: Colors.textPrimary,
    fontSize: 25,
    fontFamily: 'Medium',
    flex: 1,
    textAlign: 'center',
  },

  coverImgContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20
  },

  coverImg: {
    height: 300,
    width: 300,
    borderRadius: 10
  },

  titleHeartContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  titleContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },

  title: {
    fontSize: 25,
    color: Colors.textPrimary,
    fontFamily: 'Medium'
  },
  artistName: {
    fontSize: 18,
    color: Colors.textSecondary
  },

  playerControlContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20
  },

  repeatShuffleWrapper: {
    flexDirection: 'row',
    gap: 15
  },

  playPauseContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 20,
    marginTop: 70
  },
});