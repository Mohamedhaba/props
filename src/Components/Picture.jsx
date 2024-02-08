import React from "react";
import PropTypes from "prop-types";

const Picture = ({ taswira }) => {
  // console.log(props)
  return (
    <div>
      <img src={taswira} alt="" />
    </div>
  );
};
Picture.defaultProps = {
  taswira:
    "https://www.pngarts.com/files/10/Default-Profile-Picture-PNG-Image.png",
};
Picture.propTypes = {
  taswira:PropTypes.string
}

export default Picture;
