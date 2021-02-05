import React, { useState } from "react";
import {
  Alert,
  Keyboard,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  View
} from "react-native";
import { Button, Card, Input, Text } from "react-native-elements";

interface Props {
  setUserNumber: React.Dispatch<React.SetStateAction<number | null>>;
}

const StartGameScreen: React.FC<Props> = ({ setUserNumber }) => {
  const [inp, setInp] = useState<string>("");
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);
  const [confirm, setConfirm] = useState<boolean>(false);
  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="position">
        <View>
          <Text h4 h4Style={{ alignSelf: "center", fontFamily: "open-sans" }}>
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
              <Button
                containerStyle={styles.btn}
                type="outline"
                title="Reset"
                onPress={() => {
                  setConfirm(false);
                  setInp("");
                }}
              />
              <Button
                containerStyle={styles.btn}
                title="Confirm"
                onPress={() => {
                  const num = parseInt(inp);
                  if (isNaN(num) || num < 1 || num > 99) {
                    return Alert.alert(
                      "Invalid Number",
                      "Number has to be between 1 and 99",
                      [
                        {
                          text: "Okay",
                          style: "cancel",
                          onPress: () => setInp("")
                        }
                      ]
                    );
                  }
                  Keyboard.dismiss();
                  setConfirm(true);
                  setSelectedNumber(num);
                  setInp("");
                }}
              />
            </View>
          </Card>
          {selectedNumber ? (
            <Card>
              <Card.Title>You Selected</Card.Title>
              <Text style={styles.num}>{selectedNumber}</Text>
              <Button
                title="Start Game"
                onPress={() => setUserNumber(selectedNumber)}
              />
            </Card>
          ) : null}
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
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
  },
  num: {
    borderWidth: 1,
    borderColor: "#e905e9",
    borderRadius: 4,
    alignSelf: "center",
    padding: 4,
    fontSize: 30,
    color: "#e905e9",
    marginBottom: 15
  }
});
