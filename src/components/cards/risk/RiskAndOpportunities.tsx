import React, { useState, useEffect } from 'react';
import { yellow } from '../../ui/styles';
import exclamation from '../../../assets/images/exclamation.svg';
import { RiskForm } from '../../form/risk/RiskForm';
import { RiskTable } from '../../form/risk/RiskTable';
import { RiskPopUp } from '../../popUp/RiskPopUp';
import { Card } from '../cardComponents';

export const RiskAndOpportunities = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasBeenEdited, setHasBeenEdited] = useState(false);

  const handleOpenModal = () => {
    setIsOpen(true);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setHasBeenEdited(false);
    }, 1500);
  }, [isEditing]);

  return (
    <>
      <Card
        title='Risk & opportunities'
        icon={exclamation}
        iconSize={4}
        circleSize={24}
        circleBackground={yellow}
        onClickInfo={handleOpenModal}
        onClick={handleEdit}
        isEditing={isEditing}
        hasBeenEdited={hasBeenEdited}
      >
        {!isEditing && <RiskTable />}
        {isEditing && (
          <RiskForm
            setIsEditing={setIsEditing}
            setHasBeenEdited={setHasBeenEdited}
          />
        )}
      </Card>
      {isOpen && <RiskPopUp setIsOpen={setIsOpen} />}
    </>
  );
};
