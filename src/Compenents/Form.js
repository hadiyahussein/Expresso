import React from "react";

const Form = (props) => {
  return (
    <div className="form-wrapper">
      <form onSubmit={props.handleSubmit}>
          
          {props.formError ? (<div className='invalid-feedback'>Error: Failed to summarize text.</div>) : null}
          {props.errorMessage ? (<div className='invalid-feedback'>{props.errorMessage}</div>) : null}

          <label htmlFor="text"></label>
          <textarea type="text" id="text" aria-describedby="error" onChange={props.handleChange} value={props.typedValue}
          rows="10" cols="55"/>

          <button>Submit</button>

      </form>
    </div>
  );
};

export default Form;





