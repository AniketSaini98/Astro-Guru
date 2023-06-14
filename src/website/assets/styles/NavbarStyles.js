import styled from 'styled-components';
import { Button } from '@mui/material';

export const Logo = styled.img`
  border: 1px solid red;
  padding: 5px;
  width: 40px;
  height: 40px;
  border: 1px solid crimson;
  border-radius: 100%;
`;

export const LogoText = styled.p`
  margin-left: 10px;
  font-weight: bold;
  color: #ffffff;
`;

export const StyledButton = styled(Button)`
  display: flex;
  border-bottom: ${({ isActive }) => (isActive ? '1px solid red' : 'none')};
`;