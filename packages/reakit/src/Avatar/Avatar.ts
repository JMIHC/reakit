import { theme } from "styled-tools";
import styled from "../styled";
import use from "../use";
import Box, { BoxProps } from "../Box";

export interface AvatarProps extends BoxProps {}

const Avatar = styled(Box)<AvatarProps>`
  ${theme("Avatar")};
`;

export default use(Avatar, "img");
