// src/components/ExperienceSection.jsx
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleExperienceOpen, toggleDetailsOpen, addExperience, removeExperience, updateExperience } from '../../features/experienceSlice';

const ExperienceSection = () => {
  const dispatch = useDispatch();
  const experiences = useSelector((state) => state.experience.experiences);
  const expandedExperience = useSelector((state) => state.experience.expandedExperience);
  const experienceOpen = useSelector((state) => state.experience.experienceOpen);

  const handleInputChange = (id, key, value) => {
    dispatch(updateExperience({ id, key, value }));
  };

  return (
    <div className="bg-white shadow rounded-md">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={() => dispatch(toggleExperienceOpen())}
          className="flex items-center justify-between w-full"
          aria-controls="experience-content"
          aria-expanded={experienceOpen}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 24" className="text-gray-600">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M18.314 5.69a2.971 2.971 0 0 1 2.97 2.97v3.358a18.046 18.046 0 0 1-9.006 2.248 18.005 18.005 0 0 1-8.995-2.248V8.659a2.97 2.97 0 0 1 2.97-2.97h12.06Z" fill="none"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12.283 16.735v-2.47M15.69 5.686v-.472a2.153 2.153 0 0 0-2.151-2.152h-2.513a2.153 2.153 0 0 0-2.151 2.152v.472M3.307 15.574l.184 2.442a3.157 3.157 0 0 0 3.146 2.921H17.93a3.157 3.157 0 0 0 3.146-2.92l.183-2.443" fill="none"></path>
              </svg>
            </div>
            <span>Experience</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${experienceOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {experienceOpen && (
        <div id="experience-content" className="p-4">
          <div className="space-y-4">
            {experiences.map((experience) => (
              <div key={experience.id} className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                <h3 className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-gray-600">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.778 18.036h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 12.012h-.064m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 5.993h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 18.036h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 12.012h-.065m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 5.993h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522Z" fill="none"></path>
                      </svg>
                    </div>
                    <button
                      type="button"
                      aria-controls={`details-content-${experience.id}`}
                      aria-expanded={expandedExperience === experience.id}
                      onClick={() => dispatch(toggleDetailsOpen(experience.id))}
                      className="flex items-center w-full"
                    >
                      <div className="truncate w-64">{experience.employer || 'Company Name'}</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${expandedExperience === experience.id ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="text-red-500"
                    aria-label="Delete"
                    onClick={() => dispatch(removeExperience(experience.id))}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-red-500" fontSize="18px">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.167 9.547-.612 8.377a3.317 3.317 0 0 1-3.308 3.075H9.254a3.318 3.318 0 0 1-3.308-3.076l-.612-8.376M20.515 6.402H3.985M16.021 6.401l-.503-2.476A1.248 1.248 0 0 0 14.313 3h-4.121a1.249 1.249 0 0 0-1.211.925l-.499 2.476M10.352 11.781v4.509m3.38-4.509v4.509" fill="none"></path>
                    </svg>
                  </button>
                </h3>
                {expandedExperience === experience.id && (
                  <div id={`details-content-${experience.id}`} className="p-4">
                    <div className="space-y-4">
                      <div className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-4">
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`employer-${experience.id}`} className="block text-gray-700">Employer</label>
                              <input
                                id={`employer-${experience.id}`}
                                type="text"
                                placeholder="Amazon"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={experience.employer || ''}
                                onChange={(e) => handleInputChange(experience.id, 'employer', e.target.value)}
                              />
                            </div>
                            <div>
                              <label htmlFor={`jobTitle-${experience.id}`} className="block text-gray-700">Job Title</label>
                              <input
                                id={`jobTitle-${experience.id}`}
                                type="text"
                                placeholder="SDE-1"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={experience.jobTitle || ''}
                                onChange={(e) => handleInputChange(experience.id, 'jobTitle', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`startDate-${experience.id}`} className="block text-gray-700">Start Month / Year</label>
                              <input
                                id={`startDate-${experience.id}`}
                                type="text"
                                placeholder="July 2019"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={experience.startDate || ''}
                                onChange={(e) => handleInputChange(experience.id, 'startDate', e.target.value)}
                              />
                            </div>
                            <div>
                              <label htmlFor={`endDate-${experience.id}`} className="block text-gray-700">End Month / Year</label>
                              <input
                                id={`endDate-${experience.id}`}
                                type="text"
                                placeholder="July 2023"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={experience.endDate || ''}
                                onChange={(e) => handleInputChange(experience.id, 'endDate', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`location-${experience.id}`} className="block text-gray-700">Location</label>
                              <input
                                id={`location-${experience.id}`}
                                type="text"
                                placeholder="Gurgaon"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={experience.location || ''}
                                onChange={(e) => handleInputChange(experience.id, 'location', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`description-${experience.id}`} className="block text-gray-700">Description</label>
                              <textarea
                                id={`description-${experience.id}`}
                                placeholder=""
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={experience.description || ''}
                                onChange={(e) => handleInputChange(experience.id, 'description', e.target.value)}
                              ></textarea>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            <button
              type="button"
              aria-label="Add Link"
              className="flex items-center justify-center w-full p-2 border rounded hover:bg-gray-200"
              onClick={() => dispatch(addExperience())}
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
              <span>Add Experience</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ExperienceSection;
