function Wheel() {
  const rating = 130;
  const radius = 5000;
  const maxRating = 350;
  const strokeWidth = 400;
  const viewBoxSize = 2 * (radius + strokeWidth);
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${
    (circumference * rating) / maxRating
  } ${circumference}`;

  return (
    <div className="flex justify-center items-center p-4">
      <div className="relative">
        {/* Background circle */}
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="w-full h-auto text-gray-300"
          style={{ maxWidth: `${viewBoxSize}px` }}
        >
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
          />
        </svg>
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="w-full h-auto absolute top-0 left-0 text-blue-600"
          style={{ maxWidth: `${viewBoxSize}px` }}
        >
          <circle
            cx={radius + strokeWidth}
            cy={radius + strokeWidth}
            r={radius}
            fill="transparent"
            stroke="currentColor"
            strokeWidth={strokeWidth}
            strokeDasharray={strokeDasharray}
            transform={`rotate(-90 ${radius + strokeWidth} ${
              radius + strokeWidth
            })`}
          />
        </svg>
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="text-center p-2 text-black">
            <span className="block text-xl md:text-3xl font-bold">350</span>
            <span className="block text-xs md:text-sm">Sphere Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheel;
