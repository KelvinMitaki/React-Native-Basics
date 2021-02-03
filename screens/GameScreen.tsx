import React, { useEffect, useRef, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";
import { Button, Card, Text } from "react-native-elements";

interface Props {
  setUserNumber: React.Dispatch<React.SetStateAction<number | null>>;
  setGuessRounds: React.Dispatch<React.SetStateAction<number>>;
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

const GameScreen: React.FC<Props> = ({
  userChoice,
  setUserNumber,
  setGuessRounds
}) => {
  const [currGuess, setCurrGuess] = useState<number>(
    genRandNum(1, 100, userChoice)
  );
  const currentLow = useRef<number>(1);
  const currentHigh = useRef<number>(100);
  useEffect(() => {
    setGuessRounds(g => g + 1);
    if (currGuess === userChoice) {
      return setUserNumber(null);
    }
  }, [userChoice, currGuess]);
  const guessNextHandler = (value: "lower" | "greater") => {
    if (
      (value === "lower" && currGuess < userChoice) ||
      (value === "greater" && currGuess > userChoice)
    ) {
      return Alert.alert("Don't Lie", "You know this is wrong", [
        { text: "Try Again", style: "cancel" }
      ]);
    }

    if (value === "lower") {
      currentHigh.current = currGuess;
    } else {
      currentLow.current = currGuess;
    }
    const nextGuess = genRandNum(
      currentLow.current,
      currentHigh.current,
      currGuess
    );
    setCurrGuess(nextGuess);
  };
  return (
    <View>
      <Card>
        <Text h4 h4Style={{ alignSelf: "center" }}>
          Opponent's Guess
        </Text>
        <Text style={styles.num}>{currGuess}</Text>
        <Card>
          <View style={styles.btn}>
            <Button
              containerStyle={{ width: "45%" }}
              title="LOWER"
              onPress={() => guessNextHandler("lower")}
              type="outline"
            />
            <Button
              containerStyle={{ width: "45%" }}
              title="GREATER"
              onPress={() => guessNextHandler("greater")}
            />
          </View>
        </Card>
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
    marginVertical: 15
  },
  btn: {
    flexDirection: "row",
    justifyContent: "space-around"
  }
});
