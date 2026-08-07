//wassup so i deleted the whole stuff here and just put the import for scrollview
// just add wtvr is need, delete this whole comment after ty <3 -drew



import Header from "@/components/Header";
import { ScrollView, Text, View, StyleSheet } from "react-native";
import GroceryItem from "@/components/PlaceCard";

const testItem = {
  id: "1",
  name: "Porc",
  quantity: 1,
  category: "Meat",
  notes: "saample grocery item.",
  isBought: false,
}

export default function Index() {

  return (
    <ScrollView>
      <Header/>
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