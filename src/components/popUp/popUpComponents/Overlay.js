import styled from 'styled-components/macro';

export const Overlay = ({ children, onClick }) => {
  return <StyledOverLay onClick={onClick}>{children}</StyledOverLay>;
};

const StyledOverLay = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  bottom: 0px;
  right: 0px;
  background-color: rgba(0, 0, 0, 0.2);
`;
