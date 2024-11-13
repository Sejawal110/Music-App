
import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DrawerNavigator from '@/components/navigation/DrawerNavigator';



const Stack = createNativeStackNavigator();

function Index() {
  return (
    <NavigationContainer independent={true}>
    <DrawerNavigator />
    </NavigationContainer>
  );
}

export default Index;