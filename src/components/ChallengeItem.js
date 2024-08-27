import React from "react";
import "./ChallengeItem.css";
import { FaEdit, FaTrash, FaEye } from "react-icons/fa"; // Import icons for edit, delete, and view
import { Toggle } from "rsuite";
import "rsuite/dist/rsuite.min.css"; // Import the stylesheet

function ChallengeItem({ challenge }) {
  return (
    <>
      <div class="container mb-3 card-box">
        <div class="row align-items-center">
        <span className='open-box'>Open</span>
          <div class="col-3 text-start">
            <h4 className="fw-bold">{challenge.title}</h4>
            <p className="m-0">Total Questions: {challenge.questions}</p>
          </div>
          <div class="col-5 text-wrap text-start">
            <p className="m-0 text-muted">
              Background Details: What needs to be done and why. What need to be
              disrupted. Lorem ipsum doler sit amet.
            </p>
          </div>
          <div class="col-4">
            <div class="row align-items-center justify-content-end">
              <div class="col-2">
              <div class="form-check form-switch">
                <input class="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
              </div>
                <p className="m-0">closed</p>
              </div>
              <div class="col-2">
                <button className="action-button">
                  <FaTrash className="icon" />
                </button>
              </div>
              <div class="col-2">
                <button className="action-button">
                  <FaEdit className="icon" />
                </button>
              </div>
              <div class="col-2">
                <button className="action-button">
                  <FaEye className="icon" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ChallengeItem;
