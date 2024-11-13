import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';
import * as Font from 'expo-font';
import { Colors } from './constants/Colors';
import SongCard from './SongCard';

export default function SongCardWithCategory({ item, handleSongClick }) {
  const [fontsLoaded] = Font.useFonts({
    'Bold': require('../assets/fonts/Gilroy-Bold.ttf'),
  });

  const [playbackObject, setPlaybackObject] = useState(null);
  const [currentTrack, setCurrentTrack] = useState(null);

  useEffect(() => {
    return () => {
      
      if (playbackObject) {
        playbackObject.unloadAsync();
      }
    };
  }, [playbackObject]);

  if (!fontsLoaded) {
    return null;
  }

  const handlePlayTrack = async (selectedTrack, songs = item.songs) => {
    
    if (playbackObject) {
      await playbackObject.stopAsync();
      await playbackObject.unloadAsync();
      setPlaybackObject(null);
    }

    
    handleSongClick({
      artwork: selectedTrack.artwork,
      artist: selectedTrack.artist,
      title: selectedTrack.title,
    });

    // Play new track
    const { sound } = await Audio.Sound.createAsync(
      { uri: selectedTrack.url },
      { shouldPlay: true }
    );

    setPlaybackObject(sound);
    setCurrentTrack(selectedTrack);


    sound.setOnPlaybackStatusUpdate((status) => {
      if (status.didJustFinish) {
        playNextTrack(songs, selectedTrack);
      }
    });
  };

  const playNextTrack = async (songs, currentTrack) => {
    const trackIndex = songs.findIndex((track) => track.url === currentTrack.url);
    if (trackIndex !== -1 && trackIndex < songs.length - 1) {
      const nextTrack = songs[trackIndex + 1];
      await handlePlayTrack(nextTrack, songs);
    }
  };

  const playPreviousTrack = async (songs, currentTrack) => {
    const trackIndex = songs.findIndex((track) => track.url === currentTrack.url);
    if (trackIndex > 0) {
      const previousTrack = songs[trackIndex - 1];
      await handlePlayTrack(previousTrack, songs);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.headingTxt}>{item?.title}</Text>

      <FlatList
        data={item.songs}
        renderItem={({ item }) => (
          <SongCard
            item={item}
            handlePlay={(selectedTrack) => {
              handlePlayTrack(selectedTrack); 
            }}
          />
        )}
        horizontal={true}
        ItemSeparatorComponent={<View style={{ marginHorizontal: 11 }} />}
        contentContainerStyle={{ paddingHorizontal: 22 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headingTxt: {
    color: Colors.textPrimary,
    fontSize: 25,
    fontFamily: 'Bold',
    paddingVertical: 20,
    paddingHorizontal: 21,
  },
});