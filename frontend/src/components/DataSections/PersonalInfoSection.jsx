import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPersonalInfo, setLink, addLink, removeLink } from '../../features/personalInfoSlice';

const PersonalInfoSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const personalInfo = useSelector((state) => state.personalInfo);
  const dispatch = useDispatch();

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    dispatch(setPersonalInfo({ [id]: value }));
  };

  const handleLinkChange = (index, field, value) => {
    dispatch(setLink({ index, field, value }));
  };

  const handleAddLink = () => {
    dispatch(addLink());
  };

  const handleRemoveLink = (index) => {
    dispatch(removeLink(index));
  };

  return (
    <div className="bg-white shadow rounded-md">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={handleToggle}
          className="flex items-center justify-between w-full"
          aria-controls="personal-info-content"
          aria-expanded={isOpen}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                fill="none"
                viewBox="0 0 25 24"
                className="text-gray-600"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M5.941 20c0-2.109 1.664-4.734 6.46-4.734 4.793 0 6.457 2.606 6.457 4.716"
                ></path>
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="1.5"
                  d="M16.526 8.126a4.126 4.126 0 1 1-8.251 0 4.126 4.126 0 0 1 8.25 0Z"
                ></path>
              </svg>
            </div>
            <span>Personal Info</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${isOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {isOpen && (
        <div id="personal-info-content" className="p-4">
          <div className="space-y-4">
            <div className="flex flex-col md:flex-row justify-between gap-2 my-2">
              <div className="w-full">
                <label htmlFor="firstName" className="block mb-1 text-gray-700">
                  <span>First Name</span>
                </label>
                <div className="flex items-center">
                  <input
                    id="firstName"
                    type="text"
                    placeholder="John"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={personalInfo.firstName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="lastName" className="block mb-1 text-gray-700">
                  <span>Last Name</span>
                </label>
                <div className="flex items-center">
                  <input
                    id="lastName"
                    type="text"
                    placeholder="Doe"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={personalInfo.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 my-2">
              <div className="w-full">
                <label htmlFor="email" className="block mb-1 text-gray-700">
                  <span>Email</span>
                </label>
                <div className="flex items-center">
                  <input
                    id="email"
                    type="text"
                    placeholder="john.doe@example.com"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={personalInfo.email}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="phone" className="block mb-1 text-gray-700">
                  <span>Phone</span>
                </label>
                <div className="flex items-center">
                  <input
                    id="phone"
                    type="text"
                    placeholder="+1 206 555 0100"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={personalInfo.phone}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row justify-between gap-2 my-2">
              <div className="w-full">
                <label htmlFor="address" className="block mb-1 text-gray-700">
                  <span>Address</span>
                </label>
                <div className="flex items-center">
                  <input
                    id="address"
                    type="text"
                    placeholder="123 Main Street, New York, NY 10030"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={personalInfo.address}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="w-full">
                <label htmlFor="jobTitle" className="block mb-1 text-gray-700">
                  <span>Job Title</span>
                </label>
                <div className="flex items-center">
                  <input
                    id="jobTitle"
                    type="text"
                    placeholder="Full-Stack Web Developer"
                    className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    value={personalInfo.jobTitle}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-4">
                Links <span className="text-base">({personalInfo.links.length} / 5)</span>
              </h4>
              {personalInfo.links.map((link, index) => (
                <div className="flex justify-between gap-4 my-4" key={index}>
                  <div className="flex-grow">
                    <div className="flex items-center">
                      <input
                        id={`url-${index}`}
                        aria-label="url"
                        type="text"
                        placeholder="Your link here"
                        className="w-full p-2 border rounded"
                        value={link.url}
                        onChange={(e) => handleLinkChange(index, 'url', e.target.value)}
                      />
                    </div>
                  </div>
                  <div className="flex-grow">
                    <div className="relative">
                      <select
                        id={`network-${index}`}
                        aria-label="Select Link Type"
                        className="w-full p-2 border rounded"
                        value={link.network}
                        onChange={(e) => handleLinkChange(index, 'network', e.target.value)}
                      >
                        <option value="GitHub">GitHub</option>
                        <option value="LeetCode">LeetCode</option>
                        <option value="LinkedIn">LinkedIn</option>
                        <option value="Codechef">Codechef</option>
                        <option value="Hackerrank">Hackerrank</option>
                        <option value="Codeforces">Codeforces</option>
                        <option value="Portfolio">Portfolio</option>
                        <option value="Blog">Blog</option>
                        <option value="Twitter">Twitter</option>
                        <option value="Facebook">Facebook</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="p-2 text-red-500"
                    onClick={() => handleRemoveLink(index)}
                    aria-label="Delete Link"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="1em"
                      height="1em"
                      fill="none"
                      viewBox="0 0 24 24"
                      className="text-red-500"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="M9.5 6V5.25A2.25 2.25 0 0 1 11.75 3h2.5A2.25 2.25 0 0 1 16.5 5.25V6m2.25 0v12A3.75 3.75 0 0 1 15 21.75H9A3.75 3.75 0 0 1 5.25 18V6h13.5Zm-10 3.75v6.5m4-6.5v6.5"
                      ></path>
                    </svg>
                  </button>
                </div>
              ))}
              {personalInfo.links.length < 5 && (
                <button
                  type="button"
                  aria-label="Add Link"
                  className="flex items-center justify-center w-full p-2 border rounded hover:bg-gray-200"
                  onClick={handleAddLink}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18px" height="18px" fill="none" viewBox="0 0 24 24" className="mr-2">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="1.5"
                      d="M6 12h12M12 6v12"
                    />
                  </svg>
                  <span>Add Link</span>
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default PersonalInfoSection;
