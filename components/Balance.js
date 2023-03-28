import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowTwo from "../svg/ArrowTwo";
import ArrowOne from "../svg/ArrowOne";
import Balansa from "../svg/Balansa";
import Plus from "../svg/Plus";
import ArrowPurple from "../svg/ArrowPurple";

const FirstBox = ({ number, name }) => (
  <View style={styles.firstContainerBox}>
    <View style={{ alignItems: "center" }}>
      <Text style={{ fontWeight: "700" }}>{number}</Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          gap: 5,
        }}
      >
        <Text
          style={{
            color: "rgba(0, 0, 0, 0.87)",
          }}
        >
          {name}
        </Text>
        <View style={{ marginTop: 3 }}>
          {name === "Ventas" ? <ArrowOne /> : <ArrowTwo />}
        </View>
      </View>
    </View>
  </View>
);

const Balance = () => {
  const data = [
    { number: "1.750.345", name: "Ventas", arrow: "ArrowOne" },
    { number: "0", name: "Gastos", arrow: "ArrowTwo" },
  ];
  return (
    <View
      style={{
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <View style={styles.container}>
        <View style={styles.firstContainer}>
          {data.map((e, i) => (
            <FirstBox key={i} name={e.name} number={e.number} />
          ))}
        </View>

        <View style={styles.secondContainer}>
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                gap: 9,
              }}
            >
              <Balansa />
              <Text
                style={{
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Balance
              </Text>
            </View>
          </View>

          <View
            style={{
              width: "50%",
              justifyContent: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: 10,
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "700",
                    color: "rgba(0, 0, 0, 0.87)",
                  }}
                >
                  1.750.453
                </Text>
                <Plus />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: "row",
            height: 40,
          }}
        >
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ textDecorationLine: "underline", color: "#A5A3A8" }}>
              Descargar resultado
            </Text>
          </View>

          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "row",
              gap: 10,
            }}
          >
            <View>
              <Text style={{ color: "#7300FF" }}>Ver Balance</Text>
            </View>
            <View style={{ marginTop: 3 }}>
              <ArrowPurple />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFFFFF",
    borderWidth: 1,
    borderColor: "#D1C6DE",
    width: 343,
    height: 200,
    borderRadius: 10,
  },
  firstContainer: {
    height: 78,
    flexDirection: "row",
    borderBottomColor: "#D1C6DE",
    borderBottomWidth: 1,
  },
  firstContainerBox: {
    borderRightWidth: 1,
    borderRightColor: "#D1C6DE",
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  secondContainer: {
    height: 78,
    flexDirection: "row",
    borderBottomColor: "#D1C6DE",
    borderBottomWidth: 1,
  },
});
