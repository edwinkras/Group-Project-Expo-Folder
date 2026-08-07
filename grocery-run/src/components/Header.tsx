import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.text}>Grocery Run</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    paddingVertical:55,
    alignItems: "center"
  },

  text: {
    fontSize: 28,
    fontWeight: "700"
  }
})

