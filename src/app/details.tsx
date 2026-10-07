import { useLocalSearchParams } from "expo-router";
import { ScrollView, StyleSheet, Text, View } from "react-native";

import { Colors } from "@/constants/theme";
import { medicineData } from "../data/mock-api";

export default function MedicineDetailsScreen() {
  const { id } = useLocalSearchParams<{ id?: string }>();
  const medicineId = Array.isArray(id) ? id[0] : id;
  const medicine = medicineData.medicines.find(
    (item) => item.id === medicineId,
  );

  if (!medicine) {
    return (
      <View style={styles.notFoundBox}>
        <Text style={styles.notFoundText}>Medicine not found.</Text>
      </View>
    );
  }

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.content}
    >
      <View style={styles.header}>
        <View style={styles.badge}>
          <Text style={styles.badgeText}>{medicine.name.charAt(0)}</Text>
        </View>
        <Text style={styles.tag}>{medicine.category}</Text>
        <Text style={styles.name}>{medicine.name}</Text>
        <Text style={styles.body}>{medicine.purpose}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>About this medicine</Text>
        <Text style={styles.body}>{medicine.description}</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Common uses</Text>
        <View style={styles.commonUsesList}>
          {medicine.commonUses.map((use) => (
            <View key={use} style={styles.commonUseRow}>
              <View style={styles.commonUseBullet} />
              <Text style={styles.body}>{use}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.card}>
        <Text style={styles.sectionTitle}>Important information</Text>
        <Text style={styles.body}>{medicine.importantInfo}</Text>
      </View>

      <View style={styles.warningCard}>
        <Text style={styles.warningTitle}>Important safety information</Text>
        <Text style={styles.warningText}>{medicine.warning}</Text>
      </View>

      <Text style={styles.disclaimer}>
        This information is for general educational purposes and is not a
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
    padding: 20,
    gap: 16,
  },
  header: {
    alignItems: "center",
    gap: 6,
  },
  badge: {
    width: 62,
    height: 62,
    borderRadius: 18,
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.border,
    alignItems: "center",
    justifyContent: "center",
  },
  badgeText: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.light.accent,
  },
  tag: {
    color: Colors.light.accent,
    fontSize: 12,
    fontWeight: "700",
    letterSpacing: 0.5,
    textTransform: "uppercase",
  },
  name: {
    fontSize: 28,
    fontWeight: "700",
    color: Colors.light.text,
    textAlign: "center",
  },
  card: {
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: Colors.light.text,
  },
  commonUsesList: {
    gap: 6,
  },
  commonUseRow: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 8,
  },
  commonUseBullet: {
    width: 7,
    height: 7,
    borderRadius: 4,
    backgroundColor: Colors.light.accent,
    marginTop: 7,
  },
  body: {
    fontSize: 15,
    color: Colors.light.textSecondary,
    lineHeight: 22,
  },
  warningCard: {
    backgroundColor: "#FFF7ED",
    borderWidth: 1,
    borderColor: "#FDBA74",
    borderRadius: 16,
    padding: 16,
    gap: 8,
  },
  warningTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#9A4F00",
  },
  warningText: {
    fontSize: 15,
    color: "#7C2D12",
    lineHeight: 22,
  },
  notFoundBox: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
    backgroundColor: Colors.light.background,
  },
  notFoundText: {
    fontSize: 18,
    color: Colors.light.text,
    fontWeight: "600",
  },
  disclaimer: {
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
