import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '@/components/Screens/HomeScreen';
import LikeScreen from '@/components/Screens/LikeScreen';
import PlayerScreen from '@/components/Screens/PlayerScreen';



const Stack = createNativeStackNavigator();

export default function StackNavigation() {
  return (
    <Stack.Navigator  screenOptions={{headerShown: false}}  >
    <Stack.Screen name="HomeScreen" component={HomeScreen} />
    <Stack.Screen name="LikeScreen" component={LikeScreen} />
    <Stack.Screen name='PlayerScreen' component={PlayerScreen} />
  </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})