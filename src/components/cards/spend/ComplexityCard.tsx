import React, { useState, useEffect } from 'react';
import { greenNeon, yellow } from '../../ui/styles';
import { Card } from '../cardComponents/Card';
import check from '../../../assets/images/check.svg';
import exclamation from '../../../assets/images/exclamation.svg';
import { ComplexityTable } from '../../form/complexity/ComplexityTable';
import { ComplexityForm } from '../../form/complexity/ComplexityForm';

export const ComplexityCard = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [hasBeenEdited, setHasBeenEdited] = useState(false);
  const [hasEditedLevels, setHasEditedLevels] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setHasBeenEdited(false);
    }, 1500);
  }, [isEditing]);

  useEffect(() => {
    setHasEditedLevels(false);
  }, []);

  const circleBackground = hasEditedLevels ? `${yellow}` : `${greenNeon}`;
  const circleIcon = hasEditedLevels ? `${exclamation}` : `${check}`;
  const iconSize = hasEditedLevels ? 4 : 16;

  return (
    <Card
      title='Level of complexity index'
      hasWrapTitle
      alignTitle='baseline'
      onClick={handleEdit}
      isEditing={isEditing}
      hasBeenEdited={hasBeenEdited}
      hasInfoButton={false}
      hasLevels
      hasEditedLevels={hasEditedLevels}
      circleBackground={circleBackground}
      icon={circleIcon}
      iconSize={iconSize}
      margin='10px 0px 100px 10px'
    >
      {!isEditing && <ComplexityTable />}
      {isEditing && (
        <ComplexityForm
          setIsEditing={setIsEditing}
          setHasBeenEdited={setHasBeenEdited}
          setHasEditedLevels={setHasEditedLevels}
        />
      )}
    </Card>
  );
};
