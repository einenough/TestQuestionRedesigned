import styled from "styled-components";
const StoriesStyle = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 456px;
  height: ${(props) => (props.isOpen ? "70%" : "fit-content")};
  background-color: #333333;
  transition: all 3s ease-in-out;
`;
export default StoriesStyle;
