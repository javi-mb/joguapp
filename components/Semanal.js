import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowTwo from "../svg/ArrowTwo";
import Calendario from "../svg/Calendario";
import LeftButton from "../svg/LeftButton";
import RightButton from "../svg/RightButton";

const Semanal = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 7,
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
          width: 110,
          height: 44,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 6,
        }}
      >
        <Text style={{ fontSize: 16, fontWeight: 500 }}>Semanal</Text>
        <ArrowTwo />
      </View>
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderColor: "#D1C6DE",
          borderWidth: 1,
          width: 226,
          height: 44,
          borderRadius: 10,
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "20%",
          }}
        >
          <Calendario />
        </View>

        <View
          style={{
            flexDirection: "row",
            width: "70%",
            gap: 6,
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <LeftButton />
          <Text style={{ fontSize: 16, fontWeight: "500" }}>13-22 Junio</Text>
          <RightButton />
        </View>
      </View>
    </View>
  );
};

export default Semanal;

const styles = StyleSheet.create({});
