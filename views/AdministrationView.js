import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import LeftButton from "../svg/LeftButton";
import Header from "../components/Header";
import Semanal from "../components/Semanal";
import Menu from "../components/Menu";
import Balance from "../components/Balance";
import Buscador from "../components/Buscador";
import Gasto from "../components/Gasto";
import Venta from "../components/Venta";
import Buttons from "../components/Buttons";

const AdministrationView = () => {
  return (
    <View style={styles.container}>
      <Header />

      <View style={{ height: "90%", marginTop: 50 }}>
        <Semanal />

        <Menu />

        <Balance />

        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 16,
          }}
        >
          <Text style={{ fontSize: 16, fontWeight: "700", lineHeight: 16.48 }}>
            Historial de movimientos
          </Text>
        </View>

        <Buscador />

        <Gasto />

        <Venta />

        <Buttons />
      </View>
    </View>
  );
};

export default AdministrationView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    width: "95%",
    height: "80%",
  },
});
