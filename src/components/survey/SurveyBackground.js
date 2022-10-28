import { motion } from 'framer-motion';
import styled from 'styled-components/macro';
import { secondaryBackground } from '../ui/styles';

export const SurveyBackground = ({ children }) => {
  return (
    <Container>
      <BackgroundContainer
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0, transition: { duration: 0.8 } }}
        exit={{ opacity: 0, transition: { duration: 0.2 } }}
      >
        <InnerContainer>{children}</InnerContainer>
      </BackgroundContainer>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const BackgroundContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  background-color: ${secondaryBackground};
  border-radius: 10px;
  width: 900px;
  min-height: 550px;
  max-height: 600px;
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  margin: 80px 120px;
`;
