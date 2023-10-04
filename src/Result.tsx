import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap-grid.min.css"; // Import Bootstrap Grid CSS
import { useSelector, useDispatch } from "react-redux";
import { EFormAction, FormState } from "./types";
import { useNavigate } from "react-router-dom";

function Result() {
  const data = useSelector<FormState, FormState>((state) => state);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!data.firstName) navigate("/");
  }, [data]);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>First Name:</label>
            <p>{data.firstName}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Last Name:</label>
            <p>{data.lastName}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Email:</label>
            <p>{data.email}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Address 1:</label>
            <p>{data.address1}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-4">
          <div className="form-group">
            <label>City:</label>
            <p>{data.city}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>State:</label>
            <p>{data.state}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="form-group">
            <label>ZIP:</label>
            <p>{data.zip}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-6">
          <div className="form-group">
            <label>Phone:</label>
            <p>{data.phone}</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Job Title:</label>
            <p>{data.jobTitle}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="form-group">
            <label>Reason for Application:</label>
            <p>{data.reason}</p>
          </div>
        </div>
      </div>

      <div className="row">
        <button
          type="submit"
          className="btn btn-primary"
          onClick={() => dispatch({ type: EFormAction.RESET })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}

export default Result;
