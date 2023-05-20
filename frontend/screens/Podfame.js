import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

firebase.initializeApp({
  apiKey: "AIzaSyBgCJbmLQIqRj-fBiEAMbpobPga4Kfxx7E",
  authDomain: "firechat-a1f1c.firebaseapp.com",
  projectId: "firechat-a1f1c",
  storageBucket: "firechat-a1f1c.appspot.com",
  messagingSenderId: "181924392047",
  appId: "1:181924392047:web:7219c3976821d3b9cfb19a",
  measurementId: "G-V6V69QH14F"
})
const auth = firebase.auth();
const firestore = firebase.firestore();
// Sample user data
const users = [
  { id: 1, name: 'John Doe' },
  { id: 2, name: 'Jane Smith' },
  { id: 3, name: 'Bob Johnson' },
];

const UserList = () => {
  const [subscribedUsers, setSubscribedUsers] = useState([]);

  const handleSubscribe = (userId) => {
    
    console.log(`User with ID ${userId} subscribed`);

    // Update the subscribedUsers state
    setSubscribedUsers([...subscribedUsers, userId]);
  };

  return (
    <View style={styles.container}>
        <Text style={styles.titleCard}>WikStreams</Text>
      {users.map((user) => (
        <View key={user.id} style={styles.userCard}>
          <Text>{user.name}</Text>
          <TouchableOpacity
            style={styles.subscribeButton}
            onPress={() => handleSubscribe(user.id)}
          >
            <Text style={styles.subscribeButtonText}>Subscribe</Text>
          </TouchableOpacity>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  titleCard : {
    fontSize: 50,
    color: '#FFFFFF',
    padding: 16,
  },
  container: {
    flex: 1,
    padding: 16,
  },
  userCard: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 16,
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 100,
  },
  subscribeButton: {
    padding: 8,
    backgroundColor: '#007AFF',
    borderRadius: 100,
  },
  subscribeButtonText: {
    color: '#FFFFFF',
  },
});

export default UserList;
