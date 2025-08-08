import styled from "styled-components";
import Difficulty from "./Difficulty";
import { BsFillStopwatchFill } from "react-icons/bs";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { VscGraphLine } from "react-icons/vsc";

const Card = styled.div`
  width: 300px;
  background: #fff;
  border-radius: 20px;
  padding: 20px;
  margin: 20px;
  box-shadow: ${({ hard }) =>
    hard ? "0 0 20px rgba(255, 0, 0, 0.5)" : "0 2px 8px rgba(0,0,0,0.1)"};
`;

const Image = styled.img`
  width: 100%;
  height: 180px;
  object-fit: cover;
  border-radius: 15px;
`;

const Title = styled.h3`
  display: flex;
  justify-content: center;
  margin: 15px 0;
`;

const Info = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  margin-bottom: 10px;
`;

const RecipeCard = ({ recipe }) => {
  return (
    <Card hard={recipe.difficulty === 2}>
      <Image src={recipe.image} alt={recipe.title} />
      <Title>{recipe.title}</Title>
      <Info>
        <BsFillStopwatchFill /> {recipe.time} min
        <MdOutlineIncompleteCircle /> {recipe.servings} servings
        <VscGraphLine /> {recipe.calories} calories
      </Info>
      <Difficulty level={recipe.difficulty} />
    </Card>
  );
};

export default RecipeCard;
