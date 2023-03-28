import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Gasto from "./Gasto";

const Cards = () => {
  const data = [
    {
      name: "Gasto",
      product: "Alquiler",
      number: "6.232.500",
      date: "13 de mar - 4:38 pm",
    },
    {
      name: "Venta",
      product: "Campera de Jeans",
      number: "232.500",
      date: "13 de mar - 4:38 pm",
    },
  ];
  return (
    <View>
      {data.map((e, i) => (
        <Gasto
          key={i}
          name={e.name}
          product={e.product}
          number={e.number}
          date={e.date}
        />
      ))}
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({});
