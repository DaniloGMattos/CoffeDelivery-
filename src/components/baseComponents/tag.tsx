import styled from "styled-components";
import { COFFEE_TAGS } from "../../database/@types";
import { ThemeColors } from "../../styles/themes/default";

interface Props {
  background: ThemeColors;
  textColor: ThemeColors;
  description: COFFEE_TAGS;
}

const Container = styled.span<{
  background: ThemeColors;
  textColor: ThemeColors;
}>`
  border-radius: 100px;
  font-size: 0.625rem;
  padding: 0.25rem 0.5rem;
  background-color: ${({ theme, background }) => theme[background]};
  font-weight: bold;
  color: ${({ theme, textColor }) => theme[textColor]};
`;
export function Tag({ background, description, textColor }: Props) {
  return (
    <Container textColor={textColor} background={background}>
      {description.toUpperCase()}
    </Container>
  );
}
