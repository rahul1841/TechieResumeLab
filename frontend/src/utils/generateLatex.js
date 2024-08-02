
export const generateLatex = (personalInfo, educationInfo, experience, skillSet, projects, certifications = [], honorsAwards = []) => {
    const { firstName, lastName, email, phone, address, jobTitle, links } = personalInfo;

    const formatEducation = (education) => {
        const field = education.field ? `(${education.field})` : '';
        const degree = education.degree ? education.degree : '';
        const score = education.scoreType.toLowerCase() === 'percentage' ? `${education.score}\\%` : `${education.score}`;
        const formattedScoreType = education.scoreType.toLowerCase() === 'percentage' ? 'Percentage' : education.scoreType;

        return `
\\textbf{${education.institution}}\\hfill ${education.location}\\\\
${degree} ${field} \\hfill ${education.startDate} - ${education.endDate}\\\\
\\textsl{${formattedScoreType}: ${score}}\\\\
\\vspace{2mm}
        `;
    };

    const formatExperience = (experience) => {
        return `
\\textbf{${experience.employer}}\\textbf{ | ${experience.jobTitle}} \\hfill ${experience.location} | ${experience.startDate} - ${experience.endDate}\\\\
\\vspace{-3mm}
\\begin{itemize} \\itemsep -3pt
${experience.description ? experience.description.split('\n').map(line => `\\item[] ${line}`).join('\n') : ''}
\\end{itemize}
        `;
    };

    const formatSkillSet = (skillSet) => {
        const { languages, libraries, tools, databases } = skillSet;

        const formatSkills = (skills, category) => {
            return skills.length > 0 ? `${category}: & ${skills.join(', ')} \\\\\n` : '';
        };

        return `
${formatSkills(languages, 'Programming Languages')}
${formatSkills(libraries, 'Libraries/Frameworks')}
${formatSkills(tools, 'Tools/Platforms')}
${formatSkills(databases, 'Databases')}
        `;
    };

    const formatProjects = (projects) => {
        return projects.map((project) => `
\\textbf{${project.name}}\\textbf{ | \\href{${project.link}}{Link}}\\hfill\\textsl{${project.technologies}}\\\\
\\vspace{-3mm}
\\begin{itemize} \\itemsep -3pt
${project.description ? project.description.split('\n').map(line => `\\item[] ${line}`).join('\n') : ''}
\\end{itemize}
\\vspace{3mm}
        `).join('\n');
    };

    const formatCertifications = (certifications) => {
        return certifications.map((cert) => `
• ${cert.name} - \\textbf{\\href{${cert.link}}{${cert.issuedBy}}}\\\\
\\vspace*{1mm}
        `).join('\n') + '\\vspace{2mm}';
    };

    const formatHonorsAwards = (honorsAwards) => {
        return honorsAwards.map((honor) => `
• ${honor.name}\\\\
\\vspace*{1mm}
        `).join('\n');
    };

    return `
\\documentclass[a4paper]{article}
\\usepackage{fullpage}
\\usepackage{amsmath}
\\usepackage{amssymb}
\\usepackage{textcomp}
\\usepackage[utf8]{inputenc}
\\usepackage[T1]{fontenc}
\\usepackage[hidelinks]{hyperref}
\\usepackage[left=2cm, right=2cm, top=2cm]{geometry}
\\usepackage{longtable}
\\textheight=10in
\\pagestyle{empty}
\\raggedright

\\def\\bull{\\vrule height 0.8ex width .7ex depth -.1ex }

% DEFINITIONS FOR RESUME %%%%%%%%%%%%%%%%%%%%%%%

\\newcommand{\\area} [2] {
    \\vspace*{-9pt}
    \\begin{verse}
        \\textbf{#1}   #2
    \\end{verse}
}

\\newcommand{\\lineunder} {
    \\vspace*{-8pt} \\\\
    \\hspace*{-18pt} \\hrulefill \\\\
}

\\newcommand{\\header} [1] {
    {\\hspace*{-18pt}\\vspace*{6pt} \\textsc{#1}}
    \\vspace*{-6pt} \\lineunder
}

\\newcommand{\\employer} [3] {
    { \\textbf{#1} (#2)\\\\ \\underline{\\textbf{\\emph{#3}}}\\\\  }
}

\\newcommand{\\contact} [3] {
    \\vspace*{-10pt}
    \\begin{center}
        {\\Huge \\scshape {#1}}\\\\
        #2 \\\\ #3
    \\end{center}
    \\vspace*{-8pt}
}

\\newenvironment{achievements}{
    \\begin{list}
        {\\$\\bullet$}{\\topsep 0pt \\itemsep -2pt}}{\\vspace*{4pt}
    \\end{list}
}

\\newcommand{\\schoolwithcourses} [4] {
    \\textbf{#1} #2 \\$\\bullet$ #3\\\\
    #4 \\\\
    \\vspace*{5pt}
}

\\newcommand{\\school} [4] {
    \\textbf{#1} #2 \\$\\bullet$ #3\\\\
    #4 \\\\
}

% END RESUME DEFINITIONS %%%%%%%%%%%%%%%%%%%%%%%

\\begin{document}
\\vspace*{-40pt}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Profile
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
  \\vspace*{-2pt}
  \\begin{center}
    {\\Huge \\scshape {${firstName} ${lastName}}}\\\\
    \\vspace*{2pt}
    \\ {${jobTitle}}\\\\
    \\vspace*{2pt}
    \\href{mailto:${email}}{${email}} | \\href{tel:${phone}}{${phone}} | ${address}\\\\
    \\vspace*{2pt}
    ${links.map(link => `\\textbf{\\href{${link.url}}{${link.network}}}`).join(' | ')}\\\\
  \\end{center}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Education
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\header{Education}
\\vspace{2mm}
${educationInfo.map(formatEducation).join('\n')}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Experience
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\header{Experience}
\\vspace{2mm}
${experience.map(formatExperience).join('\n')}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Skills
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\header{Skills}
\\vspace{2mm}
\\begin{longtable}{p{4cm}p{12cm}}
${formatSkillSet(skillSet)}
\\end{longtable}
\\vspace{1mm}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Projects
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\header{Projects}
\\vspace{2mm}
${formatProjects(projects.projects)}

%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Certifications
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\header{Certifications}
\\vspace{2mm}
${formatCertifications(certifications)}


%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
%
%     Honors and Awards
%
%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
\\header{Honors and Awards}
\\vspace{2mm}
${formatHonorsAwards(honorsAwards)}

\\end{document}
    `;
};


