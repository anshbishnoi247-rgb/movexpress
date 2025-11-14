import React from "react";

const Buttonsecondary = ({ content, onClick }) => {
  return (
    <div className="overflow-hidden group relative bg-vinegar rounded-xl">
      <button onClick={onClick} className="button-style-secondary">
        {content}
      </button>
      <div className="button-style-secondary-hover"></div>
    </div>
  );
};

export default Buttonsecondary;
