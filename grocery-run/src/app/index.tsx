//wassup so i deleted the whole stuff here and just put the import for scrollview
// just add wtvr is need, delete this whole comment after ty <3 -drew

import Header from "@/components/Header";
import GroceryItem from "@/components/PlaceCard";
import { ScrollView } from "react-native";

import { useState } from "react";

const testItem = {
  id: "1",
  name: "Porc",
  quantity: 1,
  category: "Meat",
  notes: "saample grocery item.",
  isBought: false,
};

export default function Index() {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState<number | string>("");
  const [category, setCategory] = useState("");
  const [notes, setNotes] = useState("");
  const [isBought, setIsBought] = useState(false);

  type FormErrors = {
    name?: string;
    quantity?: string;
    category?: string;
    notes?: string;
    isBought?: string;
  };

  const [errors, setErrors] = useState<FormErrors>({});

  function validate() {
    const next: FormErrors = {};

    if (!name.trim()) next.name = "Name is required.";

    const qtyString = String(quantity).trim();
    const parsedQty = Number(qtyString);

    if (qtyString === "") {
      next.quantity = "Quantity cannot be left blank.";
    } else if (isNaN(parsedQty) || parsedQty <= 0) {
      next.quantity = "Quantity must be a number greater than 0.";
    }

    const allowed = [
      "produce",
      "meat & seafood",
      "dairy",
      "pasta & grains",
      "baking",
      "oil & condiments",
      "frozen",
      "household supplies",
      "other",
    ];
    if (!allowed.includes(category.trim().toLowerCase())) {
      next.category = `Category must be one of: ${allowed.join(", ")}.`;
    }
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  return (
    <ScrollView>
      <Header />

      {/* <TextInput value={name} onChangeText={setName} placeholder="Name" />

      {
        errors.name && (
          <Text style={{ color: "red" }}>{errors.name}</Text>
        )
      }

      <TextInput value={quantity} onChangeText={setQuantity} placeholder="Quanity" />

      {
        errors.quantity && (
          <Text style={{ color: "red" }}>{errors.quantity}</Text>
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
