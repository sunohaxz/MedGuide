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
