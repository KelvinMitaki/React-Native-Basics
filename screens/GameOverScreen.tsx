import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text } from "react-native-elements";

interface Props {
  setGuessRounds: React.Dispatch<React.SetStateAction<number>>;
}

const GameOverScreen: React.FC<Props> = ({ setGuessRounds }) => {
  return (
    <View style={styles.view}>
      <Text h4>The game is over</Text>
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
