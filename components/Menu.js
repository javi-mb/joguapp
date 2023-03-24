import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Menu = () => {
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
          borderColor: "#D1C6DE",
          borderWidth: 1,
          width: 343,
          height: 50,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 70,
            height: 42,
            backgroundColor: "#00BBB4",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 8,
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "rgba(250, 247, 255, 0.87)",
            }}
          >
            Todos
          </Text>
        </View>

        <View
          style={{
            width: 70,
            height: 42,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "rgba(165,163,168,0.87)",
            }}
          >
            Ventas
          </Text>
        </View>

        <View
          style={{
            width: 70,
            height: 42,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "rgba(165,163,168,0.87)",
            }}
          >
            Gastos
          </Text>
        </View>

        <View
          style={{
            width: 70,
            height: 42,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontWeight: "400",
              fontSize: 16,
              color: "rgba(165,163,168,0.87)",
            }}
          >
            Credito
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Menu;

const styles = StyleSheet.create({});
