import styled from "styled-components";
const difficultyColors = ["#60a5fa", "#facc15", "#f87171"];

const Tag = styled.span`
  display: flex;
  justify-content: center;
  padding: 5px 10px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  color: white;
  background-color: ${({ level }) => difficultyColors[level]};
  box-shadow: ${({ level }) =>
    level === 2 ? "0 0 10px rgba(255, 0, 0, 0.7)" : "none"};
`;

const Difficulty = ({ level }) => {
  const labels = ["Easy", "Medium", "Hard"];
  return <Tag level={level}>{labels[level]}</Tag>;
};

export default Difficulty;
