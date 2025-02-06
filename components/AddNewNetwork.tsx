import React, { useState } from 'react';
import { View, Text, FlatList, TextInput, Button, StyleSheet } from 'react-native';

const AddNewNetwork = () => {
  const [ssid, setSsid] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [networks, setNetworks] = useState([]);

  const addNetwork = () => {
    const newNetwork = { ssid, username, password };
    //@ts-ignore
    setNetworks([...networks, newNetwork]);
    setSsid('');
    setUsername('');
    setPassword('');
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="SSID"
        value={ssid}
        onChangeText={setSsid}
      />
      <TextInput
        style={styles.input}
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Add Network" onPress={addNetwork} />
      <FlatList
        data={networks}
        keyExtractor={(item) => item.ssid}
        renderItem={({ item }) => (
          <View style={styles.networkItem}>
            <Text>SSID: {item.ssid}</Text>
            <Text>Username: {item.username}</Text>
            <Button title="Connect" onPress={() => console.log('Connect to:', item.ssid)} />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 10,
    borderRadius: 5,
  },
  networkItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
});

export default AddNewNetwork;