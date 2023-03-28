import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Gasto = ({ name, product, number, date }) => {
  return (
    <View style={styles.container}>
      <View style={styles.subContainer}>
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <View
            style={{
              width: "50%",
              paddingLeft: 17.4,
              paddingTop: 14,
            }}
          >
            <Text
              style={
                name === "Gasto"
                  ? { color: "#EA183F", fontWeight: "500" }
                  : { color: "#4CD964", fontWeight: "500" }
              }
            >
              {name}
            </Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 10,
            }}
          >
            <Text
              style={
                name === "Gasto"
                  ? { color: "#FC4D4D", fontWeight: "700", fontSize: 18 }
                  : { color: "#4CD964", fontWeight: "700", fontSize: 18 }
              }
            >
              {name === "Gasto" ? `-` : null} Gs. {number}
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingLeft: 17.4,
          }}
        >
          <Text>{product}</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", gap: 10, paddingLeft: 17.4 }}>
            <Text style={[styles.textDate, { fontWeight: "700" }]}>
              Efectivo
            </Text>
            <Text style={styles.textDate}>|</Text>
            <Text style={styles.textDate}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Gasto;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 18,
  },
  subContainer: {
    backgroundColor: "#FFFFFF",
    width: 343,
    height: 80,
    borderRadius: 10,
  },
  textDate: {
    color: "#A5A3A8",
    fontSize: 12,
  },
});
