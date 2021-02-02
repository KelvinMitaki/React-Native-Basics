import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goal, setGoal] = useState<string>("");
  const [goals, setGoals] = useState<string[]>([]);
  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <GoalInput goal={goal} setGoal={setGoal} setGoals={setGoals} />
      <FlatList
        data={goals}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => setGoals(g => g.filter((_, i) => index !== i))}
          >
            <GoalItem title={item} />
          </TouchableOpacity>
        )}
        style={{ marginHorizontal: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
