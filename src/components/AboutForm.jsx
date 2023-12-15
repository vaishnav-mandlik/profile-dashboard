/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { FaChevronLeft } from "react-icons/fa";

function AboutForm({ about, onSave, onCancel }) {
  console.log(about, "about");
  const [formState, setFormState] = useState({
    about: about ? about : "",
  });

  const [notify, setNotify] = useState(false);

  return (
    <div className="w-full">
      <div className="bg-white ">
        <div className="flex items-center justify-center space-x-2">
          <button
            aria-label="Go back"
            className="absolute left-10 p-0 text-black bg-white hover:border-none focus:outline-none"
            onClick={onCancel}
          >
            <FaChevronLeft />
          </button>
          <h1 className="text-lg font-semibold text-black">Edit About</h1>
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
      <div className="mb-4 mt-4">
        <label
          htmlFor="description"
          className="block text-sm font-medium text-gray-500 "
        >
          About
        </label>
        <textarea
          name="description"
          id="description"
          value={formState.about}
          rows={10}
          className="mt-1 block w-full bg-white p-1 text-black rounded-md border border-[#BDC7E3] shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        ></textarea>
      </div>
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
          onClick={onCancel}
        >
          Save
        </button>
      </div>
    </div>
  );
}

export default AboutForm;
