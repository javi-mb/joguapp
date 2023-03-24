import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ButtonGreen from "../svg/ButtonGreen";

const Buttons = () => {
  return (
    <View
      style={{ width: "100%", justifyContent: "center", alignItems: "center" }}
    >
      <View
        style={{
          width: 343,
          height: 60,
          justifyContent: "space-around",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            width: 152,
            height: 60,
            backgroundColor: "#79E05A",
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 10,
          }}
        >
          <ButtonGreen />
          <View>
            <Text style={{ fontWeight: "700", color: "#FFFFFF", fontSize: 16 }}>
              Nueva
            </Text>
            <Text style={{ fontWeight: "700", color: "#FFFFFF", fontSize: 16 }}>
              venta
            </Text>
          </View>
        </View>
        <View
          style={{
            width: 152,
            height: 60,
            backgroundColor: "#E56055",
            borderRadius: 25,
            flexDirection: "row",
            justifyContent: "space-evenly",
            alignItems: "center",
            gap: 10,
          }}
        >
          <ButtonGreen />
          <View>
            <Text style={{ fontWeight: "700", color: "#FFFFFF", fontSize: 16 }}>
              Nuevo
            </Text>
            <Text style={{ fontWeight: "700", color: "#FFFFFF", fontSize: 16 }}>
              gasto
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Buttons;

const styles = StyleSheet.create({});
