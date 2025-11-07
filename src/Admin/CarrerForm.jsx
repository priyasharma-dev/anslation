import React, { useContext, useState } from 'react';
import { BlogContext } from '../Context/BlogContext';

function CarrerForm() {
    const {JobDataCreate} = useContext(BlogContext)
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    category: '',
    department: '',
    location: '',
    jobSummary: '',
    jobType: 'Full Time',
    experience: '',
    timing: '',
    workingDay: '',
    noOfVacancy: '',
    whoWeAreLookingFor: [''],
    whatYouWillBeDoing: [''],
    bonusPoints: [''],
    educationalRequirement: '',
    salary: {
      range: '',
      review: ''
    },
    workingHours: '',
    workingDays: {
      weekly: '',
      weekend: ''
    },
    perksAndBenefits: [''],
    applicationProcess: [''],
    ourStatement: ''
  });

  const [currentSection, setCurrentSection] = useState(0);

  const categories = ['ENGINEERING', 'DESIGN', 'DIGITAL MARKETING', 'ADMIN', 'HR', 'FINANCE', 'OPERATIONS' ];
  const departments = ['PRODUCT', 'TECHNOLOGY', 'BUSINESS', 'SUPPORT', 'ADMIN'];
  const jobTypes = ['Full Time', 'Part Time', 'Contract', 'Internship', 'Remote'];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNestedChange = (parent, field, value) => {
    setFormData(prev => ({
      ...prev,
      [parent]: {
        ...prev[parent],
        [field]: value
      }
    }));
  };

  const handleArrayChange = (field, index, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].map((item, i) => i === index ? value : item)
    }));
  };

  const addArrayItem = (field) => {
    setFormData(prev => ({
      ...prev,
      [field]: [...prev[field], '']
    }));
  };

  const removeArrayItem = (field, index) => {
    setFormData(prev => ({
      ...prev,
      [field]: prev[field].filter((_, i) => i !== index)
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    JobDataCreate(formData)
    alert('Job posting created successfully!');
    console.log(formData, "hellod ata")
  };



  const sections = [
    { title: 'Basic Information', icon: '📝' },
    { title: 'Job Details', icon: '💼' },
    { title: 'Requirements', icon: '🎯' },
    { title: 'Benefits & Process', icon: '⭐' }
  ];

  const nextSection = () => setCurrentSection(prev => Math.min(prev + 1, sections.length - 1));
  const prevSection = () => setCurrentSection(prev => Math.max(prev - 1, 0));

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-3">Create Job Posting</h1>
          <p className="text-lg text-gray-600">Attract the best talent with a compelling job description</p>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            {sections.map((section, index) => (
              <div key={index} className="flex flex-col items-center flex-1">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-semibold ${
                  index <= currentSection ? 'bg-blue-600' : 'bg-gray-300'
                }`}>
                  {section.icon}
                </div>
                <span className={`text-sm mt-2 ${index <= currentSection ? 'text-blue-600 font-medium' : 'text-gray-500'}`}>
                  {section.title}
                </span>
              </div>
            ))}
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentSection + 1) / sections.length) * 100}%` }}
            ></div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8">
          <form onSubmit={handleSubmit}>
            {/* Section 1: Basic Information */}
            {currentSection === 0 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">📝 Basic Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Title *
                    </label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      placeholder="e.g., Engineering Manager"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select Category</option>
                      {categories.map(cat => (
                        <option key={cat} value={cat}>{cat}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Department *
                    </label>
                    <select
                      name="department"
                      value={formData.department}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      <option value="">Select Department</option>
                      {departments.map(dept => (
                        <option key={dept} value={dept}>{dept}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="e.g., GURUGRAM, INDIA"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Job Type *
                    </label>
                    <select
                      name="jobType"
                      value={formData.jobType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    >
                      {jobTypes.map(type => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Number of Vacancies *
                    </label>
                    <input
                      type="number"
                      name="noOfVacancy"
                      value={formData.noOfVacancy}
                      onChange={handleChange}
                      placeholder="e.g., 3"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Description *
                  </label>
                  <textarea
                    name="description"
                    rows={4}
                    value={formData.description}
                    onChange={handleChange}
                    placeholder="Describe the role and key responsibilities..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Job Summary
                  </label>
                  <input
                    type="text"
                    name="jobSummary"
                    value={formData.jobSummary}
                    onChange={handleChange}
                    placeholder="Brief summary of the job"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>
              </div>
            )}

            {/* Section 2: Job Details */}
            {currentSection === 1 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">💼 Job Details</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Experience Required *
                    </label>
                    <input
                      type="text"
                      name="experience"
                      value={formData.experience}
                      onChange={handleChange}
                      placeholder="e.g., 5-8 years"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Working Hours *
                    </label>
                    <input
                      type="text"
                      name="workingHours"
                      value={formData.workingHours}
                      onChange={handleChange}
                      placeholder="e.g., 9 AM - 6 PM"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Working Days *
                    </label>
                    <input
                      type="text"
                      name="workingDay"
                      value={formData.workingDay}
                      onChange={handleChange}
                      placeholder="e.g., Monday-Friday"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Timing *
                    </label>
                    <input
                      type="text"
                      name="timing"
                      value={formData.timing}
                      onChange={handleChange}
                      placeholder="e.g., 9 AM - 6 PM"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Range *
                    </label>
                    <input
                      type="text"
                      value={formData.salary.range}
                      onChange={(e) => handleNestedChange('salary', 'range', e.target.value)}
                      placeholder="e.g., 18,000 to 38,000 BDT"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Salary Review *
                    </label>
                    <input
                      type="text"
                      value={formData.salary.review}
                      onChange={(e) => handleNestedChange('salary', 'review', e.target.value)}
                      placeholder="e.g., Yearly"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weekly Working Days
                    </label>
                    <input
                      type="text"
                      value={formData.workingDays.weekly}
                      onChange={(e) => handleNestedChange('workingDays', 'weekly', e.target.value)}
                      placeholder="e.g., 5 days per week"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Weekend Days
                    </label>
                    <input
                      type="text"
                      value={formData.workingDays.weekend}
                      onChange={(e) => handleNestedChange('workingDays', 'weekend', e.target.value)}
                      placeholder="e.g., Saturday, Sunday"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>
              </div>
            )}

            {/* Section 3: Requirements */}
            {currentSection === 2 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">🎯 Requirements & Responsibilities</h2>
                
                {/* Who We Are Looking For */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Who We Are Looking For *
                  </label>
                  {formData.whoWeAreLookingFor.map((item, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange('whoWeAreLookingFor', index, e.target.value)}
                        placeholder="Enter requirement..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      {formData.whoWeAreLookingFor.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('whoWeAreLookingFor', index)}
                          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('whoWeAreLookingFor')}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    + Add Requirement
                  </button>
                </div>

                {/* What You Will Be Doing */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What You Will Be Doing *
                  </label>
                  {formData.whatYouWillBeDoing.map((item, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange('whatYouWillBeDoing', index, e.target.value)}
                        placeholder="Enter responsibility..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      {formData.whatYouWillBeDoing.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('whatYouWillBeDoing', index)}
                          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('whatYouWillBeDoing')}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    + Add Responsibility
                  </button>
                </div>

                {/* Bonus Points */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Bonus Points
                  </label>
                  {formData.bonusPoints.map((item, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange('bonusPoints', index, e.target.value)}
                        placeholder="Enter bonus point..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      />
                      {formData.bonusPoints.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('bonusPoints', index)}
                          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('bonusPoints')}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    + Add Bonus Point
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Educational Requirement *
                  </label>
                  <textarea
                    name="educationalRequirement"
                    rows={4}
                    value={formData.educationalRequirement}
                    onChange={handleChange}
                    placeholder="Describe educational requirements..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    required
                  />
                </div>
              </div>
            )}

            {/* Section 4: Benefits & Process */}
            {currentSection === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">⭐ Benefits & Process</h2>
                
                {/* Perks & Benefits */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Perks & Benefits *
                  </label>
                  {formData.perksAndBenefits.map((item, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange('perksAndBenefits', index, e.target.value)}
                        placeholder="Enter perk or benefit..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      {formData.perksAndBenefits.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('perksAndBenefits', index)}
                          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('perksAndBenefits')}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    + Add Benefit
                  </button>
                </div>

                {/* Application Process */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    Application Process *
                  </label>
                  {formData.applicationProcess.map((item, index) => (
                    <div key={index} className="flex gap-2 mb-2">
                      <input
                        type="text"
                        value={item}
                        onChange={(e) => handleArrayChange('applicationProcess', index, e.target.value)}
                        placeholder="Enter process step..."
                        className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        required
                      />
                      {formData.applicationProcess.length > 1 && (
                        <button
                          type="button"
                          onClick={() => removeArrayItem('applicationProcess', index)}
                          className="px-4 py-3 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors duration-200"
                        >
                          Remove
                        </button>
                      )}
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() => addArrayItem('applicationProcess')}
                    className="mt-2 px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200"
                  >
                    + Add Process Step
                  </button>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Our Statement
                  </label>
                  <textarea
                    name="ourStatement"
                    rows={4}
                    value={formData.ourStatement}
                    onChange={handleChange}
                    placeholder="Company statement or culture description..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
              <button
                type="button"
                onClick={prevSection}
                disabled={currentSection === 0}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                  currentSection === 0 
                    ? 'bg-gray-300 text-gray-500 cursor-not-allowed' 
                    : 'bg-gray-500 text-white hover:bg-gray-600'
                }`}
              >
                ← Previous
              </button>

              {currentSection < sections.length - 1 ? (
                <button
                  type="button"
                  onClick={nextSection}
                  className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-200"
                >
                  Next →
                </button>
              ) : (
                <button
                  type="submit"
                  className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-all duration-200"
                >
                  Create Job Posting
                </button>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CarrerForm;