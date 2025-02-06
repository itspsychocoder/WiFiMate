import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Animated } from 'react-native';

const Credits = () => {
  // Create an animated value for the glow radius
  const glowAnim = useRef(new Animated.Value(5)).current;

  useEffect(() => {
    // Create a looped animation for the glow effect
    Animated.loop(
      Animated.sequence([
        // Increase glow radius
        Animated.timing(glowAnim, {
          toValue: 15, // Maximum glow radius
          duration: 1000, // Duration of the animation
          useNativeDriver: false, // `textShadowRadius` is not supported by the native driver
        }),
        // Decrease glow radius
        Animated.timing(glowAnim, {
          toValue: 5, // Minimum glow radius
          duration: 1000, // Duration of the animation
          useNativeDriver: false,
        }),
      ])
    ).start(); // Start the animation
  }, []);

  return (
    <View style={styles.container}>
      <Animated.Text
        style={[
          styles.glowingText,
          { textShadowRadius: glowAnim }, // Bind the animated value to `textShadowRadius`
        ]}
      >
        Created by: Psycho Coder
      </Animated.Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  glowingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Text color
    textShadowColor: 'rgba(255, 255, 255, 0.75)', // White glow color with opacity
    textShadowOffset: { width: 0, height: 0 }, // Shadow offset (no offset for glow)
  },
});

export default Credits;