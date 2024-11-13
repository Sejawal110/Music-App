import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import * as Font from 'expo-font';
import MovingText from './MovingText';
import { GoToNextButton, GoToPreviousButton, PlayPauseButton } from './PlayerControls';
import { useNavigation } from '@react-navigation/native';

const PHIMG = require('../assets/images/music2.png');

export default function FloatingPlayer({ currentTrack }) {
  const navigation = useNavigation();

  const handlerPlayer = () => {
    navigation.navigate('PlayerScreen', {currentTrack});
  };

  const [fonstLoaded] = Font.useFonts({
    'Medium': require('../assets/fonts/Gilroy-Medium.ttf'),
    'Regular': require('../assets/fonts/Gilroy-Regular.ttf'),
  });

  if (!fonstLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      

      <TouchableOpacity
        activeOpacity={0.5}
        style={styles.container}
        onPress={handlerPlayer}
      >
        <Image
          source={currentTrack?.artwork ? {uri: currentTrack?.artwork}: PHIMG }
          style={styles.coverImg}
        />

        <View style={styles.titleContainer}>
          <MovingText text={currentTrack?.title || 'No Track Available'} animationThreshold={15} style={styles.title} />
          <Text style={styles.artistName}>{currentTrack?.artist || 'Not Playing'}</Text>
        </View>
        <View style={styles.playerConrolContainer}>
          <GoToPreviousButton />
          <PlayPauseButton />
          <GoToNextButton />
        </View>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  coverImg: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  },
  titleContainer: {
    flex: 1,
    paddingHorizontal: 7,
    overflow: 'hidden',
    marginLeft: 5,
    marginRight: 12,
  },
  title: {
    color: '#fff',
    fontSize: 20,
    fontFamily: 'Medium',
  },
  artistName: {
    color: '#fff',
    fontSize: 15,
  },
  playerConrolContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 20,
    paddingRight: 19,
  },
});