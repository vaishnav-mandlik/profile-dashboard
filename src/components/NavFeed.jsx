/* eslint-disable react/prop-types */

const tabs = ["About", "Skills & Certificates", "Posts", "Spaces"];

function NavFeed({ activeTab, setActiveTab }) {
  return (
    <div className="w-full items-center bg-white py-2 rounded-t-lg">
      <div className="flex justify-around items-center space-x-8 ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`text-sm font-medium px-1 pt-2 pb-1 transition-colors rounded-none bg-white duration-300 ${
              activeTab === tab
                ? "text-blue-600 font-bold"
                : "text-gray-600 hover:text-blue-600 "
            } focus:outline-none hover:border-none`}
            onClick={() => setActiveTab(tab)}
            style={{
              borderBottom: activeTab === tab ? "2px solid #2563eb" : "",
            }}
          >
            {tab}
          </button>
        ))}
      </div>
    </div>
  );
}

export default NavFeed;
