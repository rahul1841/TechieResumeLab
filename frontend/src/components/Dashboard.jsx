import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedTemplate, setSelectedTemplate] = useState('');

  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/dashboard/builder'); // Replace '/desired-path' with the target route
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTemplateSelect = (template) => {
    setSelectedTemplate(template);
  };

  return (
    <div className="p-0">
      <div className="w-full bg-gray-100 py-6 shadow-md flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold ml-6">Welcome Back!</h1>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 h-12 mr-6"
          onClick={openModal}
        >
          Create New
        </button>
      </div>
      <div
        className="mt-8 min-w-[300px] min-h-[420px] w-[17.5%] flex flex-col p-8 border-2 border-gray-400 rounded-lg bg-transparent cursor-pointer transition-all duration-200 transform hover:scale-105 justify-center items-center"
        onClick={openModal}
      >
        <img
          src="https://cdn.hackerresume.io/static/media/new-icon.a7d066906be440be633b55b723eea372.svg"
          alt="Create new Resume"
          className="mb-4"
        />
        <button
          className="mt-2 py-3 px-7 rounded bg-[#738f93] text-white font-extrabold transition-all duration-200 ease-in-out hover:bg-opacity-80"
        >
          Create New
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-7 px-14">
            <form>
              <div className="space-y-6">
                <div className="py-4">
                  <h3 className="text-lg font-bold text-gray-900">Select a template</h3>
                  <p className="text-gray-600">Choose a template and start creating a resume with us.</p>
                </div>
                <div className="flex justify-between space-x-4">
                  <div
                    className={`flex flex-col items-center border-2 rounded p-4 cursor-pointer ${
                      selectedTemplate === 'Classic' ? 'border-gray-500 shadow-lg' : 'border-gray-200'
                    }`}
                    onClick={() => handleTemplateSelect('Classic')}
                  >
                    <img
                      height=""
                      width="300"
                      src="https://cdn.hackerresume.io/template1.png"
                      alt="Classic"
                      className="border-2 border-gray-100"
                    />
                    <span className="mt-2 text-gray-700">Classic</span>
                  </div>
                  <div
                    className={`flex flex-col items-center border-2 rounded p-4 cursor-pointer ${
                      selectedTemplate === 'Modern' ? 'border-gray-500 shadow-lg' : 'border-gray-200'
                    }`}
                    onClick={() => handleTemplateSelect('Modern')}
                  >
                    <img
                      height=""
                      width="300"
                      src="https://cdn.hackerresume.io/template4.png"
                      alt="Modern"
                      className="border-2 border-gray-100"
                    />
                    <span className="mt-12 text-gray-700">Modern</span>
                  </div>
                </div>
                <div className="flex justify-end space-x-3 pt-2">
                  <button
                    type="button"
                    className="bg-gray-500 text-white py-1 px-2 rounded hover:bg-gray-700 transition-all"
                    onClick={closeModal}
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"

                    className="bg-green-500 text-white py-1 px-2 rounded hover:bg-green-700 transition-all"
                    onClick={handleClick}
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;
