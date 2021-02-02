import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Input } from "react-native-elements";

export default function App() {
  const [goal, setGoal] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
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
          onPress={() => setGoals(g => [...g, goal])}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 50
  }
});
