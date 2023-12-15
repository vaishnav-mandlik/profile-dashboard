import cm1 from "../assets/cm1.png";
import cm2 from "../assets/cm2.png";
import cm3 from "../assets/cm3.png";
import cm4 from "../assets/cm4.png";

const GroupList = () => {
  return (
    <div>
      <h3 className="font-semibold text-gray-700 mb-2">Communities Feed</h3>
      <ul className="space-y-4 mt-4">
        <li className="mb-2">
          <a
            href="#"
            className="flex  items-center text-gray-700 hover:text-blue-600"
          >
            <img src={cm1} alt="1" className="w-8 h-8 rounded-full" />
            <div className="flex flex-col ml-2">
              <p className=" text-xs"> Indonesia UI Designer</p>
              <span className="text-gray-400 text-xs">734 members</span>
            </div>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex  items-center text-gray-700 hover:text-blue-600"
          >
            <img src={cm2} alt="2" className="w-8 h-8 rounded-full" />

            <div className="flex flex-col ml-2">
              <p className=" text-xs"> Indonesia UX Research</p>
              <span className="text-gray-400 text-xs">734 members</span>
            </div>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex  items-center text-gray-700 hover:text-blue-600"
          >
            <img src={cm3} alt="3" className="w-8 h-8 rounded-full" />

            <div className="flex flex-col ml-2">
              <p className=" text-xs">Prototyping club</p>
              <span className="text-gray-400 text-xs">734 members</span>
            </div>
          </a>
        </li>
        <li className="mb-2">
          <a
            href="#"
            className="flex items-center text-gray-700 hover:text-blue-600"
          >
            <img src={cm4} alt="4" className="w-8 h-8 rounded-full" />

            <div className="flex flex-col ml-2">
              <p className=" text-xs">UI Designer</p>
              <span className="text-gray-400 text-xs">734 members</span>
            </div>
          </a>
        </li>
      </ul>
      <div className="mt-4 justify-center ml-8">
        <p className="text-blue-600 text-sm mt-2">{`Show 5 more >`}</p>
      </div>
    </div>
  );
};

export default GroupList;
