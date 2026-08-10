//wassup so i deleted the whole stuff here and just put the import for scrollview
// just add wtvr is need, delete this whole comment after ty <3 -drew

import Header from "@/components/Header";
import GroceryItem from "@/components/PlaceCard";
import GroceryForm from "@/components/GroceryForm";
import { ScrollView } from "react-native";
import { Palette } from "@/constants/theme"; // added - Tracy

import { View } from "react-native";


import { useState } from "react";

const testItem = {
  id: "1",
  name: "Porc",
  quantity: 1,
  category: "Meat",
  notes: "sample grocery item.",
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
  <View style={{ flex: 1, backgroundColor: Palette.background }}> 

    <GroceryForm />

  </View>
);
}
