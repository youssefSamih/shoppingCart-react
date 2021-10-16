import styled from 'styled-components';
import Button from '@material-ui/core/Button';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  border: 1px solid lightblue;
  border-radius: 20px;
  height: 100%;
  overflow: hidden;

  div {
    font-family: Arial, Helvetica, sans-serif;
  }
`;

export const InfoContainer = styled.div`
  padding: 1rem;
  height: 100%;
`;

export const StyledImage = styled.img`
  max-height: 250px;
  object-fit: cover;
  border-radius: 20px 20px 0 0;
`;

export const StyledButton = styled(Button)`
  border-radius: 0 0 20px 20px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: space-between;
`;
