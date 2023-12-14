import profilePicture from "../assets/profile-main.jpg";

function ProfileCard() {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden w-72">
      <div className="relative">
        <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
        <div className="bg-blue-600 h-24"></div>
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2">
          <img
            className="rounded-full border-4 border-white"
            src={profilePicture}
            alt="Profile"
            width="80"
            height="80"
          />
        </div>
      </div>
      <div className="mt-16 px-4 pb-4 text-center">
        <h3 className="text-lg font-semibold">Ayaat Khanna</h3>
        <span className="text-sm text-gray-500">UI/UX Designer</span>
        <div className="flex justify-center space-x-1 mt-2">
          <span className="text-sm">
            <i className="fas fa-users"></i> 21 followers
          </span>
          <span>·</span>
          <span className="text-sm">
            <i className="fas fa-user-plus"></i> 43 following
          </span>
        </div>
      </div>
    </div>
  );
}

export default ProfileCard;
