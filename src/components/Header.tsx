import { useState } from 'react';
import styled from 'styled-components/macro';
import { Circle } from './ui/circle';
import { red } from './ui/styles';
import cells from '../assets/images/table-cells.svg';
import bell from '../assets/images/bell.svg';
import user from '../assets/images/user.svg';
import { NotificationPopUp } from './popUp/NotificationPopUp';
import { Link } from 'react-router-dom';
import { InputWithIcon } from './ui/inputs';

export const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <InputWithIcon />
        <CircleContainer>
          <Link to={'/profileOption'}>
            <Circle icon={cells} altText='Table cell icon' iconSize={20} />
          </Link>
          <OpenModal onClick={() => setIsModalOpen(true)}>
            <Circle icon={bell} altText='Bell Icon' iconSize={24} />
            <Notification>
              <Circle text='1' textSize={12} bg={red} size={16} />
            </Notification>
          </OpenModal>
          <Link to={'/logIn'}>
          <Circle icon={user} altText='Table cell icon' iconSize={16} />
          </Link>
        </CircleContainer>
      </HeaderContainer>
      {isModalOpen && <NotificationPopUp setIsModalOpen={setIsModalOpen} />}
    </>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
`;

const CircleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: 'flex-end';
  gap: 8px;
  margin-left: 130px;
`;

const OpenModal = styled.div`
  position: relative;
  cursor: pointer;
`;

const Notification = styled.div`
  position: absolute;
  top: 0px;
  right: 2px;
`;
