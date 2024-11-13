import React, { useEffect } from 'react';
import { View, Animated, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const containerWidth = width * 0.9; 
const barWidth = 2;
const numberOfBars = Math.floor(containerWidth / (barWidth + 4)); 

const MusicWaves = () => {
  const animationValues = Array.from({ length: numberOfBars }, () => new Animated.Value(1));

  
  useEffect(() => {
    const animate = (value) => {
      Animated.sequence([
        Animated.timing(value, {
          toValue: Math.random() * 50 + 20, 
          duration: 300,
          useNativeDriver: false,
        }),
        Animated.timing(value, {
          toValue: 10,
          duration: 300,
          useNativeDriver: false,
        }),
      ]).start(() => animate(value)); 
    };

    animationValues.forEach((value) => animate(value));
  }, []);

  return (
    <View style={styles.container}>
      {animationValues.map((value, index) => (
        <Animated.View
          key={index}
          style={[
            styles.bar,
            { height: value, backgroundColor: colors[index % colors.length] },
          ]}
        />
      ))}
    </View>
  );
};

const colors = ['#FF5733', '#33FF57', '#3357FF', '#FF33A1', '#A133FF', '#33FFF5']

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: containerWidth, 
    height: 100,
  },
  bar: {
    width: barWidth, 
    borderRadius: 2,
  },
});

export default MusicWaves;