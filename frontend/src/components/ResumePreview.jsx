// src/components/ResumePreview.jsx
import React from 'react';

const ResumePreview = ({
  personalInfo,
  educationInfo,
  experience,
  skillSet,
  projects,
  certifications,
  additionalSection
}) => {
  return (
    <div>
      <div className="space-y-6">
        {personalInfo.firstName && (
          <div>
            <h3 className="text-xl font-bold">Personal Info</h3>
            <p>{`${personalInfo.firstName} ${personalInfo.lastName}`}</p>
            <p>{personalInfo.email}</p>
            <p>{personalInfo.phone}</p>
            <p>{personalInfo.address}</p>
            <p>{personalInfo.jobTitle}</p>
          </div>
        )}
        {educationInfo.length > 0 && (
          <div>
            <h3 className="text-xl font-bold">Education</h3>
            {educationInfo.map((edu, index) => (
              <div key={index}>
                <p>{edu.institution}</p>
                <p>{edu.degree}</p>
                <p>{edu.startDate} - {edu.endDate}</p>
              </div>
            ))}
          </div>
        )}
        {experience.length > 0 && (
          <div>
            <h3 className="text-xl font-bold">Experience</h3>
            {experience.map((exp, index) => (
              <div key={index}>
                <p>{exp.company}</p>
                <p>{exp.position}</p>
                <p>{exp.startDate} - {exp.endDate}</p>
                <p>{exp.description}</p>
              </div>
            ))}
          </div>
        )}
        {skillSet.length > 0 && (
          <div>
            <h3 className="text-xl font-bold">Skills</h3>
            <ul>
              {skillSet.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        )}
        {projects.length > 0 && (
          <div>
            <h3 className="text-xl font-bold">Projects</h3>
            {projects.map((project, index) => (
              <div key={index}>
                <p>{project.title}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </div>
        )}
        {certifications.length > 0 && (
          <div>
            <h3 className="text-xl font-bold">Certifications</h3>
            {certifications.map((cert, index) => (
              <div key={index}>
                <p>{cert.name}</p>
                <p>{cert.issuingOrganization}</p>
                <p>{cert.issueDate}</p>
              </div>
            ))}
          </div>
        )}
        {additionalSection.length > 0 && (
          <div>
            <h3 className="text-xl font-bold">Additional Info</h3>
            {additionalSection.map((info, index) => (
              <div key={index}>
                <p>{info}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumePreview;
