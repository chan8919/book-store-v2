import styled from "styled-components";
import { HeadingSize, TColorKey } from "../../style/theme";

interface Props {
  children: React.ReactNode;
  size: HeadingSize;
  color?: TColorKey;
}

function Title({ children, size, color }: Props) {
  return (
    <TitleStyle size={size} color={color}>
      {children}
    </TitleStyle>
  );
}

const TitleStyle = styled.h1<Omit<Props, "children">>`
  font-size: ${({ theme, size }) => theme.heading[size].fontSize};
  color: ${({ theme, color }) =>
    color ? theme.color[color] : theme.color.primary};
`;

export default Title;
