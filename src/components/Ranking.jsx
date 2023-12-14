function Ranking() {
  const validPercentage = Math.min(100, Math.max(0, 80)); // Ensure the percentage is within 0 to 100
  const progressBarWidth = `${validPercentage}%`; // Calculate the width of the progress bar

  return (
    <div className="w-full max-w-xs px-4 py-6 mx-auto">
      <div className="text-center text-sm font-medium text-gray-700">
        Your Ranking
      </div>
      <div className="w-full bg-gray-200 rounded-full my-2 overflow-hidden shadow-inner">
        <div
          className="bg-purple-600 h-2.5 rounded-full shadow"
          style={{ width: progressBarWidth }}
        ></div>
      </div>
      <div className="text-center text-sm font-medium text-gray-700">
        Hurray! You are in the top <span className="text-purple-600">27%</span>
      </div>
    </div>
  );
}

export default Ranking;
