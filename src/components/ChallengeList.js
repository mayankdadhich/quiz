import React from 'react';
import ChallengeItem from './ChallengeItem';
import './ChallengeList.css';

const challenges = [
  { id: 1, title: 'Challenge 1', status: 'Closed', questions: 1 },
  { id: 2, title: 'Challenge 2', status: 'Open', questions: 2 },
  { id: 3, title: 'Challenge 3', status: 'Open', questions: 2 },
  { id: 4, title: 'Challenge 4', status: 'Open', questions: 2 },
  { id: 5, title: 'Challenge 5', status: 'Closed', questions: 1 },
  { id: 6, title: 'Challenge 6', status: 'Open', questions: 2 },
];

function ChallengeList() {
  return (
    <div class="container my-5">
      <div class="row align-items-center mb-4 mx-3">       
      <div class="col-7 text-start">
          <h4 className='fw-bold'>Hello! 👋</h4>
          <p className='m-0'>Lorem ipsum dolar sit amet</p>
        </div>
        <div class="col-3">
        <div class="input-group">
        <span class="input-group-text" id="basic-addon1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0"/>
</svg></span>
          <input
            type="text"
            className="form-control border-start-0 ps-0"
            placeholder="Search by title..."            
          />
          </div>
          </div>
          <div class="col-2 text-end">
          <button className="btn btn-outline-primary w-100">+ Add Challenge</button>
        </div>
      </div>
        <div class="row align-items-start">
        {challenges.map((challenge) => (
        <ChallengeItem key={challenge.id} challenge={challenge} />
      ))}
      </div>
      </div>
  );
}

export default ChallengeList;
