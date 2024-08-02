import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleEducationOpen,
  setLanguageInput,
  setLibraryInput,
  setToolInput,
  setDatabaseInput,
  addLanguage,
  addLibrary,
  addTool,
  addDatabase,
  removeLanguage,
  removeLibrary,
  removeTool,
  removeDatabase
} from '../../features/skillSetSlice';

const SkillSetSection = () => {
  const dispatch = useDispatch();
  const {
    educationOpen,
    languages,
    libraries,
    tools,
    databases,
    languageInput,
    libraryInput,
    toolInput,
    databaseInput
  } = useSelector(state => state.skillSet);

  const handleInputChange = (e, setter) => {
    dispatch(setter(e.target.value));
  };

  const handleKeyDown = (e, input, addSkill, setter) => {
    if (e.key === 'Enter' && input.trim() !== '') {
      dispatch(addSkill(input.trim()));
      dispatch(setter('')); // Clear input field
    }
  };

  return (
    <div className="bg-white shadow rounded-md">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={() => dispatch(toggleEducationOpen())}
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
            <span>SkillSet</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${educationOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {educationOpen && (
        <div id="education-content" className="p-4">
          {/* Languages Section */}
          <label htmlFor="language-input" className="block text-gray-700 mb-2">Add Languages</label>
          <input
            id="language-input"
            type="text"
            value={languageInput}
            onChange={(e) => handleInputChange(e, setLanguageInput)}
            onKeyDown={(e) => handleKeyDown(e, languageInput, addLanguage, setLanguageInput)}
            placeholder="C++, Java, Python"
            className="border p-2 rounded w-full mb-4"
          />
          <div className="flex flex-wrap gap-2 mb-3">
            {languages.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => dispatch(removeLanguage(skill))}
                  className="text-gray-500"
                  aria-label={`Remove ${skill}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 6 12 12M18 6 6 18" fill="none"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Libraries / Frameworks Section */}
          <label htmlFor="library-input" className="block text-gray-700 mb-2">Add Libraries / Frameworks</label>
          <input
            id="library-input"
            type="text"
            value={libraryInput}
            onChange={(e) => handleInputChange(e, setLibraryInput)}
            onKeyDown={(e) => handleKeyDown(e, libraryInput, addLibrary, setLibraryInput)}
            placeholder="JavaScript, React"
            className="border p-2 rounded w-full mb-4"
          />
          <div className="flex flex-wrap gap-2 mb-3">
            {libraries.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => dispatch(removeLibrary(skill))}
                  className="text-gray-500"
                  aria-label={`Remove ${skill}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 6 12 12M18 6 6 18" fill="none"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Tools / Platforms Section */}
          <label htmlFor="tool-input" className="block text-gray-700 mb-2">Add Tools / Platforms</label>
          <input
            id="tool-input"
            type="text"
            value={toolInput}
            onChange={(e) => handleInputChange(e, setToolInput)}
            onKeyDown={(e) => handleKeyDown(e, toolInput, addTool, setToolInput)}
            placeholder="Git, VS Code"
            className="border p-2 rounded w-full mb-4"
          />
          <div className="flex flex-wrap gap-2 mb-3">
            {tools.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => dispatch(removeTool(skill))}
                  className="text-gray-500"
                  aria-label={`Remove ${skill}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 6 12 12M18 6 6 18" fill="none"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>

          {/* Databases Section */}
          <label htmlFor="database-input" className="block text-gray-700 mb-2">Add Databases</label>
          <input
            id="database-input"
            type="text"
            value={databaseInput}
            onChange={(e) => handleInputChange(e, setDatabaseInput)}
            onKeyDown={(e) => handleKeyDown(e, databaseInput, addDatabase, setDatabaseInput)}
            placeholder="SQL, MongoDB"
            className="border p-2 rounded w-full mb-4"
          />
          <div className="flex flex-wrap gap-2 mb-3">
            {databases.map((skill, index) => (
              <div
                key={index}
                className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-1"
              >
                {skill}
                <button
                  type="button"
                  onClick={() => dispatch(removeDatabase(skill))}
                  className="text-gray-500"
                  aria-label={`Remove ${skill}`}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="w-4 h-4">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m6 6 12 12M18 6 6 18" fill="none"></path>
                  </svg>
                </button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SkillSetSection;
