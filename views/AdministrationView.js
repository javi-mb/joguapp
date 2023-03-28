import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Header from "../components/Header";
import Semanal from "../components/Semanal";
import Menu from "../components/Menu";
import Balance from "../components/Balance";
import Buscador from "../components/Buscador";
import Buttons from "../components/Buttons";
import Cards from "../components/Cards";

const AdministrationView = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={styles.subContainer}>
        <Semanal />

        <Menu />

        <Balance />

        <View style={styles.textContainer}>
          <Text style={styles.text}>Historial de movimientos</Text>
        </View>

        <Buscador />

        <Cards />

        <Buttons />
      </View>
    </View>
  );
};

export default AdministrationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,

    width: "100%",
    height: "80%",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 52,
  },
  subContainer: {
    height: "90%",
    marginTop: 30,
    width: "100%",
    alignItems: "center",
  },
  textContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    marginBottom: 16,
    width: 340,
  },
  text: {
    fontSize: 16,
    fontWeight: "700",
    lineHeight: 16.48,
  },
});
