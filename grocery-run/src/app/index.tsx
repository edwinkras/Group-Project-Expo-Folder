//wassup so i deleted the whole stuff here and just put the import for scrollview
// just add wtvr is need, delete this whole comment after ty <3 -drew



import Header from "@/components/Header";
import { ScrollView, Text, TextInput } from "react-native";
import GroceryItem from "@/components/PlaceCard";

import { useState } from 'react';

const testItem = {
  id: "1",
  name: "Porc",
  quantity: 1,
  category: "Meat",
  notes: "saample grocery item.",
  isBought: false,
}

export default function Index() {

  const [name, setName] = useState("");
  const [quanity, setQuanity] = useState(0);
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [isBought, setIsBought] = useState(false);

  type FormErrors = {
    name?: string;
    quanity?: number;
    category?: string;
    notes?: string;
    isBought?: boolean;
  }

  const [errors, setErrors] = useState<FormErrors>({});

  return (
    <ScrollView>
      <Header/>

      {/* <TextInput value={name} onChangeText={setName} placeholder="Name" />

      {
        errors.name && (
          <Text style={{ color: "red" }}>{errors.name}</Text>
        )
      }

      <TextInput value={quanity} onChangeText={setQuanity} placeholder="Quanity" />

      {
        errors.quanity && (
          <Text style={{ color: "red" }}>{errors.quanity}</Text>
        )
      }

      <TextInput value={category} onChangeText={setCategory} placeholder="Category" />

      {
        errors.category && (
          <Text style={{ color: "red" }}>{errors.category}</Text>
        )
      }

      <TextInput value={notes} onChangeText={setNotes} placeholder="Notes" />

      {
        errors.notes && (
          <Text style={{ color: "red" }}>{errors.notes}</Text>
        )
      }

      <TextInput value={isBought} onChangeText={setIsBought} placeholder="Is Bought" />

      {
        errors.isBought && (
          <Text style={{ color: "red" }}>{errors.isBought}</Text>
        )
      } */}

      <GroceryItem item={testItem} />
      <GroceryItem item={testItem} />
      <GroceryItem item={testItem} />
      <GroceryItem item={testItem} />
      <GroceryItem item={testItem} />
      <GroceryItem item={testItem} />
      <GroceryItem item={testItem} />
    </ScrollView>
  );
}