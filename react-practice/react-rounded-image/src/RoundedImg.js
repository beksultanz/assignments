import React from "react"
import PropTypes from "prop-types"

const RoundedImg = (props) => {
    return (
        <img 
        src={props.src}
        style={{borderRadius: props.borderRadius}}
        className="round-img" 
        alt="dog"
        />
    )
}

RoundedImg.propTypes = { 
    src: PropTypes.string.isRequired,
    borderRadius: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

RoundedImg.defaultProps = {
    borderRadius: "50%"
}


export default RoundedImg