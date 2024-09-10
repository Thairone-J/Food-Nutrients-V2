const state = {
  foodList: [],

  currentFood: null,
  currentMeal: [],

  user: {
    isLogged: false,
    id: null,
    picture: '',
    dailyGoals: {
      kcal: 0,
      carb: 0,
      protein: 0,
      fat: 0,
    },
    meals: [],
  },
};

export default state;
