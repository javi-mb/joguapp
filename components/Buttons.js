import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonGreen from "../svg/ButtonGreen";
import ButtonRed from "../svg/ButtonRed";

const Buttons = () => {
  const data = [
    { icon: ButtonGreen, title: "Nueva venta" },
    { icon: ButtonRed, title: "Nuevo gasto" },
  ];
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View style={styles.container}>
        {data.map((e, i) => (
          <View
            key={i}
            style={
              e.title === "Nueva venta"
                ? [styles.containerButton]
                : [styles.containerButton, { backgroundColor: "#E56055" }]
            }
          >
            <View style={styles.icon}>
              <e.icon />
            </View>
            <View style={{ width: 50 }}>
              <Text style={styles.text}>{e.title}</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({
  container: {
    width: 343,
    height: 60,
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
  },
  containerButton: {
    width: 152,
    height: 60,
    backgroundColor: "#79E05A",
    borderRadius: 25,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  icon: {
    backgroundColor: "#FFFFFF",
    borderRadius: 50,
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text: { fontWeight: "700", color: "#FFFFFF", fontSize: 16 },
});
