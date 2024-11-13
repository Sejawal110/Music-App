import { StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import Animated, { useAnimatedStyle, useSharedValue, withDelay, withRepeat, withTiming, Easing } from 'react-native-reanimated';

export default function MovingText({ text = "", animationThreshold = 10, style }) {
    const translateX = useSharedValue(0);
    
    
    const textWidth = text ? text.length * 8 : 100; 
    
    useEffect(() => {
        if (text.length >= animationThreshold) {
            translateX.value = withDelay(
                1000, 
                withRepeat(
                    withTiming(-textWidth, { duration: 9999, easing: Easing.linear }),
                    -1, 
                    true
                )
            );
        }
    }, [text, textWidth, animationThreshold, translateX]);

    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ translateX: translateX.value }]
        };
    });

    return (
        <Animated.Text
            numberOfLines={1}
            style={[
                animatedStyle, 
                style, 
                text.length >= animationThreshold && { width: textWidth, paddingLeft: 16 }
            ]}
        >
            {text || " "} 
        </Animated.Text>
    );
}