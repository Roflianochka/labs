import React from "react";
import PopupMenu from "../components/PopupMenu";
import "../styles/EnterpriseItem.css"; // Import the corresponding CSS file

const EnterpriseItem = ({ enterprise }) => {
  return (
    <div className="enterprise-item">
      <h4 className="enterprise-name">{enterprise.name}</h4>
      <img
        className="enterprise-img"
        src={enterprise.img}
        alt={`${enterprise.name} Image`}
      />
      <PopupMenu
        item={<button className="details-button">Подробнее</button>}
        popupContent={
          <div>
            <img
              className="enterprise-img-popup"
              src={enterprise.img}
              alt={`${enterprise.name} Image`}
            />
            <h4>Предприятие содержит следующие инструменты: </h4>
            <ul className="tool-list">
              {enterprise.tools.map((tool) => (
                <li key={tool.id} className="tool-item">
                  {tool.name}
                  {tool.img && (
                    <img
                      className="tool-img"
                      src={tool.img}
                      alt={`${tool.name} Image`}
                    />
                  )}
                </li>
              ))}
            </ul>
          </div>
        }
      />
    </div>
  );
};

export default EnterpriseItem;
