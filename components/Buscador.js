import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import Lupita from "../svg/Lupita";
import Filter from "../svg/Filter";

const Buscador = () => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View style={styles.searchContainer}>
          <View style={{ marginLeft: 8 }}>
            <TextInput placeholder="Buscar por concepto" />
          </View>
          <View style={{ marginRight: 8 }}>
            <Lupita />
          </View>
        </View>
        <Filter />
      </View>
    </View>
  );
};

export default Buscador;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 18,
  },
  subContainer: {
    backgroundColor: "#F5F5F5",
    width: 343,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchContainer: {
    width: 310,
    height: "100%",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#E8E0F1",
  },
});
