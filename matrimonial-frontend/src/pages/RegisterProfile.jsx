import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import VerifyCookie from "../util/VerifyCookie";
import Cookies from "js-cookie";
import { AppContext } from "../contexts/AppContext";

const RegisterProfile = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);
  const data = VerifyCookie();

  if (data === true) {
    Cookies.remove("token");
    navigate("/login");
  }

  value.setisUserLoggedIn(data.username);
  value.setisUserIDLoggedIn(data.userId);

  const [userData, setUserData] = useState({
    username: "",
    email: data.userId || "",
    bio: "",
    firstname: "",
    middlename: "",
    lastname: "",
    age: "",
    religion: "",
    caste: "",
    education: "",
    height: "",
    weight: "",
    motherTongue: "",
    maritalStatus: "",
    contactNumber: "",
    country: "",
    state: "",
    city: "",
    occupation: "",
  });

  const handleOnChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.log(userData);
    const updatedUserData = {
      ...userData,
      email: data.userId // Ensure this value is valid and available
    };
  
    console.log(updatedUserData);
    try {
      const response = await axios.post(
        "http://localhost:4000/api/users/register",
        updatedUserData,
        { withCredentials: true }
      );
      // console.log("User registered:", response.data);
    } catch (error) {
      console.error("Registration error:", error.response.data);
    }
  };

  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
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
                    Raclette knausgaard hella meggs normcore williamsburg enamel
                    pin sartorial venmo tbh hot chicken gentrify portland.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <div className="container mx-auto flex flex-wrap items-center justify-center">
                  <div className="bg-gray-100 rounded-lg p-8 flex flex-col w-full md:max-w-lg">
                    <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
                      Complete Profile
                    </h2>
                    <form onSubmit={handleSubmit}>
                      {/* <!-- Username --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="username"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Username
                        </label>
                        <input
                          type="text"
                          id="username"
                          name="username"
                          placeholder="Enter your username"
                          value={userData.username}
                          onChange={handleOnChange}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Email -->
                      <div className="relative mb-4">
                        <label
                          htmlFor="email"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          placeholder="Enter your email"
                          onChange={handleOnChange}
                          value={userData.email}
                          required
                          // readOnly  
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                        <input
    type="email"
    id="email"
    name="email"
    value={userData.email}
    readOnly  // Make this input field read-only
    className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
  />
                      </div> */}

                      {/* <!-- Bio --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="bio"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Bio
                        </label>
                        <textarea
                          id="bio"
                          name="bio"
                          placeholder="Tell us something about yourself"
                          onChange={handleOnChange}
                          value={userData.bio}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Firstname --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="firstname"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Firstname
                        </label>
                        <input
                          type="text"
                          id="firstname"
                          name="firstname"
                          placeholder="Enter your first name"
                          onChange={handleOnChange}
                          value={userData.firstname}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Middlename --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="middlename"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Middlename
                        </label>
                        <input
                          type="text"
                          id="middlename"
                          name="middlename"
                          placeholder="Enter your middle name"
                          onChange={handleOnChange}
                          value={userData.middlename}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Lastname --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="lastname"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Lastname
                        </label>
                        <input
                          type="text"
                          id="lastname"
                          name="lastname"
                          placeholder="Enter your last name"
                          onChange={handleOnChange}
                          value={userData.lastname}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="flex space-x-4 mb-1">
                        {/* <!-- Age --> */}
                        <div className="relative mb-4">
                          <label
                            htmlFor="age"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Age
                          </label>
                          <input
                            type="number"
                            id="age"
                            name="age"
                            placeholder="Enter your age"
                            onChange={handleOnChange}
                            value={userData.age}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>

                        {/* <!-- Religion --> */}
                        <div className="relative mb-4">
                          <label
                            htmlFor="religion"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Religion
                          </label>
                          <input
                            type="text"
                            id="religion"
                            name="religion"
                            placeholder="Enter your religion"
                            onChange={handleOnChange}
                            value={userData.religion}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      {/* <!-- Caste --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="caste"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Caste
                        </label>
                        <input
                          type="text"
                          id="caste"
                          name="caste"
                          placeholder="Enter your caste"
                          onChange={handleOnChange}
                          value={userData.caste}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Education --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="education"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Education
                        </label>
                        <input
                          type="text"
                          id="education"
                          name="education"
                          placeholder="Enter your educational background"
                          onChange={handleOnChange}
                          value={userData.education}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>
                      <div className="flex space-x-4 mb-1">
                        {/* <!-- Height --> */}
                        {/* <div className="relative mb-4 w-1/3 px-2"> */}
                        <div className="relative mb-4">
                          <label
                            htmlFor="height"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Height (cm)
                          </label>
                          <input
                            type="number"
                            id="height"
                            name="height"
                            placeholder="Enter your height in cm"
                            onChange={handleOnChange}
                            value={userData.height}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>

                        {/* <!-- Weight --> */}
                        {/* <div className="relative mb-4 w-2/3 px-2"> */}
                        <div className="relative mb-4">
                          <label
                            htmlFor="weight"
                            className="leading-7 text-sm text-gray-600"
                          >
                            Weight (kg)
                          </label>
                          <input
                            type="number"
                            id="weight"
                            name="weight"
                            placeholder="Enter your weight in kg"
                            onChange={handleOnChange}
                            value={userData.weight}
                            className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                          />
                        </div>
                      </div>
                      {/* <!-- Mother Tongue --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="motherTongue"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Mother Tongue
                        </label>
                        <input
                          type="text"
                          id="motherTongue"
                          name="motherTongue"
                          placeholder="Enter your mother tongue"
                          onChange={handleOnChange}
                          value={userData.motherTongue}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Marital Status --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="maritalStatus"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Marital Status
                        </label>
                        <select
                          id="maritalStatus"
                          name="maritalStatus"
                          onChange={handleOnChange}
                          value={userData.maritalStatus}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        >
                          {/* <option disabled selected value>
                            {" "}
                            -- select an option --{" "}
                          </option> */}
                          <option value="">-- select an option --</option>
                          <option value="Single">Single</option>
                          <option value="Married">Married</option>
                          <option value="Divorced">Divorced</option>
                          <option value="Widowed">Widowed</option>
                        </select>
                      </div>

                      {/* <!-- Contact Number --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="contactNumber"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Contact Number
                        </label>
                        <input
                          type="text"
                          id="contactNumber"
                          name="contactNumber"
                          placeholder="Enter your contact number"
                          onChange={handleOnChange}
                          value={userData.contactNumber}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Country --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="country"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Country
                        </label>
                        <input
                          type="text"
                          id="country"
                          name="country"
                          placeholder="Enter your country"
                          onChange={handleOnChange}
                          value={userData.country}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- State --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="state"
                          className="leading-7 text-sm text-gray-600"
                        >
                          State
                        </label>
                        <input
                          type="text"
                          id="state"
                          name="state"
                          placeholder="Enter your state"
                          onChange={handleOnChange}
                          value={userData.state}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- City --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="city"
                          className="leading-7 text-sm text-gray-600"
                        >
                          City
                        </label>
                        <input
                          type="text"
                          id="city"
                          name="city"
                          placeholder="Enter your city"
                          onChange={handleOnChange}
                          value={userData.city}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      {/* <!-- Occupation --> */}
                      <div className="relative mb-4">
                        <label
                          htmlFor="occupation"
                          className="leading-7 text-sm text-gray-600"
                        >
                          Occupation
                        </label>
                        <input
                          type="text"
                          id="occupation"
                          name="occupation"
                          placeholder="Enter your occupation"
                          onChange={handleOnChange}
                          value={userData.occupation}
                          className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                        />
                      </div>

                      <button
                        type="submit"
                        className="text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                      >
                        Submit
                      </button>
                      <div className="text-xs text-gray-500 mt-3">
                        {/* Already have an account? <Link to={"/login"}>Login</Link> */}
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RegisterProfile;
