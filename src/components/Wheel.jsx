function Wheel() {
  const rating = 130;
  const radius = 5000;
  const maxRating = 350;
  const strokeWidth = 1200;
  const viewBoxSize = 2 * (radius + strokeWidth);
  const circumference = 2 * Math.PI * radius;
  const strokeDasharray = `${
    (circumference * rating) / maxRating
  } ${circumference}`;

  return (
    <div className="flex w-52 justify-center items-center px-4">
      <div className="relative">
        <svg
          viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
          className="w-full h-auto text-[#DFDCFF]"
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
          className="w-full h-auto absolute top-0 left-0 text-[#6B64FF]"
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
            <span className="block text-xl md:text-2xl font-bold">350</span>
            <span className="block text-xs md:text-xs">Sphere Rating</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wheel;
