import React from "react";

const isOper = val => {
    return !isNaN(val) || val === "." || val === "=";
}

const Button = props => <div className={`btn-wrapper ${isOper(props.children) ? null : "operator"}`}>{props.children}</div>

export default Button;