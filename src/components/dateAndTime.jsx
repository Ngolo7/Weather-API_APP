import React, { useState, useEffect } from "react";

function DateAndTime({ showAmPm = true, showDate = true }) {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);

    // Clean up the interval on component unmount
    return () => clearInterval(timer);
  }, []);

  const formattedTime = currentDateTime.toLocaleTimeString("en-GB", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: showAmPm,
  });

  const displayTime = showAmPm
    ? formattedTime.replace("am", "AM").replace("pm", "PM")
    : formattedTime;

  return (
    <div className="p-4">
      <p className="text-3xl mt-2 text-black">
        {showDate && currentDateTime.toLocaleDateString()} {displayTime}
      </p>
    </div>
  );
}

export default DateAndTime;
