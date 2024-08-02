import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setEducationInfo, addEducation, removeEducation } from '../../features/educationInfoSlice ';

const EducationSection = () => {
  const [educationOpen, setEducationOpen] = useState(false);
  const [detailsOpen, setDetailsOpen] = useState({});
  const educations = useSelector((state) => state.educationInfo);
  const dispatch = useDispatch();

  const toggleEducationOpen = () => setEducationOpen(!educationOpen);
  const toggleDetailsOpen = (id) => setDetailsOpen((prev) => ({ ...prev, [id]: !prev[id] }));

  const handleInputChange = (index, field, value) => {
    dispatch(setEducationInfo({ index, field, value }));
  };

  return (
    <div className="bg-white shadow rounded-md">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={toggleEducationOpen}
          className="flex items-center justify-between w-full"
          aria-controls="education-content"
          aria-expanded={educationOpen}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 24" className="text-gray-600">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.104 6.249v11.358a3.393 3.393 0 0 1 3.393-3.393h8.754c.672 0 1.217-.543 1.217-1.216V4.216c0-.672-.545-1.216-1.217-1.216H7.354a3.25 3.25 0 0 0-3.25 3.249Z" fill="none"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4.105 17.608A3.393 3.393 0 0 0 7.498 21h11.748c.672 0 1.217-.544 1.217-1.217V7.115M7.826 17.621h9.455" fill="none"></path>
              </svg>
            </div>
            <span>Education</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${educationOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {educationOpen && (
        <div id="education-content" className="p-4">
          <div className="space-y-4">
            {educations.map((education, index) => (
              <div key={index} className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                <h3 className="c-hxvpuA">
                  <div className="flex items-center justify-between w-full">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        aria-controls={`details-content-${index}`}
                        aria-expanded={detailsOpen[index]}
                        onClick={() => toggleDetailsOpen(index)}
                        className="flex items-center w-full"
                      >
                        <div className="hr-body-03 hr-m-l-2" style={{ display: 'block', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', width: '250px', textAlign: 'left' }}>
                          {education.institution || 'Institute Name'}
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`hr-m-l-0.5 hr-shrink-0 transition-transform ${detailsOpen[index] ? 'rotate-180' : ''}`} aria-hidden="true">
                          <path fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
                        </svg>
                      </button>
                    </div>
                    <button
                      className="text-red-500"
                      aria-label="Delete"
                      onClick={() => dispatch(removeEducation(index))}
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 25 24" className="text-red-500">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.167 9.547-.612 8.377a3.317 3.317 0 0 1-3.308 3.075H9.254a3.318 3.318 0 0 1-3.308-3.076l-.612-8.376M20.515 6.402H3.985M16.021 6.401l-.503-2.476A1.248 1.248 0 0 0 14.313 3h-4.121a1.249 1.249 0 0 0-1.211.925l-.499 2.476M10.352 11.781v4.509m3.38-4.509v4.509" fill="none"></path>
                      </svg>
                    </button>
                  </div>
                </h3>
                {detailsOpen[index] && (
                  <div id={`details-content-${index}`} className="p-4">
                    <div className="space-y-4">
                      <div className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-4">
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`institution-${index}`} className="block text-gray-700">Institution</label>
                              <input
                                id={`institution-${index}`}
                                type="text"
                                placeholder="XYZ University"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={education.institution}
                                onChange={(e) => handleInputChange(index, 'institution', e.target.value)}
                              />
                            </div>
                            <div>
                              <label htmlFor={`location-${index}`} className="block text-gray-700">Location</label>
                              <input
                                id={`location-${index}`}
                                type="text"
                                placeholder="New Delhi, India"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={education.location}
                                onChange={(e) => handleInputChange(index, 'location', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`degree-${index}`} className="block text-gray-700">Degree Type</label>
                              <input
                                id={`degree-${index}`}
                                type="text"
                                placeholder="Bachelors/Masters/Doctorate"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={education.degree}
                                onChange={(e) => handleInputChange(index, 'degree', e.target.value)}
                              />
                            </div>
                            <div>
                              <label htmlFor={`studyType-${index}`} className="block text-gray-700">Field of Study</label>
                              <input
                                id={`studyType-${index}`}
                                type="text"
                                placeholder="Computer Science / Electrical Engineering"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={education.field}
                                onChange={(e) => handleInputChange(index, 'field', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`startDate-${index}`} className="block text-gray-700">Start Month / Year</label>
                              <input
                                id={`startDate-${index}`}
                                type="text"
                                placeholder="July 2019"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={education.startDate}
                                onChange={(e) => handleInputChange(index, 'startDate', e.target.value)}
                              />
                            </div>
                            <div>
                              <label htmlFor={`completionDate-${index}`} className="block text-gray-700">Grad Month / Year</label>
                              <input
                                id={`completionDate-${index}`}
                                type="text"
                                placeholder="July 2023"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={education.endDate}
                                onChange={(e) => handleInputChange(index, 'endDate', e.target.value)}
                              />
                            </div>
                          </div>
                          <div className="flex justify-between space-x-4">
                            <div>
                              <label htmlFor={`scoreType-${index}`} className="block text-gray-700">Scores</label>
                              <select
                                id={`scoreType-${index}`}
                                value={education.scoreType}
                                onChange={(e) => handleInputChange(index, 'scoreType', e.target.value)}
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                              >
                                <option value="">Select </option>
                                <option value="GPA">GPA</option>
                                <option value="CGPA">CGPA</option>
                                <option value="PERCENTAGE">PERCENTAGE</option>
                              </select>
                            </div>
                            <div>
                              <label htmlFor={`score-${index}`} className="block text-gray-700">Score</label>
                              <input
                                id={`score-${index}`}
                                type="text"
                                placeholder="4.5"
                                className="mt-1 block w-full border rounded-md px-3 py-2"
                                value={education.score}
                                onChange={(e) => handleInputChange(index, 'score', e.target.value)}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
            {educations.length < 4 && (
              <button
                type="button"
                aria-label="Add Education"
                className="flex items-center justify-center w-full p-2 border rounded hover:bg-gray-200"
                onClick={() => dispatch(addEducation())}
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
                <span>Add Education</span>
              </button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default EducationSection;
