import { SafeAreaView, StyleSheet, Text, View } from "react-native";

import AdministrationView from "./views/AdministrationView";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <AdministrationView />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
  },
});
