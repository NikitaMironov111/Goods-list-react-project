import React, { useContext } from 'react';
import '../LoginUser/LoginUser.css';

const LoginUser = () => {
  const userData = localStorage;
  console.log(userData);
  return (
    <div className="container_user">
      <div className="card mb-3 " style={{ maxWidth: '540px' }}>
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={userData.image}
              className="img-fluid rounded-start"
              alt="userAvatar"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <h5 className="card-title">
                <span style={{ fontWeight: 'bold' }}>NickName: </span>
                {userData.username}
              </h5>
              <p className="card-text">
                <p>
                  <span style={{ fontWeight: 'bold' }}>User name: </span>
                  {`${userData.firstName} ${userData.lastName}`}
                </p>
                <p>
                  <span style={{ fontWeight: 'bold' }}>User gender: </span>
                  {userData.gender}
                </p>
                <p>
                  <span style={{ fontWeight: 'bold' }}>User email: </span>
                  {userData.email}
                </p>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginUser;
