import React, { useState } from "react";
import PopupMenu from "../components/PopupMenu";
import MemberForm from "../components/MemberForm";
import "../styles/CommisionsItem.css";

const CommisionsItem = ({
  commission,
  onMemberAdd,
  onMemberEdit,
  onMemberDelete,
}) => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [isAddMemberPopupOpen, setIsAddMemberPopupOpen] = useState(false);
  const [isEditMemberPopupOpen, setIsEditMemberPopupOpen] = useState(false);

  const handleMemberDetailsClick = (member) => {
    setSelectedMember(member);
  };

  const handleAddMemberClick = () => {
    setIsAddMemberPopupOpen(true); // Open the popup for adding a new member
  };

  const handleEditMemberClick = (member) => {
    setSelectedMember(member);
    setIsEditMemberPopupOpen(true); // Open the popup for editing the member
  };

  const handleDeleteMemberClick = (member) => {
    onMemberDelete(commission.id, member.id);
    setSelectedMember(null); // Reset selected member after deletion
  };

  const handleMemberFormSubmit = (updatedMember) => {
    if (selectedMember) {
      onMemberEdit(commission.id, selectedMember.id, updatedMember);
      setIsEditMemberPopupOpen(false); // Close the popup after editing
    } else {
      onMemberAdd(commission.id, updatedMember);
      setIsAddMemberPopupOpen(false); // Close the popup after adding
    }

    setSelectedMember(null);
  };

  const handleAddMemberPopupClose = () => {
    setIsAddMemberPopupOpen(false); // Close the popup for adding a new member
  };

  const handleEditMemberPopupClose = () => {
    setIsEditMemberPopupOpen(false); // Close the popup for editing the member
  };

  return (
    <div className="commission-item">
      <h4 className="commission-name">{commission.name}</h4>
      <ul className="members-list">
        {commission.members.map((member) => (
          <li key={member.id} className="member-item">
            <img
              className="member-img"
              src={member.img}
              alt={`${member.name} ${member.surname} Image`}
            />
            <p>{`${member.name} ${member.surname}`}</p>
            <PopupMenu
              item={<button className="details-button">Подробнее</button>}
              popupContent={
                <div>
                  <img
                    className="member-img-popup"
                    src={member.img}
                    alt={`${member.name} ${member.surname} Image`}
                  />
                  <h4>{`${member.name} ${member.surname}`}</h4>
                  <p>Телефон: {member.phone}</p>
                  <p>Опыт: {member.experience}</p>
                  <button onClick={() => handleEditMemberClick(member)}>
                    Редактировать
                  </button>
                  <button onClick={() => handleDeleteMemberClick(member)}>
                    Удалить
                  </button>
                </div>
              }
              onOpen={() => handleMemberDetailsClick(member)}
            />
          </li>
        ))}
      </ul>
      <button onClick={handleAddMemberClick}>Добавить участника</button>
      {isAddMemberPopupOpen && (
        <MemberForm
          onSubmit={handleMemberFormSubmit}
          onCancel={handleAddMemberPopupClose}
        />
      )}
      {isEditMemberPopupOpen && (
        <MemberForm
          member={selectedMember}
          onSubmit={handleMemberFormSubmit}
          onCancel={handleEditMemberPopupClose}
        />
      )}
    </div>
  );
};

export default CommisionsItem;
