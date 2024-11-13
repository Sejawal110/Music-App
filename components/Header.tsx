import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Colors } from '../components/constants/Colors'
import FontAwesome5 from '@expo/vector-icons/FontAwesome5';
import AntDesign from '@expo/vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';


export default function Header() {

  const navigation: any = useNavigation();

  const toggleDrawer = () => {
    navigation.toggleDrawer();
  }

  return (
    <View style={styles.headerContainer}>
    <TouchableOpacity onPress={toggleDrawer}>
    <FontAwesome5 name="grip-lines" size={30} color={Colors.iconPrimary} />
    </TouchableOpacity>

    <TouchableOpacity>
    <AntDesign name="search1" size={30} color={Colors.iconPrimary} />
    </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 16,
        paddingHorizontal: 24
        
    
      },
})