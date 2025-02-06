import { StatusBar } from 'expo-status-bar';

import React, { useState } from 'react';

import { View, Text, TextInput, StyleSheet, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';



export default function ModalScreen() {
  const [outfitName, setOutfitName] = useState('');
  const [tags, setTags] = useState('');
  const [description, setDescription] = useState('');
  const [condition, setCondition] = useState('new');
  const [type, setType] = useState('shirt');
  const [closet, setCloset] = useState('');
  const [outfitImage, setOutfitImage] = useState('');
  const [image, setImage] = useState(null);

  const [progress, setProgress] = useState(0)



  const handleSubmit = async() => {
    const formData = {
      name: outfitName,
      tags,
      description,
      condition,
      type,
      closet,
      image: outfitImage,
    };
   
//       const response = await fetch("https://outfit-mate-ai-backend.vercel.app/api/outfits/add-outfit", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json"
//         },
//         body: JSON.stringify(formData)
//       })
//       const data = await response.json()
//       console.log(data)
//       alert(data.message)
//     console.log('Form Data:', formData);

Alert.alert('Network Added', 'Your network has been added successfully.', [
  { text: 'OK', onPress: () => console.log('OK Pressed') },
]);
  };


  
  

 
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.label}>Identity</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Identity"
        placeholderTextColor="#aaa"
        value={outfitName}
        onChangeText={setOutfitName}
      />

      <Text style={styles.label}>Domain</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Domain"
        placeholderTextColor="#aaa"
        value={tags}
        onChangeText={setTags}
      />

      <Text style={styles.label}>Password</Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Password"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={description}
        onChangeText={setDescription}
      />

    



      <TouchableOpacity style={styles.submitButton} onPress={handleSubmit}>
        <Text style={styles.submitButtonText}>Add Network</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#121212', // Dark background
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff', // White text for labels
    marginBottom: 5,
  },
  imagePickerButton: {
    backgroundColor: '#0066cc',
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginBottom: 10,
  },
  imagePickerButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  imagePreview: {
    width: '100%',
    height: 200,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#fff',
    marginBottom: 15,
  },
  input: {
    borderWidth: 1,
    borderColor: '#fff', // White border
    borderRadius: 5,
    color: '#fff', // White text
    padding: 10,
    marginBottom: 15,
  },
  picker: {
    borderWidth: 1,
    borderColor: '#fff', // White border
    borderRadius: 5,
    color: '#fff', // White text
    marginBottom: 15,
  },
  submitButton: {
    backgroundColor: '#28a745', // Green button
    padding: 15,
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 20,
  },
  submitButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});