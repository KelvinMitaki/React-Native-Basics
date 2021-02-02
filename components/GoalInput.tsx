import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";
interface Props {
  goal: string;
  setGoal: React.Dispatch<React.SetStateAction<string>>;
  setGoals: React.Dispatch<React.SetStateAction<string[]>>;
}
const GoalInput: React.FC<Props> = ({ goal, setGoal, setGoals }) => {
  return (
    <View style={styles.container}>
      <Input
        placeholder="Course Goal"
        containerStyle={{ width: "70%" }}
        onChangeText={setGoal}
        value={goal}
      />
      <Button
        title="ADD"
        containerStyle={{ width: "20%" }}
        disabled={!goal.trim().length}
        onPress={() => {
          setGoals(g => [...g, goal]);
          setGoal("");
        }}
      />
    </View>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50
  }
});
