import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import { Button, Card, Input, Text } from "react-native-elements";

const StartGameScreen = () => {
  const [inp, setInp] = useState<string>("");
  return (
    <View>
      <Text h4 h4Style={{ alignSelf: "center" }}>
        Start a New Game
      </Text>
      <Card>
        <Card.Title>Select a Number</Card.Title>
        <Input
          keyboardType="numeric"
          maxLength={2}
          onChangeText={t => {
            if (/^\d+$/.test(t) || t === "") {
              setInp(t);
            }
          }}
          value={inp}
        />
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
