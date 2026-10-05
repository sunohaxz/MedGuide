import { router } from "expo-router";
import { useState } from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const displayName = name.trim() || "friend";

  return (
    <ScrollView>
      <View style={styles.box}>
        <Text>MedGuide</Text>
        <Text>Your simple medicine guide</Text>
      </View>

      <View style={styles.box}>
        <Text>Welcome to MedGuide</Text>
        <Text>What should we call you?</Text>
        <TextInput
          onChangeText={setName}
          placeholder="Your name"
          value={name}
          style={styles.box}
        />
        <Text>Hello, {displayName}!</Text>
      </View>

      <Button
        title="View Medicines"
        onPress={() => router.push("/medicines")}
      />

      <View style={styles.box}>
        <Text>What you can do</Text>

        <View style={styles.box}>
          <Text>Browse Medicines</Text>
          <Text>View basic information about common medicines.</Text>
        </View>

        <View style={styles.box}>
          <Text>Learn About Uses</Text>
          <Text>Explore common uses of medicines.</Text>
        </View>
      </View>

      <Text style={styles.box}>
        MedGuide provides general educational information and is not a
        substitute for professional medical advice.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  box: {
    borderColor: "#777",
    borderWidth: 1,
    padding: 12,
    marginVertical: 6,
  },
});
