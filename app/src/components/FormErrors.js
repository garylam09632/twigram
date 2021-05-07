import React from "react";

function FormErrors(props) {
  if (props.formerrors && props.formerrors.cognito) {
    return (
      <div className="text-danger">
		  { props.formerrors.cognito.message }
      </div>
    );
  } else {
    return <div />;
  }
}

export default FormErrors;