import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Image, Text } from "react-native-elements";

interface Props {
  setGuessRounds: React.Dispatch<React.SetStateAction<number>>;
  finalNumber: number | null;
  guessRounds: number | null;
}

const GameOverScreen: React.FC<Props> = ({
  setGuessRounds,
  finalNumber,
  guessRounds
}) => {
  return (
    <View style={styles.view}>
      <Text h4>The game is over</Text>
      <Image
        source={require("../assets/success.png")}
        style={{ height: 200, width: 200 }}
      />
      <Text h4>
        Number of rounds: {guessRounds && guessRounds.toLocaleString()}
      </Text>
      <Text h4>Number was: {finalNumber && finalNumber.toLocaleString()}</Text>
      <Button
        title="Restart"
        containerStyle={{ width: "50%", marginTop: 20 }}
        onPress={() => setGuessRounds(0)}
      />
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  view: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
