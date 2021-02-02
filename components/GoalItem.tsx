import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { ListItem } from "react-native-elements";
interface Props {
  title: string;
}
const GoalItem: React.FC<Props> = ({ title }) => {
  return (
    <ListItem bottomDivider>
      <ListItem.Content>
        <ListItem.Title>{title}</ListItem.Title>
      </ListItem.Content>
      <ListItem.Chevron />
    </ListItem>
  );
};

export default GoalItem;

const styles = StyleSheet.create({});
