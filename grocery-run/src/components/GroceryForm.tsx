// I've had to revamp a lot of stuff here to make it work with FlatList 

import { View, TextInput, Pressable, Text, StyleSheet, FlatList } from 'react-native';
import { useState } from 'react';

import { GroceryItem } from '@/lib/GroceryItem';
import PlaceCard from "@/components/PlaceCard"

import { Palette } from '@/constants/theme';

// type GroceryFormProps = {
//   name: string;
//   setName: (value: string) => void;
// };

export default function GroceryForm() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [category, setCategory] = useState("");

  const [groceryitem, setGroceryitem] = useState<GroceryItem[]>([]);

  const clearForm = () => {
    setName("");
    setQuantity("");
    setCategory("");
  }

  const addItem = () => {
    const newGroceryItem: GroceryItem = {
      id: Date.now().toString(),
      name: name.trim(),
      quantity: Number(quantity),
      category: category.trim()
    }

    setGroceryitem([
      ...groceryitem,
      newGroceryItem,
    ])

    clearForm();
  }
  return (
    <View style={styles.container}>

      <TextInput
        style={styles.input}
        placeholder="Name"
        placeholderTextColor="#303847"
        value={name}
        onChangeText={setName}
      />

      <TextInput
        style={styles.input}
        placeholder="Quantity"
        placeholderTextColor="#303847"
        value={quantity}
        keyboardType="numeric"
        onChangeText={setQuantity}
      />

      <TextInput
        style={styles.input}
        placeholder="Category"
        placeholderTextColor="#303847"
        value={category}
        onChangeText={setCategory}
      />

      <Pressable style={styles.button} onPress={addItem}>
        <Text style={styles.buttonText}>Add Grocery</Text>
      </Pressable>


      <FlatList
        style={{ backgroundColor: Palette.background }}
        data={groceryitem}
        keyExtractor={(groceryitem) => groceryitem.id}
        renderItem={({ item }: { item: GroceryItem }) => (
          <PlaceCard
            item={item}
          />
        )}
        ListEmptyComponent={<Text style={{ color: "blue" }}>No added groceries - Add one</Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 41,
    width: '100%',
    gap: 12,
    padding: 20,
    backgroundColor: '#202833',
  },

  input: {
    backgroundColor: '#C3C8CC',
    borderColor: '#3D5270',
    borderWidth: 2,
    borderRadius: 12,
    padding: 14,
    color: '#202833',
  },

  button: {
    backgroundColor: '#68a1ec',
    padding: 14,
    borderRadius: 12,
    alignItems: 'center',
  },

  buttonText: {
    color: '#202833',
    fontSize: 16,
    fontWeight: '700',
  },
});