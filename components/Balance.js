import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ArrowTwo from "../svg/ArrowTwo";
import ArrowOne from "../svg/ArrowOne";
import Balansa from "../svg/Balansa";
import Plus from "../svg/Plus";
import ArrowPurple from "../svg/ArrowPurple";
const Balance = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 30,
      }}
    >
      <View
        style={{
          backgroundColor: "#FFFFFF",
          borderWidth: 1,
          borderColor: "#D1C6DE",
          width: 343,
          height: 200,
          borderRadius: 10,
        }}
      >
        <View
          style={{
            height: 78,
            flexDirection: "row",

            borderBottomColor: "#D1C6DE",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: "#D1C6DE",
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "700" }}>1.750.345</Text>
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
                    fontSize: 14,
                    fontWeight: "400",
                  }}
                >
                  Ventas
                </Text>
                <ArrowOne />
              </View>
            </View>
          </View>

          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: "#D1C6DE",
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={{ justifyContent: "center", alignItems: "center" }}>
              <Text style={{ fontSize: 14, fontWeight: "700" }}>0</Text>
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
                    fontSize: 14,
                    fontWeight: "400",
                  }}
                >
                  Gastos
                </Text>
                <ArrowTwo />
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            height: 78,
            flexDirection: "row",

            borderBottomColor: "#D1C6DE",
            borderBottomWidth: 1,
          }}
        >
          <View
            style={{
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "row",
                gap: 9,
              }}
            >
              <Balansa />
              <Text
                style={{
                  fontWeight: "400",
                  fontSize: 14,
                  color: "rgba(0, 0, 0, 0.87)",
                }}
              >
                Balance
              </Text>
            </View>
          </View>

          <View
            style={{
              borderRightWidth: 1,
              borderRightColor: "#D1C6DE",
              width: "50%",
              justifyContent: "center",
              alignItems: "center",
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
            alignItems: "center",
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
            <View>
              <ArrowPurple />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({});
