import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LeftButton from "../svg/LeftButton";
import BackButton from "../svg/BackButton";

const Header = () => {
  return (
    <View>
      <View style={{ flexDirection: "row", marginTop: 52 }}>
        <View
          style={{
            width: "20%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <BackButton />
        </View>
        <View
          style={{
            width: "60%",

            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 20, fontWeight: "500", lineHeight: 20.5 }}>
            Administración
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
