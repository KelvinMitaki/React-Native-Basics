import React, { useState } from "react";
import {
  Keyboard,
  SafeAreaView,
  StyleSheet,
  TouchableWithoutFeedback
} from "react-native";
import { Header } from "react-native-elements";
import GameScreen from "./screens/GameScreen";
import StartGameScreen from "./screens/StartGameScreen";
// import Header from "./components/Header";

const App = () => {
  const [userNumber, setUserNumber] = useState<number | null>(null);
  return (
    <TouchableWithoutFeedback
      touchSoundDisabled
      onPress={() => Keyboard.dismiss()}
    >
      <SafeAreaView style={styles.view}>
        <Header
          placement="left"
          leftComponent={{ icon: "menu", color: "#fff" }}
          centerComponent={{ text: "MY TITLE", style: { color: "#fff" } }}
          rightComponent={{ icon: "home", color: "#fff" }}
          containerStyle={{ marginTop: 20 }}
        />
        {!userNumber ? (
          <StartGameScreen setUserNumber={setUserNumber} />
        ) : (
          <GameScreen userChoice={userNumber} />
        )}
      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
};

export default App;

const styles = StyleSheet.create({
  view: {
    flex: 1
  }
});
