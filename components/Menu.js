import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Menu = () => {
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 18,
      }}
    >
      <View style={styles.container}>
        <View style={styles.itemSelect}>
          <Text style={styles.textSelect}>Todos</Text>
        </View>

        {["Ventas", "Gastos", "Credito"].map((e, i) => (
          <View key={i} style={styles.item}>
            <Text style={styles.textItem}>{e}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderColor: "#D1C6DE",
    borderWidth: 1,
    width: 343,
    height: 50,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  itemSelect: {
    width: 70,
    height: 42,
    backgroundColor: "#00BBB4",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 8,
    marginLeft: 3,
  },
  item: {
    width: 70,
    height: 42,
    justifyContent: "center",
    alignItems: "center",
  },
  textSelect: {
    fontSize: 16,
    color: "rgba(250, 247, 255, 0.87)",
  },
  textItem: {
    fontWeight: "400",
    fontSize: 16,
    color: "rgba(165,163,168,0.87)",
  },
});
