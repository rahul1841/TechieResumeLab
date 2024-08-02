import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleProjectsOpen, toggleDetailsOpen, addProject, removeProject, updateProject } from '../../features/projectsSlice';

const ProjectsSection = () => {
  const dispatch = useDispatch();
  const { projects, expandedProject, projectsOpen } = useSelector((state) => state.projects);

  const handleToggleProjectsOpen = () => dispatch(toggleProjectsOpen());
  const handleToggleDetailsOpen = (id) => dispatch(toggleDetailsOpen(id));
  const handleAddProject = () => dispatch(addProject());
  const handleRemoveProject = (id) => dispatch(removeProject(id));
  const handleInputChange = (id, key, value) => dispatch(updateProject({ id, key, value }));

  return (
    <div className="bg-white shadow rounded-md">
      <div className="flex items-center justify-between p-4 border-b">
        <button
          type="button"
          onClick={handleToggleProjectsOpen}
          className="flex items-center justify-between w-full"
          aria-controls="projects-content"
          aria-expanded={projectsOpen}
        >
          <div className="flex items-center gap-2">
            <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
              <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="hr-icon" style={{ transform: 'translateY(-2px)' }}>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16.97 3.283H7.029A4.029 4.029 0 0 0 3 7.313v5.456a4.029 4.029 0 0 0 4.028 4.029h9.943A4.03 4.03 0 0 0 21 12.768V7.313a4.03 4.03 0 0 0-4.03-4.029Z" clipRule="evenodd" fill="none"></path>
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M7.055 20.717h9.888M9.883 16.8l-.637 3.918M14.115 16.8l.637 3.918" fill="none"></path>
              </svg>
            </div>
            <span>Projects</span>
          </div>
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${projectsOpen ? 'rotate-180' : ''}`}>
            <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
          </svg>
        </button>
      </div>
      {projectsOpen && (
        <div id="projects-content" className="p-4">
          <div className="space-y-4">
            {projects.map((project) => (
              <div key={project.id} className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                <h3 className="flex items-center justify-between w-full">
                  <div className="flex items-center gap-2">
                    <div className="flex items-center justify-center w-8 h-8 bg-gray-200 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-gray-600">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M8.778 18.036h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 12.012h-.064m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM8.778 5.993h-.064m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 18.036h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 12.012h-.065m.05.26a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522ZM15.25 5.993h-.065m.05.259a.26.26 0 1 1 0-.522.26.26 0 0 1 0 .522Z" fill="none"></path>
                      </svg>
                    </div>
                    <button
                      type="button"
                      aria-controls={`details-content-${project.id}`}
                      aria-expanded={expandedProject === project.id}
                      onClick={() => handleToggleDetailsOpen(project.id)}
                      className="flex items-center w-full"
                    >
                      <div className="truncate w-64">{project.name || 'Project Name'}</div>
                      <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24" className={`transition-transform ${expandedProject === project.id ? 'rotate-180' : ''}`} aria-hidden="true">
                        <path fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19 8.5-7 7-7-7"></path>
                      </svg>
                    </button>
                  </div>
                  <button
                    className="text-red-500"
                    aria-label="Delete"
                    onClick={() => handleRemoveProject(project.id)}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" fill="none" viewBox="0 0 24 24" className="text-red-500" fontSize="18px">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="m19.167 9.547-.612 8.377a3.317 3.317 0 0 1-3.308 3.075H9.254a3.318 3.318 0 0 1-3.308-3.076l-.612-8.376M20.515 6.402H3.985M16.021 6.401l-.503-2.476A1.248 1.248 0 0 0 14.313 3h-4.121a1.249 1.249 0 0 0-1.211.925l-.499 2.476M10.352 11.781v4.509m3.38-4.509v4.509" fill="none"></path>
                    </svg>
                  </button>
                </h3>
                {expandedProject === project.id && (
                  <div id={`details-content-${project.id}`} className="p-4">
                    <div className="space-y-4">
                      <div className="relative p-4 border rounded-md shadow-sm bg-gray-50">
                        <div className="space-y-4">
                          <div>
                            <label htmlFor={`project-name-${project.id}`} className="block text-gray-700">Project Name</label>
                            <input 
                              id={`project-name-${project.id}`} 
                              type="text" 
                              value={project.name} 
                              onChange={(e) => handleInputChange(project.id, 'name', e.target.value)}
                              placeholder="Linux Kernel etc." 
                              className="mt-1 block w-full border rounded-md px-3 py-2" 
                            />
                          </div>

                          <div>
                            <label htmlFor={`technologies-${project.id}`} className="block text-gray-700">Technologies Used</label>
                            <input 
                              id={`technologies-${project.id}`} 
                              type="text" 
                              value={project.technologies}
                              onChange={(e) => handleInputChange(project.id, 'technologies', e.target.value)}
                              placeholder="JavaScript, Firebase, React (separated by commas)" 
                              className="mt-1 block w-full border rounded-md px-3 py-2" 
                            />
                          </div>

                          <div>
                            <label htmlFor={`project-link-${project.id}`} className="block text-gray-700">Project Link / Github Repository</label>
                            <input 
                              id={`project-link-${project.id}`} 
                              type="text" 
                              value={project.link}
                              onChange={(e) => handleInputChange(project.id, 'link', e.target.value)}
                              placeholder="github.com/your-username/repository" 
                              className="mt-1 block w-full border rounded-md px-3 py-2" 
                            />
                          </div>

                          <div>
                            <label htmlFor={`description-${project.id}`} className="block text-gray-700">Description</label>
                            <textarea 
                              id={`description-${project.id}`} 
                              value={project.description}
                              onChange={(e) => handleInputChange(project.id, 'description', e.target.value)}
                              placeholder="" 
                              className="mt-1 block w-full border rounded-md px-3 py-2"
                            ></textarea>
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
              aria-label="Add Project"
              className="flex items-center justify-center w-full p-2 border rounded hover:bg-gray-200"
              onClick={handleAddProject}
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
              <span>Add Project</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectsSection;
