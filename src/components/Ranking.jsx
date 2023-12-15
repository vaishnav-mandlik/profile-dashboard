function Ranking() {
  const validPercentage = Math.min(100, Math.max(0, 80));
  const progressBarWidth = `${validPercentage}%`;

  return (
    <div className="w-full px-4 py-6 mx-auto">
      <div className="text-start text-sm font-medium text-gray-700">
        Your Ranking
      </div>
      <div className="w-full border border-[#F7F6FF] p-0.5 bg-gray-200 rounded-full my-2 overflow-hidden shadow-inner">
        <div
          className="bg-purple-600 h-2.5 rounded-full shadow"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <div className="text-center text-[8px] font-medium text-gray-500">
        Hurray! You are in the top <span className="text-[#9448EC]">27%</span>
      </div>
    </div>
  );
}

export default Ranking;
