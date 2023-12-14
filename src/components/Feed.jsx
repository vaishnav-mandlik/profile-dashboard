import NavFeed from "./NavFeed";
import { useState } from "react";
import Posts from "./Posts";
import AboutSession from "./AboutSession";

function Feed() {
  const [activeTab, setActiveTab] = useState("Posts");

  return (
    <div className="md:pt-4 md:px-4 w-full border">
      <NavFeed activeTab={activeTab} setActiveTab={setActiveTab} />
      {activeTab === "Posts" ? <Posts /> : <AboutSession />}
    </div>
  );
}

export default Feed;
