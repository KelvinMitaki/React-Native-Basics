import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Card } from "react-native-elements";

interface Props {
  userChoice: number;
}

const genRandNum = (min: number, max: number, exlude: number): number => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const random = Math.floor(Math.random() * (max - min)) + min;
  if (random === exlude) {
    return genRandNum(min, max, exlude);
  } else {
    return random;
  }
};

const GameScreen: React.FC<Props> = ({ userChoice }) => {
  const [currGuess, setCurrGuess] = useState<number>(
    genRandNum(1, 100, userChoice)
  );

  return (
    <View>
      <Text>Opponent's Guess</Text>
      <Text style={styles.num}>{currGuess}</Text>
      <Card>
        <View style={styles.btn}>
          <Button title="LOWER" onPress={() => {}} />
          <Button title="GREATER" onPress={() => {}} />
        </View>
      </Card>
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  num: {
    borderWidth: 1,
    borderColor: "#e905e9",
    borderRadius: 4,
    alignSelf: "center",
    padding: 4,
    fontSize: 30,
    color: "#e905e9",
    marginBottom: 15
  },
  btn: {
    flexDirection: "row"
  }
});
