import { View, TextInput, Pressable, Text, StyleSheet } from 'react-native';

type GroceryFormProps = {
  name: string;
  setName: (value: string) => void;
};

export default function GroceryForm({ name, setName }: GroceryFormProps) {
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
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Category"
        placeholderTextColor="#303847"
      />

      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Add Grocery</Text>
      </Pressable>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
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