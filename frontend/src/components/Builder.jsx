
import React from 'react';
import PersonalInfoSection from './DataSections/PersonalInfoSection';
import EducationSection from './DataSections/EducationSection';
import ExperienceSection from './DataSections/ExperienceSection';
import SkillSetSection from './DataSections/SkillSetSection';
import ProjectsSection from './DataSections/ProjectsSection';
import CertificationsSection from './DataSections/CertificationsSection';
import AdditionalSection from './DataSections//AdditionalSection';
import { useSelector } from 'react-redux';
import { generateLatex } from '../utils/generateLatex';

const Builder = () => {
  const personalInfo = useSelector((state) => state.personalInfo);
  const educationInfo = useSelector((state) => state.educationInfo);
  const experience = useSelector((state) => state.experience.experiences); 
  const skillSet = useSelector((state) => state.skillSet);
  const projects = useSelector((state) => state.projects);
  const certifications = useSelector(state => state.certifications.certifications);
  const honorsAwards = useSelector((state) => state.additionalSection.honorsAwards);

  const handleDownload = () => {
    const latexCode = generateLatex(personalInfo, educationInfo, experience, skillSet, projects, certifications, honorsAwards);
    const blob = new Blob([latexCode], { type: 'application/x-latex' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = 'resume.tex';
    link.click();
  };

  return (
    <div className="flex">
      {/* Left Section */}
      <div className="w-1/3 p-4 border-r border-gray-200">
        <PersonalInfoSection />
        <EducationSection />
        <ExperienceSection />
        <SkillSetSection />
        <ProjectsSection />
        <CertificationsSection />
        <AdditionalSection />
      </div>

      {/* Right Section */}
      <div className="w-2/3 p-4">
        <h2 className="text-2xl font-semibold">Other Sections</h2>
        <button
          type="button"
          className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md"
          onClick={handleDownload}
        >
          Download LaTeX
        </button>
      </div>
    </div>
  );
};

export default Builder;



