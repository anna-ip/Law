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
  const [hasEditiedLevels, setHasEditedLevels] = useState(false);

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

  const circleBackground = hasEditiedLevels ? `${yellow}` : `${greenNeon}`;
  const circleIcon = hasEditiedLevels ? `${exclamation}` : `${check}`;
  const iconSize = hasEditiedLevels ? 4 : 16;

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
      hasEditiedLevels={hasEditiedLevels}
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
