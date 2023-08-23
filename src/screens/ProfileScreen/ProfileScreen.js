import React from "react";
import "./ProfileScreen.css";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/userSlice";
import Nav from "../../components/Nav";
import PlanScreen from "../PlanScreen/PlanScreen";
import { auth } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

function ProfileScreen() {
  const user = useSelector(selectUser);
  const history = useNavigate();
  return (
    <div className="profileScreen">
      <Nav></Nav>
      <div className="profileScreen__body">
        <h1>Edit Profile</h1>
        <div className="profileScreen__info">
          <img
            onClick={() => history("/")}
            src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            alt=""
          />
          <div className="profileScreen__details">
            <h2>{user.email}</h2>

            <div className="profileScreen__plans">
              <h3>Plans</h3>
              <PlanScreen />
              <button
                onClick={() => auth.signOut()}
                className="profileScreen__signOut"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProfileScreen;
