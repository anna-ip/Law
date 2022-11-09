import { useState, useEffect } from 'react';
import { greenNeon } from '../../ui/styles';
import check from '../../../assets/images/check.svg';
import { CostTable } from '../../form/materialized/CostTable';
import { CostForm } from '../../form/materialized/CostForm';
import { MaterializedPopUp } from '../../popUp/MaterializedPopUp';
import { Card } from '../cardComponents';

export const Materialized = () => {
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
        title='Materialized cost'
        circleSize={24}
        icon={check}
        circleBackground={greenNeon}
        onClickInfo={handleOpenModal}
        onClick={handleEdit}
        hasBeenEdited={hasBeenEdited}
        isEditing={isEditing}
      >
        {!isEditing && <CostTable />}
        {isEditing && (
          <CostForm
            setIsEditing={setIsEditing}
            setHasBeenEdited={setHasBeenEdited}
          />
        )}
      </Card>
      {isOpen && <MaterializedPopUp setIsOpen={setIsOpen} />}
    </>
  );
};
