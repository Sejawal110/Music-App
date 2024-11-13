
import { StyleSheet, Text, View, FlatList } from 'react-native';
import React, { useState } from 'react';
import { Colors } from '../constants/Colors';
import Header from '../Header';
import * as Font from 'expo-font';
import SongCardWithCategory from '../SongCardWithCategory';
import FloatingPlayer from '../FloatingPlayer';
import { songsWithCategory } from '../data/SongsWithCategory';

export default function HomeScreen() {
  const [currentTrack, setCurrentTrack] = useState(null);

  const [fontsLoaded] = Font.useFonts({
    'Bold': require('../../assets/fonts/Gilroy-Bold.ttf'),
  });

  if (!fontsLoaded) {
    return null; 
  }

  
  const handleSongClick = (selectedTrack) => {
    setCurrentTrack(selectedTrack);
    console.log('currentTrack:', currentTrack);
  };

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={songsWithCategory}
        renderItem={({ item }) => (
          <SongCardWithCategory
            item={item}
            handleSongClick={handleSongClick} 
          />
        )}
        contentContainerStyle={{ paddingBottom: 400 }}
      />
      <FloatingPlayer currentTrack={currentTrack} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bacground,
    flex: 1,
  },
});