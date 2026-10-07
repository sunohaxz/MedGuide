import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { fetch, type Medicine } from "../data/mock-api";

const categoryOptions = [
  "All",
  "Pain Relief",
  "Allergy",
  "Digestive",
  "Antibiotic",
  "Respiratory",
  "Hydration",
];

export default function MedicinesScreen() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMedicines() {
      try {
        const response = await fetch("/api/medicines");
        if (!response.ok) {
          throw new Error("Unable to load medicines");
        }

        const data = (await response.json()) as { medicines: Medicine[] };
        setMedicines(data.medicines);
      } catch {
        setError("Unable to load medicines. Please try again.");
      }
    }

    loadMedicines();
  }, []);

  const filteredMedicines = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return medicines.filter((medicine) => {
      const matchesCategory =
        selectedCategory === "All" || medicine.category === selectedCategory;
      const matchesSearch =
        searchTerm.length === 0 ||
        medicine.name.toLowerCase().includes(searchTerm) ||
        medicine.purpose.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [medicines, search, selectedCategory]);

  return (
    <ScrollView>
      <Text>Medicines</Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search medicines"
        style={styles.box}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryRow}>
          {categoryOptions.map((category) => {
            return (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={styles.box}
              >
                <Text>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {error ? <Text>{error}</Text> : null}

      {filteredMedicines.length === 0 ? (
        <Text>No medicines match your search.</Text>
      ) : (
        filteredMedicines.map((medicine) => (
          <TouchableOpacity
            key={medicine.id}
            onPress={() =>
              router.push({
                pathname: "/details",
                params: { id: String(medicine.id) },
              })
            }
            style={styles.box}
          >
            <Text>{medicine.name}</Text>
            <Text>{medicine.category}</Text>
            <Text numberOfLines={2}>{medicine.purpose}</Text>
          </TouchableOpacity>
        ))
      )}
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
  categoryRow: {
    flexDirection: "row",
  },
});
import { router } from "expo-router";
import { useEffect, useMemo, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { fetch, type Medicine } from "../data/mock-api";

const categoryOptions = [
  "All",
  "Pain Relief",
  "Allergy",
  "Digestive",
  "Antibiotic",
  "Respiratory",
  "Hydration",
];

export default function MedicinesScreen() {
  const [medicines, setMedicines] = useState<Medicine[]>([]);
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadMedicines() {
      try {
        const response = await fetch("/api/medicines");
        if (!response.ok) {
          throw new Error("Unable to load medicines");
        }

        const data = (await response.json()) as { medicines: Medicine[] };
        setMedicines(data.medicines);
      } catch {
        setError("Unable to load medicines. Please try again.");
      }
    }

    loadMedicines();
  }, []);

  const filteredMedicines = useMemo(() => {
    const searchTerm = search.trim().toLowerCase();

    return medicines.filter((medicine) => {
      const matchesCategory =
        selectedCategory === "All" || medicine.category === selectedCategory;
      const matchesSearch =
        searchTerm.length === 0 ||
        medicine.name.toLowerCase().includes(searchTerm) ||
        medicine.purpose.toLowerCase().includes(searchTerm);

      return matchesCategory && matchesSearch;
    });
  }, [medicines, search, selectedCategory]);

  return (
    <ScrollView>
      <Text>Medicines</Text>

      <TextInput
        value={search}
        onChangeText={setSearch}
        placeholder="Search medicines"
        style={styles.box}
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View style={styles.categoryRow}>
          {categoryOptions.map((category) => {
            return (
              <TouchableOpacity
                key={category}
                onPress={() => setSelectedCategory(category)}
                style={styles.box}
              >
                <Text>{category}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>

      {error ? <Text>{error}</Text> : null}

      {filteredMedicines.length === 0 ? (
        <Text>No medicines match your search.</Text>
      ) : (
        filteredMedicines.map((medicine) => (
          <TouchableOpacity
            key={medicine.id}
            onPress={() =>
              router.push({
                pathname: "/details",
                params: { id: String(medicine.id) },
              })
            }
            style={styles.box}
          >
            <Text>{medicine.name}</Text>
            <Text>{medicine.category}</Text>
            <Text numberOfLines={2}>{medicine.purpose}</Text>
          </TouchableOpacity>
        ))
      )}
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
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 28,
    gap: 12,
  },
  header: {
    alignItems: "center",
    marginBottom: 4,
  },
  iconWrap: {
    width: 52,
    height: 52,
    borderRadius: 18,
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.border,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 8,
  },
  icon: {
    fontSize: 26,
  },
  title: {
    fontSize: 30,
    fontWeight: "700",
    color: Colors.light.accent,
  },
  subtitle: {
    marginTop: 4,
    fontSize: 14,
    color: Colors.light.textSecondary,
    textAlign: "center",
  },
  searchBox: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    backgroundColor: Colors.light.backgroundElement,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: Colors.light.border,
    paddingHorizontal: 12,
    paddingVertical: 2,
  },
  searchIcon: {
    fontSize: 18,
    color: Colors.light.textSecondary,
  },
  input: {
    flex: 1,
    color: Colors.light.text,
    fontSize: 15,
    paddingVertical: 10,
    outlineWidth: 0,
  },
  clearButton: {
    width: 22,
    height: 22,
    borderRadius: 11,
    backgroundColor: Colors.light.backgroundSelected,
    alignItems: "center",
    justifyContent: "center",
  },
  clearText: {
    fontSize: 12,
    color: Colors.light.text,
  },
  categoryRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 999,
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.border,
  },
  categoryButtonSelected: {
    backgroundColor: Colors.light.accent,
    borderColor: Colors.light.accent,
  },
  categoryButtonText: {
    fontSize: 12,
    color: Colors.light.textSecondary,
    fontWeight: "600",
  },
  categoryButtonTextSelected: {
    color: "#FFFFFF",
  },
  sectionHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  heading: {
    fontSize: 20,
    fontWeight: "700",
    color: Colors.light.text,
  },
  countPill: {
    minWidth: 32,
    height: 28,
    borderRadius: 14,
    paddingHorizontal: 8,
    backgroundColor: Colors.light.backgroundElement,
    alignItems: "center",
    justifyContent: "center",
  },
  countText: {
    fontSize: 12,
    fontWeight: "700",
    color: Colors.light.text,
  },
  error: {
    color: "#C11B1B",
    fontSize: 14,
  },
  list: {
    gap: 12,
  },
  medicineCard: {
    backgroundColor: Colors.light.backgroundElement,
    borderWidth: 1,
    borderColor: Colors.light.border,
    borderRadius: 16,
    padding: 14,
    gap: 12,
  },
  cardTop: {
    flexDirection: "row",
    alignItems: "flex-start",
    gap: 12,
  },
  medicineBadge: {
    width: 42,
    height: 42,
    borderRadius: 12,
    backgroundColor: Colors.light.background,
    borderWidth: 1,
    borderColor: Colors.light.border,
    alignItems: "center",
    justifyContent: "center",
  },
  medicineBadgeText: {
    fontSize: 18,
    fontWeight: "700",
    color: Colors.light.accent,
  },
  medicineInfo: {
    flex: 1,
    gap: 3,
  },
  medicineTag: {
    color: Colors.light.accent,
    fontSize: 11,
    fontWeight: "700",
    textTransform: "uppercase",
    letterSpacing: 0.4,
  },
  medicineName: {
    color: Colors.light.text,
    fontSize: 20,
    fontWeight: "700",
    flexShrink: 1,
  },
  buttonWrap: {
    backgroundColor: Colors.light.accent,
    borderRadius: 10,
    paddingVertical: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  buttonText: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },
  emptyBox: {
    borderRadius: 16,
    borderWidth: 1,
    borderColor: Colors.light.border,
    backgroundColor: Colors.light.backgroundElement,
    padding: 20,
  },
  empty: {
    color: Colors.light.textSecondary,
    textAlign: "center",
    fontSize: 15,
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
