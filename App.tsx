import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity
} from "react-native";
import { Button, Overlay } from "react-native-elements";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goal, setGoal] = useState<string>("");
  const [modal, setModal] = useState<boolean>(false);
  const [goals, setGoals] = useState<string[]>([]);

  return (
    <SafeAreaView
      style={{
        flex: 1
      }}
    >
      <Button
        containerStyle={{ marginTop: 50, width: "90%", alignSelf: "center" }}
        title="Add New Goal"
        onPress={() => setModal(m => !m)}
      />
      <Overlay isVisible={modal} onBackdropPress={() => setModal(false)}>
        <GoalInput goal={goal} setGoal={setGoal} setGoals={setGoals} />
      </Overlay>
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
