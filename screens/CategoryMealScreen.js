import React from "react";
import { Text, View, StyleSheet, Button, FlatList } from "react-native";
import { CATEGORIES, MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const CategoryMealScreen = (props) => {
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
  const categoryId = props.navigation.getParam("categoryId");

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(categoryId) >= 0
  );

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={({ item }) => renderMealItem(item)}
        style={{ width: "100%", padding: 10 }}
      />
    </View>
  );
};

CategoryMealScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);
  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CategoryMealScreen;
