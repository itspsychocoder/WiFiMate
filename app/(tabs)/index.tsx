import { Image, StyleSheet, Platform, Pressable, Text, FlatList, View, Button } from 'react-native';

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import Credits from '@/components/Credits';

import AddNewNetwork from '@/components/AddNewNetwork';
import { Link } from 'expo-router';
import { useState } from 'react';

export default function HomeScreen() {
  const [networks, setNetworks] = useState([{ ssid: 'Network 1', username: 'user1' }, { ssid: 'Network 2', username: 'user2' }, { ssid: 'Network 3', username: 'user3' }, { ssid: 'Network 4', username: 'user4' }, { ssid: 'Network 5', username: 'user5' }]);
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Welcome to WiFiMate!</ThemedText>
        <ThemedText>
          Click on connect to connect using that account.
        </ThemedText>
        {/* <HelloWave /> */}
      </ThemedView>
      {/* <ThemedView style={styles.stepContainer}>
        <ThemedText type="subtitle">Step 1: Try it</ThemedText>
        <ThemedText>
          Edit <ThemedText type="defaultSemiBold">app/(tabs)/index.tsx</ThemedText> to see changes.
          Press{' '}
          <ThemedText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12'
            })}
          </ThemedText>{' '}
          to open developer tools.
        </ThemedText>
      </ThemedView> */}

<FlatList
        data={networks}
        keyExtractor={(item) => item.ssid}
        renderItem={({ item }) => (
          <View style={styles.networkItem}>
            <View>
            <Text style={{color: "white"}}>SSID: {item.ssid}</Text>
            <Text style={{color: "white"}}>Username: {item.username}</Text>
            </View>
            <Button title="Connect" onPress={() => console.log('Connect to:', item.ssid)} />
          </View>
        )}
      />
      <Link href="/modal" asChild>
        <Pressable>
          {({ pressed }) => (
            <Text
            style={{ marginRight: 15, opacity: pressed ? 0.5 : 1, backgroundColor: "white", color: "black", paddingHorizontal:20, paddingVertical: 10, borderRadius: 10}}
            >
              Add New Network
              </Text>
          )}
        </Pressable>
      </Link>

     <Credits/>

    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  networkItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  glowingText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white', // Text color
    textShadowColor: 'rgba(255, 255, 255, 0.75)', // White glow color with opacity
    textShadowOffset: { width: 0, height: 0 }, // Shadow offset (no offset for glow)
    textShadowRadius: 10, // Blur radius for the glow effect
  },

});
