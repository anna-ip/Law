import React, { useState, useEffect } from 'react';
import { greenNeon } from '../../ui/styles';
import check from '../../../assets/images/check.svg';
import { SpendLevelTable } from '../../form/spendLevel/SpendLevelTable';
import { Card } from '../cardComponents/Card';
import { LegalPopUp } from '../../popUp';
import { SpendLevelForm } from '../../form/spendLevel/SpendLevelForm';

export const SpendLevelCard = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [hasBeenEdited, setHasBeenEdited] = useState<boolean>(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setHasBeenEdited(false);
    }, 1500);
  }, [isEditing]);

  return (
    <>
      <Card
        title='Legal spending'
        onClick={handleEdit}
        isEditing={isEditing}
        hasBeenEdited={hasBeenEdited}
        circleBackground={greenNeon}
        icon={check}
        iconSize={16}
        onClickInfo={handleOpenModal}
        margin='10px 30px 100px 0px'
      >
        {!isEditing && <SpendLevelTable />}
        {isEditing && (
          <SpendLevelForm
            setIsEditing={setIsEditing}
            setHasBeenEdited={setHasBeenEdited}
          />
        )}
      </Card>
      {isOpen && <LegalPopUp setIsOpen={setIsOpen} isOpen={isOpen} />}
    </>
  );
};
