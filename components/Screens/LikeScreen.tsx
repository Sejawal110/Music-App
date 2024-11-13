import { StyleSheet, Text, View, TouchableOpacity, FlatList } from 'react-native'
import React from 'react'
import { Colors } from '../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import SimpleLineIcons from '@expo/vector-icons/SimpleLineIcons';
import * as Font from 'expo-font';
import SongCard from '../SongCard';
import FloatingPlayer from '../FloatingPlayer';



export default function LikeScreen({item}) {

  

    const [fonstLoaded] = Font.useFonts({
        'Bold': require('../../assets/fonts/Gilroy-ExtraBold.ttf'),
    })

    if (!fonstLoaded) {
        return;
    }




  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity >
        <AntDesign name="arrowleft" size={24} color={Colors.iconPrimary} />
        </TouchableOpacity>

        <TouchableOpacity>
        <SimpleLineIcons name="equalizer" size={24} color={Colors.iconPrimary} />
        </TouchableOpacity>
      </View>

      
     <FlatList  
     ListHeaderComponent={
      <>
      <Text style={styles.headingTxt}>Liked Songs</Text>
      </>
     }
     data={[1,2,3,4,5,6,7]} renderItem={() => 
      <SongCard containerStyle={{width: '47%'}} imageStyle={{width: 160, height: 160}} />} 
     numColumns={2}
     contentContainerStyle={{
      paddingBottom: 400,
      paddingHorizontal: 30
     }}
     columnWrapperStyle={{
      justifyContent: 'space-between',
      marginVertical: 20
     }}
      
     />

     <FloatingPlayer item={item}  />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.bacground,
        
    },

    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20
    },

    headingTxt: {
        fontSize: 25,
        color: Colors.textPrimary,
        fontFamily: 'Bold',
        paddingHorizontal: 21
    },
})