import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";

const StartGameScreen = () => {
  return (
    <View>
      <Text h4>Start a New Game</Text>
      <Card>
        <Card.Title>Select a Number</Card.Title>
        <View style={styles.btnPrt}>
          <Button containerStyle={styles.btn} type="outline" title="Reset" />
          <Button containerStyle={styles.btn} title="Confirm" />
        </View>
      </Card>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  btnPrt: {
    flexDirection: "row",
    justifyContent: "space-around"
  },
  btn: {
    width: "30%"
  }
});
