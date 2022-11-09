import { useState, useEffect } from 'react';
import { yellow } from '../../ui/styles';
import exclamation from '../../../assets/images/exclamation.svg';
import { RiskAndManagementTable } from '../../form/riskManagement.js/RiskAndManagementTable';
import { RiskAndManagementForm } from '../../form/riskManagement.js/RiskAndManagementForm';
import { RiskManagementPopUp } from '../../popUp/RiskManagementPopUp';
import { Card } from '../cardComponents';

export const RiskManagement = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [hasBeenEdited, setHasBeenEdited] = useState(false);

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
        title='Risk management performance'
        circleBackground={yellow}
        icon={exclamation}
        iconSize={4}
        isEditing={isEditing}
        onClick={handleEdit}
        hasBeenEdited={hasBeenEdited}
        onClickInfo={handleOpenModal}
      >
        {!isEditing && <RiskAndManagementTable />}
        {isEditing && (
          <RiskAndManagementForm
            setIsEditing={setIsEditing}
            setHasBeenEdited={setHasBeenEdited}
          />
        )}
      </Card>
      {isOpen && <RiskManagementPopUp setIsOpen={setIsOpen} />}
    </>
  );
};
