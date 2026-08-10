// To anyone who sees this code, stop.. if not just change what you think is right lol

import React, { useState } from 'react';
import { GroceryItem } from '@/lib/GroceryItem';
import {View,Text,Button,StyleSheet} from 'react-native';
import { Palette } from '@/constants/theme'; // added - Tracy


type PlaceCardProps = {
   item: GroceryItem;
};

export default function PlaceCard({item}: PlaceCardProps) {

const [Bought, setBought] = React.useState(item.isBought || false);

    return (

    <View style = {styles.card}>
      <Text style={styles.text}>{item.name}</Text>
      <Text style={styles.text}>{item.quantity} in {item.category}</Text>
      {/* <Text style={styles.textMuted}>{item.notes}</Text> */}
      <Text style={styles.textMuted}>{Bought ? 'Checked' : 'Not checked'}</Text>

      <Button color={Palette.accent} title="Mark as checked" onPress={() => setBought(true)} />
    </View>
  );
}

//this is temporary i just needed lower it
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#afa7a7',
        padding: 12,
        borderRadius: 20,
        marginVertical: 15,
        marginHorizontal: 12,
    },

    // added - Tracy
    text: {
        color: Palette.text,
    },
    textMuted: {
        color: Palette.textMuted,
    },
})




