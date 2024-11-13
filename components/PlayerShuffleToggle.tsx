import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import { Colors } from './constants/Colors';

export default function PlayerShuffleToggle() {

    
  return (
    <TouchableOpacity>
        <MaterialCommunityIcons name="shuffle" size={30} color={Colors.iconSecondary} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({})