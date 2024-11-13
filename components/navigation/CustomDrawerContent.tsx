import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { DrawerContentScrollView, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import { Colors } from '../constants/Colors'
import AntDesign from '@expo/vector-icons/AntDesign';
import Octicons from '@expo/vector-icons/Octicons';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import * as Font from 'expo-font';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


const CustomDrawerContent = (props: any) => {

  const isDarkMode = true;


  const toggleDrawer = () => {
    props.navigation.toggleDrawer();
  }


  const [fonstLoaded] = Font.useFonts({
    'Medium': require('../../assets/fonts/Gilroy-Medium.ttf'),
    'Regular': require('../../assets/fonts/Gilroy-Regular.ttf')
  })

  if (!fonstLoaded) {
    return;
  }
  return (
    <DrawerContentScrollView style={styles.container}>
      <View style={styles.headerIconContainer}>
        <TouchableOpacity onPress={toggleDrawer}>
          <AntDesign name="close" size={30} color={Colors.iconPrimary} />
        </TouchableOpacity>

        <TouchableOpacity>
          <Octicons name={isDarkMode ? 'sun' : 'moon'} size={30} color={Colors.iconSecondary} />
        </TouchableOpacity>
      </View>

      <View style={styles.menuContainer}>
        <DrawerItem label={'Profile'} icon={() => (
          <FontAwesome name="user" size={30} color={Colors.iconSecondary} />
        )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
        />

        <DrawerItem label={'Liked Songs'} icon={() => (
          <AntDesign name="hearto" size={30} color={Colors.iconSecondary}

          />
        )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}
          onPress={() => {
            props.navigation.navigate('LikeScreen')
          }}
        />

        <DrawerItem label={'Language'} icon={() => (
          <MaterialIcons name="language" size={30} color={Colors.iconSecondary} />


        )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}

        />

        <DrawerItem label={'Contact Us'} icon={() => (
          <MaterialIcons name="contacts" size={30} color={Colors.iconSecondary} />


        )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}

        />

        <DrawerItem label={'FAQs'} icon={() => (
         <FontAwesome name="question-circle" size={30} color={Colors.iconSecondary} />


        )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}

        />

        <DrawerItem label={'Settings'} icon={() => (
          <AntDesign name="setting" size={30} color={Colors.iconSecondary} />


        )}
          labelStyle={styles.labelStyle}
          style={styles.drawerItem}

        />
      </View>



    </DrawerContentScrollView>
  )
}

export default CustomDrawerContent

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.bacground,
    padding: 20
  },

  headerIconContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },

  menuContainer: {
    marginVertical: 40
  },
  labelStyle: {
    fontSize: 17,
    color: Colors.textPrimary,
    fontFamily: 'Medium'
  },
  drawerItem: {},
})