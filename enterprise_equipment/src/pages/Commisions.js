import React, { useState, useEffect } from "react";
import data from "../jsons/CommisionsData.json";
import "../styles/Commisions.css";
import CommisionsItem from "./CommisionsItem";

const Commisions = () => {
  const [commissions, setCommissions] = useState([]);

  useEffect(() => {
    setCommissions(data);
  }, []);

  const handleMemberDelete = (commissionId, memberId) => {
    // Find the commission in the state
    const updatedCommissions = commissions.map((commission) => {
      if (commission.id === commissionId) {
        // Remove the member from the commission
        const updatedMembers = commission.members.filter(
          (member) => member.id !== memberId
        );

        // Check if there are no more members in the commission
        if (updatedMembers.length === 0) {
          // Remove the commission from the state
          return null;
        }

        return { ...commission, members: updatedMembers };
      }
      return commission;
    });

    // Filter out commissions with no members
    const filteredCommissions = updatedCommissions.filter(
      (commission) => commission !== null
    );

    // Update the state with the modified commissions
    setCommissions(filteredCommissions);
  };

  const handleCommissionAdd = () => {
    // Generate a unique ID for the new commission
    const newCommissionId = Math.max(...commissions.map((c) => c.id), 0) + 1;

    // Create a new commission object
    const newCommission = {
      id: newCommissionId,
      name: "New Commission", // You can customize the default name
      members: [],
    };

    // Update the state with the new commission
    setCommissions([...commissions, newCommission]);
  };

  const handleMemberAdd = (commissionId, newMember) => {
    // Find the commission in the state
    const updatedCommissions = commissions.map((commission) => {
      if (commission.id === commissionId) {
        // Add the new member to the commission
        const updatedMembers = [...commission.members, newMember];
        return { ...commission, members: updatedMembers };
      }
      return commission;
    });

    // Update the state with the modified commissions
    setCommissions(updatedCommissions);
  };

  const handleMemberEdit = (commissionId, memberId, updatedMember) => {
    // Find the commission in the state
    const updatedCommissions = commissions.map((commission) => {
      if (commission.id === commissionId) {
        // Update the member in the commission
        const updatedMembers = commission.members.map((member) =>
          member.id === memberId ? { ...member, ...updatedMember } : member
        );

        return { ...commission, members: updatedMembers };
      }
      return commission;
    });

    // Update the state with the modified commissions
    setCommissions(updatedCommissions);
  };

  return (
    <div className="commissions-container">
      {commissions.map((commission) => (
        <CommisionsItem
          key={commission.id}
          commission={commission}
          onMemberDelete={handleMemberDelete}
          onMemberAdd={handleMemberAdd}
          onMemberEdit={handleMemberEdit}
        />
      ))}
      <button onClick={handleCommissionAdd}>Добавить комиссию</button>
    </div>
  );
};

export default Commisions;
