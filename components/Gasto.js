import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Gasto = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 18,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          width: 343,
          height: 80,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View style={{ width: "50%", paddingLeft: 17.4, paddingTop: 14 }}>
            <Text style={{ color: "#EA183F", fontWeight: "500" }}>Gasto</Text>
          </View>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              paddingTop: 16,
            }}
          >
            <Text style={{ color: "#FC4D4D", fontWeight: "700", fontSize: 18 }}>
              - Gs. 6.232.500
            </Text>
          </View>
        </View>

        <View
          style={{
            paddingLeft: 17.4,
          }}
        >
          <Text>Alquiler</Text>
        </View>

        <View>
          <View style={{ flexDirection: "row", gap: 10, paddingLeft: 17.4 }}>
            <Text style={{ fontWeight: "700", color: "#A5A3A8", fontSize: 12 }}>
              Efectivo
            </Text>
            <Text style={{ color: "#A5A3A8", fontSize: 12 }}>|</Text>
            <Text style={{ color: "#A5A3A8", fontSize: 12 }}>
              13 de mar - 4:38pm
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Gasto;

const styles = StyleSheet.create({});
