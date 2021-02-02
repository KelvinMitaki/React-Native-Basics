import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <View style={styles.container}>
        <Input placeholder="Course Goal" containerStyle={{ width: "70%" }} />
        <Button title="ADD" containerStyle={{ width: "20%" }} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50
  }
});
