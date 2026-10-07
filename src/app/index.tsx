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

import { Colors } from "@/constants/theme";

export default function HomeScreen() {
  const [name, setName] = useState("");
  const displayName = name.trim() || "friend";

  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <View style={styles.header}>
        <Text style={styles.title}>MedGuide</Text>
        <Text style={styles.description}>Your simple medicine guide</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Welcome to MedGuide</Text>
        <Text style={styles.label}>What should we call you?</Text>
        <TextInput
          onChangeText={setName}
          placeholder="Your name"
          value={name}
          style={styles.input}
        />
        <Text style={styles.welcome}>Hello, {displayName}!</Text>
      </View>

      <View style={styles.buttonWrap}>
        <Button
          title="View Medicines"
          onPress={() => router.push("/medicines")}
        />
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>What you can do</Text>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Browse Medicines</Text>
          <Text style={styles.featureText}>
            View basic information about common medicines.
          </Text>
        </View>

        <View style={styles.feature}>
          <Text style={styles.featureTitle}>Learn About Uses</Text>
          <Text style={styles.featureText}>
            Explore common uses of medicines.
          </Text>
        </View>
      </View>

      <Text style={styles.note}>
        MedGuide provides general educational information and is not a
        substitute for professional medical advice.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.light.background,
  },
  content: {
    flexGrow: 1,
    paddingHorizontal: 24,
    paddingTop: 24,
    paddingBottom: 32,
    gap: 16,
  },
  header: {
    alignItems: "center",
    marginBottom: 8,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: Colors.light.text,
  },
  description: {
    fontSize: 16,
    color: Colors.light.textSecondary,
  },
  card: {
    padding: 18,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: Colors.light.border,
    backgroundColor: Colors.light.backgroundElement,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.04,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.light.text,
    marginBottom: 4,
  },
  label: {
    fontSize: 16,
    color: Colors.light.text,
  },
  input: {
    borderColor: Colors.light.border,
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 10,
    backgroundColor: Colors.light.background,
    color: Colors.light.text,
    fontSize: 16,
  },
  welcome: {
    fontSize: 18,
    color: Colors.light.text,
    fontWeight: "600",
  },
  buttonWrap: {
    borderRadius: 14,
    overflow: "hidden",
  },
  section: {
    padding: 16,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.border,
    backgroundColor: Colors.light.backgroundElement,
    gap: 12,
    shadowColor: "#000",
    shadowOpacity: 0.03,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 1,
  },
  feature: {
    padding: 12,
    borderRadius: 10,
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    gap: 4,
  },
  featureTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: Colors.light.text,
  },
  featureText: {
    fontSize: 14,
    lineHeight: 20,
    color: Colors.light.textSecondary,
  },
  note: {
    fontSize: 13,
    lineHeight: 18,
    padding: 12,
    borderLeftWidth: 3,
    borderLeftColor: Colors.light.accent,
    color: Colors.light.textSecondary,
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: 10,
  },
});
