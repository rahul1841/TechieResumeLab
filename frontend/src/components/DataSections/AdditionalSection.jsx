import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleSectionOpen, addHonorAward, removeHonorAward, updateHonorAward } from '../../features/additionalSectionSlice';
import { v4 as uuidv4 } from 'uuid'; // Import UUID to generate unique ids

const AdditionalSection = () => {
  const dispatch = useDispatch();
  const { sectionOpen, honorsAwards } = useSelector((state) => state.additionalSection);

  const handleToggleSectionOpen = () => {
    dispatch(toggleSectionOpen());
  };

  const handleAddHonorAward = () => {
    dispatch(addHonorAward({ id: uuidv4(), name: '' })); // Generate unique id
  };

  const handleRemoveHonorAward = (id) => {
    dispatch(removeHonorAward(id));
  };

  return (
    <div className="bg-white shadow rounded-md">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={handleToggleSectionOpen}
          className="flex items-center justify-between w-full"
          aria-controls="additional-content"
          aria-expanded={sectionOpen}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="hr-icon" style={{ transform: 'translateY(-2px)' }}>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 3a6.217 6.217 0 1 1-.001 12.433 6.217 6.217 0 0 1 0-12.433Z" clipRule="evenodd" fill="none"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m7.547 13.54.018 6.633a.827.827 0 0 0 1.255.707l2.764-1.658a.827.827 0 0 1 .852 0l2.76 1.656a.828.828 0 0 0 1.254-.71V13.53" fill="none"></path>
              </svg>
            </div>
            <span>Additional</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${sectionOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {sectionOpen && (
        <div id="additional-content" className="p-4">
          <div className="space-y-4">
            {honorsAwards.map((item) => (
              <div key={item.id} className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                <h3 className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-gray-600">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.778 18.036h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 12.012h-.064m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 5.993h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 18.036h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 12.012h-.065m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 5.993h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522Z" fill="none"></path>
                      </svg>
                    </div>
                    <input
                      id={`item-name-${item.id}`}
                      type="text"
                      placeholder="Won X hackathon at X institute"
                      className="mt-1 block w-full border rounded-md px-3 py-2"
                      value={item.name}
                      onChange={(e) =>
                        dispatch(updateHonorAward({ index: honorsAwards.findIndex(honor => honor.id === item.id), value: e.target.value }))
                      }
                    />
                  </div>
                  <button
                    className="text-red-500"
                    aria-label="Delete"
                    onClick={() => handleRemoveHonorAward(item.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-red-500" fontSize="18px">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.167 9.547-.612 8.377a3.317 3.317 0 0 1-3.308 3.075H9.254a3.318 3.318 0 0 1-3.308-3.076l-.612-8.376M20.515 6.402H3.985M16.021 6.401l-.503-2.476A1.248 1.248 0 0 0 14.313 3h-4.121a1.249 1.249 0 0 0-1.211.925l-.499 2.476M10.352 11.781v4.509m3.38-4.509v4.509" fill="none"></path>
                    </svg>
                  </button>
                </h3>
              </div>
            ))}

            <button
              type="button"
              aria-label="Add Honor / Award"
              className="flex items-center justify-center w-full p-2 border rounded hover:bg-gray-200"
              onClick={handleAddHonorAward}
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
              <span>Add Honor / Award</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdditionalSection;
