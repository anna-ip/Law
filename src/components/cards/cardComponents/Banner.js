import styled from 'styled-components/macro';
import { primaryBlue } from '../../ui/styles';

export const Banner = ({ children, radius }) => {
  return <Updated radius={radius}>{children}</Updated>;
};

const Updated = styled.div`
  display: flex;
  align-items: center;
  background-color: ${primaryBlue};
  border-radius: ${(props) => (props.radius ? `${props.radius}px` : `${5}px`)};
  padding: 12px 0 12px 20px;
`;
