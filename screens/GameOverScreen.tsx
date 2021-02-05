import React, { useEffect, useState } from "react";
import { StyleSheet, View, Dimensions, ScrollView } from "react-native";
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
  const [dime, setDime] = useState<"width" | "height">("width");
  useEffect(() => {
    const window = Dimensions.get("window");
    if (window.height > window.width && dime !== "width") {
      setDime("width");
    } else {
      dime !== "height" && setDime("height");
    }
    Dimensions.addEventListener("change", () => {
      if (window.height > window.width) {
        setDime("width");
      } else {
        setDime("height");
      }
    });
    return () => {
      Dimensions.removeEventListener("change", () => {
        const window = Dimensions.get("window");
        if (window.height > window.width) {
          setDime("width");
        } else {
          setDime("height");
        }
      });
    };
  });
  return (
    <ScrollView>
      <View style={styles.view}>
        <Text h4>The game is over</Text>
        <View
          style={{
            borderRadius: Dimensions.get("window")[dime] * 0.35,
            overflow: "hidden",
            borderColor: "black",
            borderWidth: 1
          }}
        >
          <Image
            source={require("../assets/success.png")}
            style={{
              height: Dimensions.get("window")[dime] * 0.7,
              width: Dimensions.get("window")[dime] * 0.7
            }}
          />
        </View>
        <Text h4>
          Number of rounds: {guessRounds && guessRounds.toLocaleString()}
        </Text>
        <Text h4>
          Number was: {finalNumber && finalNumber.toLocaleString()}
        </Text>
        <Button
          title="Restart"
          containerStyle={{ width: "50%", marginTop: 20 }}
          onPress={() => setGuessRounds(0)}
        />
      </View>
    </ScrollView>
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
