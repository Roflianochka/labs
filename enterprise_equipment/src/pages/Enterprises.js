import React, { useState, useEffect } from "react";
import data from "../jsons/EnterprisesData.json";
import EnterpriseItem from "./EnterpriseItem";
import "../styles/Enterprises.css";

const Enterprises = () => {
  const [enterprises, setEnterprises] = useState([]);

  useEffect(() => {
    setEnterprises(data);
  }, []);

  return (
    <div className="enterprises-container">
      {enterprises.map((enterprise) => (
        <EnterpriseItem key={enterprise.id} enterprise={enterprise} />
      ))}
    </div>
  );
};

export default Enterprises;
