import React from 'react';

const TemplateSelectionPage = () => {
  const templates = [
    // Dummy template data
    { id: 1, name: 'Template 1' },
    { id: 2, name: 'Template 2' },
    { id: 3, name: 'Template 3' },
  ];

  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-4">Select a Template</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map(template => (
          <div key={template.id} className="border p-4 rounded-lg">
            <h2 className="text-2xl mb-2">{template.name}</h2>
            <button className="bg-green-500 text-white px-4 py-2 rounded-lg hover:bg-green-600">
              Use this template
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelectionPage;
