import React from 'react';

const AddUser = () => {
  return (
    <div className="newUser">
      <div className="newUserTitle">
        <form className="newUserForm">
          <div className="newUserItem">
            <label>Username</label>
            <input type="text" placeholder="Enter Username" />
          </div>
          <div className="newUserItem">
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name" />
          </div>
          <div className="newUserItem">
            <label>Second Name</label>
            <input type="text" placeholder="Enter Second Name" />
          </div>
          <div className="newUserItem">
            <label>Phone Number</label>
            <input type="text" placeholder="Enter Phone Number" />
          </div>
          <div className="newUserItem">
            <label>Email</label>
            <input type="text" placeholder="Enter Email" />
          </div>
          <div className="newUserItem">
            <label>Gender</label>
            <div className="newUserGender">
              <input type="radio" name="gender" id="male" value="male" />
              <label for="male">Male</label>
              <input type="radio" name="gender" id="female" value="female" />
              <label for="female">Female</label>
              <input type="radio" name="gender" id="other" value="other" />
              <label for="other">Other</label>
            </div>
          </div>
          <div className="newUserItem">
            <label>Age</label>
            <input type="text" placeholder="Enter Email" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
