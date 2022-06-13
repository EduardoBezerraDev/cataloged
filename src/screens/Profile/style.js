import styled from "styled-components";

export const Text = styled.p`
  font-size: ${(props) => props.fontSize || "12pt"};
  color: ${(props) => props.color || "black"};
  font-weight: ${(props) => (props.fontWeight ? props.fontWeight : false)};
`;
