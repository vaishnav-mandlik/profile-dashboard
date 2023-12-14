import { RxAvatar } from "react-icons/rx";
import { IoHomeOutline, IoSettings } from "react-icons/io5";
import { IoIosMailOpen, IoMdAnalytics } from "react-icons/io";

function SideNav() {
  const navItems = [
    { name: "Home", icon: "IoHomeOutline" },
    { name: "Job Invites", icon: "IoIosMailOpen" },
    { name: "Analytics", icon: "IoMdAnalytics" },
    { name: "My Profile", icon: "RxAvatar" },
    { name: "Explore", icon: "IoSettings" },
  ];
  return (
    <div className="mb-6">
      <ul>
        {navItems.map((item) => (
          <li className="mb-2 " key={item.name}>
            <a
              href="#"
              className={`flex gap-1 items-center text-[#7976FF] rounded-md  p-2 ${
                item.name === "Home" && "bg-blue-100"
              }`}
            >
              <div className="text-[#7976FF] text-2xl">
                {item.icon === "IoHomeOutline" && <IoHomeOutline />}
                {item.icon === "IoIosMailOpen" && <IoIosMailOpen />}
                {item.icon === "IoMdAnalytics" && <IoMdAnalytics />}
                {item.icon === "RxAvatar" && <RxAvatar />}
                {item.icon === "IoSettings" && <IoSettings />}
              </div>
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SideNav;
