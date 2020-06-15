import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import MealItem from "./MealItem";

const MealList = (props) => {
  const navigationHandler = (id) => {
    props.navigation.navigate({
      routeName: "MealDetail",
      params: { mealId: id },
    });
  };
  const renderMealItem = (itemData) => {
    return (
      <MealItem
        title={itemData.title}
        duration={itemData.duration}
        complexity={itemData.complexity}
        affordability={itemData.affordability}
        onSelectMeal={() => {}}
        imageUrl={itemData.imageUrl}
        onSelectMeal={() => navigationHandler(itemData.id)}
      />
    );
  };
  return (
    <View style={styles.list}>
      <FlatList
        data={props.listData}
        renderItem={({ item }) => renderMealItem(item)}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
export default MealList;
