import React from "react";
import { BiSearch } from "react-icons/bi";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";

function Navbar({ cityNameChange }) {
  const [cityName, setCityName] = useState("");
  const handleInputChange = (event) => {
    setCityName(event.target.value);
  };

  const handleKeyDown = async (event) => {
    if (event.key === "Enter") {
      cityNameChange(cityName);
    }
  };
  return (
    <nav className="flex gap-4">
      <div className="text-lg font-semibold ">Weather App</div>

      <input
        value={cityName}
        onChange={handleInputChange}
        onKeyDown={handleKeyDown}
        type="text"
        placeholder="kathmandu"
        className=" p-2 text-black flex w-full  text-xl rounded-lg *:capitalize focus:outline-none placeholder:lowercase "
      />
      <a
        href="https://github.com/ngolo7"
        target="_blank"
        rel="noopener noreferrer"
        className="ml-auto "
      >
        <FaGithub size={50} />
      </a>
    </nav>
  );
}

export default Navbar;
