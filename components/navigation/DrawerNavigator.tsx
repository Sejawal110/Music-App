import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createDrawerNavigator } from '@react-navigation/drawer';
import StackNavigation from './StackNavigation';
import CustomDrawerContent from './CustomDrawerContent';


const Drawer = createDrawerNavigator();


export default function DrawerNavigator() {
  return (
    <Drawer.Navigator
  
     screenOptions={{headerShown: false, drawerType: 'slide', swipeEdgeWidth: 0}}
     drawerContent={(props: any) => <CustomDrawerContent {...props} /> }
     >
        <Drawer.Screen name='DrawerHome' component={StackNavigation}/>
    </Drawer.Navigator>
  )
}

const styles = StyleSheet.create({})