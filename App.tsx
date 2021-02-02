import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import { Button, Input, ListItem } from "react-native-elements";

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
          onPress={() => {
            setGoals(g => [...g, goal]);
            setGoal("");
          }}
        />
      </View>
      <FlatList
        data={goals}
        keyExtractor={(_, i) => i.toString()}
        renderItem={({ item }) => (
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>{item}</ListItem.Title>
            </ListItem.Content>
            <ListItem.Chevron />
          </ListItem>
        )}
        style={{ marginHorizontal: 10 }}
      />
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
