import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  toggleCertificationsOpen,
  toggleDetailsOpen,
  addCertification,
  removeCertification,
  updateCertification
} from '../../features/certificationsSlice';

const CertificationsSection = () => {
  const dispatch = useDispatch();
  const { certifications, certificationsOpen, expandedCertification } = useSelector((state) => state.certifications);

  const handleInputChange = (id, key, value) => {
    dispatch(updateCertification({ id, key, value }));
  };

  return (
    <div className="bg-white shadow rounded-md">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={() => dispatch(toggleCertificationsOpen())}
          className="flex items-center justify-between w-full"
          aria-controls="certifications-content"
          aria-expanded={certificationsOpen}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className="hr-icon" style={{ transform: 'translateY(-2px)' }}>
                <path fill="none" fillRule="evenodd" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m13.104 4.177 1.828 3.65c.179.36.524.608.925.665l4.088.589c1.01.145 1.412 1.37.681 2.07l-2.956 2.841c-.29.28-.423.681-.354 1.076l.698 4.01c.172.992-.884 1.749-1.787 1.28l-3.654-1.895a1.248 1.248 0 0 0-1.146 0l-3.654 1.894c-.903.47-1.959-.287-1.786-1.28l.697-4.01a1.203 1.203 0 0 0-.354-1.075l-2.956-2.84c-.731-.701-.33-1.926.68-2.071l4.089-.589c.4-.057.747-.306.926-.664l1.827-3.651c.452-.903 1.756-.903 2.208 0Z"></path>
              </svg>
            </div>
            <span>Certifications</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${certificationsOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {certificationsOpen && (
        <div id="certifications-content" className="p-4">
          <div className="space-y-4">
            {certifications.map((certification) => (
              <div key={certification.id} className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                <h3 className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-gray-600">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.778 18.036h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 12.012h-.064m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 5.993h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 18.036h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 12.012h-.065m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 5.993h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522Z" fill="none"></path>
                      </svg>
                    </div>
                    <button
                      type="button"
                      aria-controls={`details-content-${certification.id}`}
                      aria-expanded={expandedCertification === certification.id}
                      onClick={() => dispatch(toggleDetailsOpen(certification.id))}
                      className="flex items-center w-full"
                    >
                      <div className="truncate w-64">{certification.name || 'Certificate Name'}</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${expandedCertification === certification.id ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="text-red-500"
                    aria-label="Delete"
                    onClick={() => dispatch(removeCertification(certification.id))}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-red-500" fontSize="18px">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.167 9.547-.612 8.377a3.317 3.317 0 0 1-3.308 3.075H9.254a3.318 3.318 0 0 1-3.308-3.076l-.612-8.376M20.515 6.402H3.985M16.021 6.401l-.503-2.476A1.248 1.248 0 0 0 14.313 3h-4.121a1.249 1.249 0 0 0-1.211.925l-.499 2.476M10.352 11.781v4.509m3.38-4.509v4.509" fill="none"></path>
                    </svg>
                  </button>
                </h3>
                {expandedCertification === certification.id && (
                  <div id={`details-content-${certification.id}`} className="p-4">
                    <div className="space-y-4">
                      <div className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-4">
                          <div>
                            <label htmlFor={`certification-name-${certification.id}`} className="block text-gray-700">Certificate Name</label>
                            <input
                              id={`certification-name-${certification.id}`}
                              type="text"
                              placeholder="Game Development Workshop using Python"
                              className="mt-1 block w-full border rounded-md px-3 py-2"
                              value={certification.name || ''}
                              onChange={(e) => handleInputChange(certification.id, 'name', e.target.value)}
                            />
                          </div>

                          <div>
                            <label htmlFor={`certificate-link-${certification.id}`} className="block text-gray-700">Certificate Link</label>
                            <input
                              id={`certificate-link-${certification.id}`}
                              type="text"
                              placeholder="drive.google.com/file/d/1Q2wfmfj"
                              className="mt-1 block w-full border rounded-md px-3 py-2"
                              value={certification.link || ''}
                              onChange={(e) => handleInputChange(certification.id, 'link', e.target.value)}
                            />
                          </div>

                          <div>
                            <label htmlFor={`issued-by-${certification.id}`} className="block text-gray-700">Issued By</label>
                            <input
                              id={`issued-by-${certification.id}`}
                              type="text"
                              placeholder="Coursera"
                              className="mt-1 block w-full border rounded-md px-3 py-2"
                              value={certification.issuedBy || ''}
                              onChange={(e) => handleInputChange(certification.id, 'issuedBy', e.target.value)}
                            />
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
              aria-label="Add Certification"
              className="flex items-center justify-center w-full p-2 border rounded hover:bg-gray-200"
              onClick={() => dispatch(addCertification())}
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
              <span>Add Certification</span>
            </button>
            </div>
        </div>
      )}
    </div>
  );
};

export default CertificationsSection;
