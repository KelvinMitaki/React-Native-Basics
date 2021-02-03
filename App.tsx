import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";
import { Button, Header } from "react-native-elements";
// import Header from "./components/Header";

const App = () => {
  return (
    <SafeAreaView>
      {/* <Header /> */}
      <Header
        placement="left"
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
        rightComponent={{ icon: "home", color: "#fff" }}
        containerStyle={{ marginTop: 20 }}
      />
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({});
