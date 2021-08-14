import React from "react";
import { useHistory } from "react-router-dom";


const Header = () => {

  const history = useHistory();

  function handleClick() {
    history.push("/");
  }

  return (
    <div className="ui fixed menu">
      <div className="ui container center">
        <h2 onClick={handleClick} style={{ cursor: 'pointer' }}> Shopz Cart</h2>
      </div>
    </div>
  );
};

export default Header;