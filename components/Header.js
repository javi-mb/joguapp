import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LeftButton from "../svg/LeftButton";
import BackButton from "../svg/BackButton";

const Header = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          gap: 70,
          alignItems: "stretch",
          width: "80%",
        }}
      >
        <View>
          <View
            style={{
              width: 32,
              height: 32,
              borderRadius: 50,
              backgroundColor: "#D1C6DE",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <BackButton />
          </View>
        </View>
        <View
          style={{
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

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
});
