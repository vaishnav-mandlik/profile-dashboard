import { IoBriefcase, IoSchool, IoAdd, IoPencil } from "react-icons/io5";

import { useState } from "react";
import Modal from "./Modal";
import ExperienceForm from "./ExperienceForm";
import AboutForm from "./AboutForm";

function AboutSession() {
  const [showModal, setShowModal] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentExperience, setCurrentExperience] = useState(null);

  const [showAboutModal, setShowAboutModal] = useState(false);

  const handleAddClick = () => {
    setIsEditing(false);
    setCurrentExperience(null);
    setShowModal(true);
  };

  const handleEditClick = (experience) => {
    setIsEditing(true);
    setCurrentExperience(experience);
    setShowModal(true);
  };

  const handleAboutEditClick = () => {
    console.log("About edit clicked");
    // setIsAboutEditing(true);

    setShowAboutModal(true);
  };

  const handleSave = (data) => {
    console.log("Save data:", data);
    setShowModal(false);
  };

  const handleCancel = () => {
    setShowModal(false);
    setShowAboutModal(false);
  };

  return (
    <div className="w-full">
      <div className="bg-white  border-t border-gray-200 shadow mb-4">
        <div className="w-full  bg-white">
          <div className="text-gray-600 flex items-start text-sm mb-4 p-4">
            <p>
              The discovery was made by Richard McClintock, a professor of Latin
              at Hampden-Sydney College in Virginia, who faced the impetuous
              recurrence of the dark word consectetur in the text Lorem ipsum
              researched its origins to identify them in sections 1.10.32 and
              1.10.33 of the aforementione
            </p>
            <div
              className="bg-[#7B74FF] rounded-full p-1"
              onClick={handleAboutEditClick}
            >
              <IoPencil className="h-4 w-4 text-white cursor-pointer" />
            </div>
          </div>

          <div className="flex items-center space-x-2 bg-[#f6f9ff] px-4 py-2">
            <p className="text-gray-800 font-bold text-lg">Experience</p>
          </div>
          <div className="mt-4 p-4">
            <div className="flex items-start space-x-2 mb-3">
              <div className="bg-[#DFDCFF] rounded-full p-2">
                <IoBriefcase className="h-6 w-6 text-[#7B74FF] " />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold">
                  Crisis Intervention Specialist
                </h3>
                <p className="text-gray-600 text-sm">January 2023 - Present</p>
                <p className="text-gray-600 text-sm">
                  Work with clients and web studios as freelancer. Work in next
                  areas: eCommerce web projects; creative landing pages; iOs and
                  Android apps; corporate web sites and corporate identity
                  sometimes.
                </p>
              </div>

              <div
                className="bg-[#7B74FF] rounded-full p-1"
                onClick={handleAddClick}
              >
                <IoAdd className="h-4 w-4 text-white cursor-pointer" />
              </div>

              <div
                className="bg-[#7B74FF] rounded-full p-1"
                onClick={() =>
                  handleEditClick({
                    companyName: "Crisis Intervention Specialist",
                    location: "Gujarat, India",
                    description:
                      "Work with clients and web studios as freelancer. Work in next areas: eCommerce web projects; creative landing pages; iOs and Android apps; corporate web sites and corporate identity sometimes.",
                  })
                }
              >
                <IoPencil className="h-4 w-4 text-white cursor-pointer" />
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-2 bg-[#f6f9ff] px-4 py-2">
            <p className="text-gray-800 font-bold text-lg">Education</p>
          </div>
          <div className="mt-4 p-4">
            <div className="flex items-start space-x-2">
              <div className="bg-[#DFDCFF] rounded-full p-1">
                <IoSchool className="h-6 w-6 text-[#7B74FF] " />
              </div>
              <div className="flex-1">
                <h3 className="text-gray-800 font-semibold">
                  B.E. - Electronics & Telecommunication Engg.
                </h3>
                <p className="text-gray-600 text-sm">Aug 2015 - June 2019</p>
              </div>
              <div className="bg-[#7B74FF] rounded-full p-1">
                <IoAdd className="h-4 w-4 text-white cursor-pointer" />
              </div>
              <div className="bg-[#7B74FF] rounded-full p-1">
                <IoPencil className="h-4 w-4 text-white cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {showModal && (
        <Modal
          animationType="slide-up"
          visible={showModal}
          onClose={() => setShowModal(false)}
        >
          <ExperienceForm
            experience={currentExperience}
            onSave={handleSave}
            onCancel={handleCancel}
            isEditing={isEditing}
          />
        </Modal>
      )}
      {showAboutModal && (
        <Modal
          animationType="slide-up"
          visible={showAboutModal}
          onClose={() => setShowAboutModal(false)}
        >
          <AboutForm
            about="The discovery was made by Richard McClintock, a professor of Latin at Hampden-Sydney College in Virginia, who faced the impetuous recurrence of the dark word consectetur in the text Lorem ipsum researched its origins to identify them in sections 1.10.32 and 1.10.33 of the aforementione"
            onSave={handleSave}
            onCancel={handleCancel}
          />
        </Modal>
      )}
    </div>
  );
}

export default AboutSession;
