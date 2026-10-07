import { ScrollView, StyleSheet, Text } from "react-native";
import { Colors } from "@/constants/theme";

export default function AboutScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={styles.content}>
      <Text style={styles.title}>About MedGuide</Text>
      <Text style={styles.text}>
        MedGuide is a simple app for learning basic information about common
        medicines. It provides general educational information and is not a
        substitute for professional medical advice.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.light.background },
  content: { padding: 24, gap: 12 },
  title: { fontSize: 24, fontWeight: "bold", color: Colors.light.accent },
  text: { fontSize: 16, lineHeight: 24, color: Colors.light.text },
});