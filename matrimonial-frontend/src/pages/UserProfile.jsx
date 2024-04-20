import React, { useState, useEffect, useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import RegisterProfile from "./RegisterProfile";
import { AppContext } from "../contexts/AppContext";
import Cookies from "js-cookie";
import VerifyCookie from "../util/VerifyCookie";

const UserProfile = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();
  const value = useContext(AppContext);

  const userId = value.isUserIDLoggedIn;
  const [userProfile, setUserProfile] = useState({});
  const [newUser, setnewUser] = useState(false);
  // console.log(userId)

  const data = VerifyCookie();

  if (data === true) {
    Cookies.remove("token");
    navigate("/login");
  }

  value.setisUserLoggedIn(data.username);
  value.setisUserIDLoggedIn(data.userId);

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const response = await axios.get(
          `http://localhost:4000/api/users/profile/${userId}`,
          {},
          { withCredentials: true }
        );

        if (response.data) {
          setUserProfile(response.data);
        } else {
          setnewUser(true);
          console.log("nothing");
        }
      } catch (error) {
        console.error("Failed to fetch profile:", error);
      }
    };

    fetchProfile();
  }, [userId]);

  // console.log("from profile",userProfile)

  return (
    <div>
      <div className="lg:w-4/6 mx-auto">
        <div className="flex flex-col sm:flex-row mt-10">
          <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
              <svg
                fill="none"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-10 h-10"
                viewBox="0 0 24 24"
              >
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                <circle cx="12" cy="7" r="4"></circle>
              </svg>
            </div>
            <div className="flex flex-col items-center text-center justify-center">
              <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">
                Phoebe Caulfield
              </h2>
              <div className="w-12 h-1 bg-indigo-500 rounded mt-2 mb-4"></div>
              <p className="text-base">
                Raclette knausgaard hella meggs normcore williamsburg enamel pin
                sartorial venmo tbh hot chicken gentrify portland.
              </p>
            </div>
          </div>
          <div className="sm:w-2/3 bg-white max-w-4xl shadow overflow-hidden sm:rounded-lg">
            <div className="px-4 py-5 sm:px-6">
              <h3 className="text-lg leading-6 font-medium text-gray-900">
                User Profile
              </h3>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">
                Details and information about the user.
              </p>
            </div>
            <div className="border-t border-gray-200">
              {/*  */}
              {/* <div className="px-4 py-3 bg-gray-50 text-right sm:px-6"> */}
                {newUser ? (
                    <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                  <Link
                    to="/profile/register"
                    className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
                  >
                    Register Profile
                  </Link>
                  </div>
                ) : (
                  <>  <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 p-4">
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Username
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.username}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Email</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.email}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Bio</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.bio}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      First Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.firstname}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Middle Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.middlename}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Last Name
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.lastname}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Age</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.age}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Religion
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.religion}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Caste</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.caste}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Education
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.education}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Height</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.height}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Weight</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.weight}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Mother Tongue
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.motherTongue}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Marital Status
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.maritalStatus}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Contact Number
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.contactNumber}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">Country</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.country}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">State</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.state}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">City</dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.city}
                    </dd>
                  </div>
                  <div className="sm:col-span-1">
                    <dt className="text-sm font-medium text-gray-500">
                      Occupation
                    </dt>
                    <dd className="mt-1 text-sm text-gray-900">
                      {userProfile.occupation}
                    </dd>
                  </div>
                </dl>
                      <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
                    <Link
                      to="/profile/update"
                      className="flex bg-white items-center text-blue-600 px-3 font-bold hover:bg-gray-100"
                    >
                      Update Profile
                    </Link>
                    </div>
                    </>
                )}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
    // <RegisterProfile/>
  );
};

export default UserProfile;
