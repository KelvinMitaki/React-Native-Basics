import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Input, ListItem } from "react-native-elements";
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
        renderItem={({ item }) => <GoalItem title={item} />}
        style={{ marginHorizontal: 10 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
