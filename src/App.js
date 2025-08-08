import RecipeCard from "./components/RecipeCards";
import { GlobalStyle } from "./styles/GlobalStyles";

const recipes = [
  {
    title: "Smoked salmon burger",
    image:
      "https://fitmencook.com/wp-content/uploads/2022/10/smoked-salmon-burger-3.jpg",
    time: 20,
    servings: 6,
    calories: 210,
    difficulty: 0,
  },
  {
    title: "Tomatoes With Creamy Feta",
    image:
      "https://assets.bonappetit.com/photos/62b4926736e0c90647da6b71/1:1/w_2560%2Cc_limit/0623-diana-yen-tomato-recipe-lede.jpg",
    time: 15,
    servings: 3,
    calories: 600,
    difficulty: 0,
  },
  {
    title: "Spicy potato salad",
    image:
      "https://mccormick.widen.net/content/uvjk9yurf1/original/spicy_potato_salad_637390546085236844_800x800.jpg",
    time: 30,
    servings: 2,
    calories: 320,
    difficulty: 1,
  },
  {
    title: "Chicken Biryani",
    image:
      "https://images.food52.com/VOfOuvcQe7fBeSqixNe1L-LhUBY=/d815e816-4664-472e-990b-d880be41499f--chicken-biryani-recipe.jpg",
    time: 40,
    servings: 4,
    calories: 700,
    difficulty: 2,
  },
];

const App = () => {
  return (
    <>
      <GlobalStyle />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {recipes.map((recipe, index) => (
          <RecipeCard key={index} recipe={recipe} />
        ))}
      </div>
    </>
  );
};

export default App;
