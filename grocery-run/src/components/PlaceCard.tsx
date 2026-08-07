// To anyone who sees this code, stop.. if not just change what you think is right lol

import React, { useState } from 'react';
import { GroceryItem } from '@/lib/GroceryItem';
import {View,Text,Button,StyleSheet} from 'react-native';


type PlaceCardProps = {
   item: GroceryItem;
};

export default function PlaceCard({item}: PlaceCardProps) {

const [Bought, setBought] = React.useState(item.isBought || false);

    return (

    <View style = {styles.card}>
      <Text>{item.name}</Text>
      <Text>{item.quantity} in {item.category}</Text>
      <Text>{item.notes}</Text>
      <Text>{Bought ? 'Checked' : 'Not checked'}</Text>

      <Button title="Mark as checked" onPress={() => setBought(true)} />
    </View>
  );
}

//this is temporary i just needed lower it
const styles = StyleSheet.create({
    card: {
        backgroundColor: '#afa7a7',
        padding: 12,
        borderRadius: 20,
        marginVertical: 60,
        marginHorizontal: 12,
    }
})




