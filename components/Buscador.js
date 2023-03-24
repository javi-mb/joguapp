import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Lupita from "../svg/Lupita";
import Filter from "../svg/Filter";

const Buscador = () => {
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
          backgroundColor: "#F5F5F5",

          width: 343,
          height: 50,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View
          style={{
            width: 310,
            height: "100%",
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundColor: "#E8E0F1",
          }}
        >
          <View style={{ marginLeft: 8 }}>
            <Text style={{ color: "#707070" }}>Buscar por concepto</Text>
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

const styles = StyleSheet.create({});
