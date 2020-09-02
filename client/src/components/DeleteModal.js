import React from 'react'

const DeleteModal = () => {
  return (
    <div className={`delete-modal ${props.toggle ? 'active' : 'disabled'}`}>
      <div className="delete-heading">
        <h1>Are you sure you want to delete this feedback?</h1>
      </div>
      <div>
        <button
          onClick={() => {
            deleteFeedback()
          }}
          className="btn btn-danger"
        >
          Yes
        </button>
        <button
          onClick={() => props.myToggle(false)}
          className="btn btn-secondary"
        >
          No
        </button>
      </div>
    </div>
  );
}

export default DeleteModal
