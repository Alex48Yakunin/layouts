import React from "react";
import PropTypes from "prop-types";


const IconSwitch = (props) => {
  let {icon, onSwitch} = props;

  return (
    <div>
        <i className="material-icons" style={{ fontSize: 40 }} onClick={onSwitch} name={icon}>{icon}</i>
    </div>
  )
}


IconSwitch.propTypes = {
  icon: PropTypes.string,
  onSwitch: PropTypes.func
  
};

IconSwitch.defaultProps = {
  icon: "view_list",
  onSwitch: () => {}
};

export default IconSwitch;