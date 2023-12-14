/* eslint-disable react/prop-types */
import { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";
const ExperienceForm = ({ experience, onSave, onCancel }) => {
  const [formState, setFormState] = useState({
    companyName: experience ? experience.companyName : "",
    location: experience ? experience.location : "",
    startDate: experience ? experience.startDate : "",
    endDate: experience ? experience.endDate : "",
    description: experience ? experience.description : "",
    isCurrent: experience ? experience.isCurrent : false,
  });

  const handleChange = (e) => {
    const { name, value, checked, type } = e.target;
    setFormState({
      ...formState,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSave(formState);
  };

  const [notify, setNotify] = useState(false);

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="bg-white ">
        <div className="flex items-center justify-center space-x-2">
          <button
            aria-label="Go back"
            className="absolute left-10 p-0 text-black bg-white hover:border-none focus:outline-none"
          >
            <FaChevronLeft />
          </button>
          <h1 className="text-lg font-bold text-black">{`${
            experience ? "Edit" : "Add"
          } Experience`}</h1>
        </div>

        <div className="flex items-center justify-between p-2 mt-1 bg-[#EDEBFF]">
          <div className="ml-3 text-sm font-medium text-gray-700">
            Notify Network
          </div>
          <label className="flex items-center cursor-pointer">
            <div className="relative">
              <input
                id="notify-toggle"
                type="checkbox"
                className="sr-only"
                checked={notify}
                onChange={(e) => setNotify(e.target.checked)}
              />
              <div className=" bg-[#7976FF] w-10 h-6 rounded-full">
                <div
                  className={`absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform ${
                    notify ? "translate-x-4" : ""
                  }`}
                ></div>
              </div>
            </div>
          </label>
        </div>
      </div>
      <div className="bg-white p-4 mb-4">
        <div className="mb-4">
          <label
            htmlFor="companyName"
            className="block text-sm font-medium text-gray-500"
          >
            Company Name
            <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            id="companyName"
            value={formState.companyName}
            onChange={handleChange}
            className="mt-1 block w-full text-black rounded-md  bg-white p-2 border border-[#BDC7E3] shadow-sm focus:border-indigo-300 "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="location"
            className="block text-sm font-medium text-gray-500"
          >
            Location
          </label>
          <input
            type="text"
            name="location"
            id="location"
            value={formState.location}
            onChange={handleChange}
            className="mt-1 block w-full text-black rounded-md  bg-white p-2 border border-[#BDC7E3]   "
          />
        </div>
        <div className="flex items-center mb-4">
          <input
            type="checkbox"
            name="isCurrent"
            id="isCurrent"
            checked={true}
            onChange={handleChange}
            className="h-4 w-4 text-indigo-600 bg-white"
          />
          <label
            htmlFor="isCurrent"
            className="ml-2 block text-sm text-gray-500"
          >
            I am currently working here
          </label>
        </div>
        <div className="mb-4">
          <label
            htmlFor="startDate"
            className="block text-sm font-medium text-gray-500"
          >
            Start Date
          </label>
          <input
            type="month"
            name="startDate"
            id="startDate"
            defaultValue={"january"}
            value={formState.startDate}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md bg-white border text-black border-[#BDC7E3] p-2 shadow-sm "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="endDate"
            className="block text-sm font-medium text-gray-500"
          >
            End Date
          </label>
          <input
            type="month"
            name="endDate"
            id="endDate"
            value={formState.endDate}
            onChange={handleChange}
            disabled={formState.isCurrent}
            className="mt-1 block w-full rounded-md bg-white border text-black border-[#BDC7E3] p-2 shadow-sm "
          />
        </div>
        <div className="mb-4">
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-500"
          >
            Description
          </label>
          <textarea
            name="description"
            id="description"
            value={formState.description}
            onChange={handleChange}
            rows={4}
            className="mt-1 block w-full bg-white p-1 text-black rounded-md border border-[#BDC7E3] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          ></textarea>
        </div>
        <div className="border-t border-gray-300 mb-4"></div>

        <div className="flex justify-end ">
          <button
            type="button"
            onClick={onCancel}
            className="w-full border-2 border-[#7976FF] text-[#7976FF] rounded-lg px-4 py-2 mr-2"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="w-full bg-[#7976FF] text-white rounded-lg px-4 py-2"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default ExperienceForm;
