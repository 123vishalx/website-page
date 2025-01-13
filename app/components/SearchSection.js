"use client";

import { useState, useEffect } from "react";
import userdata from "./userdata.json"; // Import the JSON file
import UserDetailsModal from "./UserDetailsModal";

export default function SearchSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null); // State for the selected user
  const [isModalOpen, setIsModalOpen] = useState(false); // Modal visibility state

  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredData([]);
    } else {
      const filtered = userdata.filter(
        (user) =>
          user.first_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.last_name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          user.city.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setFilteredData(filtered);
    }
  }, [searchQuery]);

  const handleFetchDetails = (user) => {
    setSelectedUser(user); // Set the selected user
    setIsModalOpen(true); // Open the modal
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
    setSelectedUser(null); // Reset selected user
  };

  return (
    <div className="bg-gradient-to-b from-white to-blue-100 min-h-screen p-4">
      {/* Centered Logo Section (Hidden on small screens) */}
      <div className="flex justify-center mb-6 md:mb-0 mt-6">
        <img
          src="https://girmantech.com/Logo2.svg"
          alt="Logo"
          className="h-28 hidden md:block"
        />
      </div>

      {/* Search Input */}
      <div className="flex justify-center mb-6 mt-10">
        <div className="relative w-full max-w-[800px]">
          <input
            type="text"
            placeholder="Search"
            className="w-full h-[50px] text-[24px] px-12 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-6 h-6 text-gray-500"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-4.35-4.35M17 11a6 6 0 11-12 0 6 6 0 0112 0z"
            />
          </svg>
        </div>
      </div>

      {/* Cards Section */}
      <div className="max-w-[890px] mx-auto mt-40px">
        {searchQuery.trim() === "" ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <p className="text-gray-500 text-lg">Start typing to search...</p>
          </div>
        ) : filteredData.length === 0 ? (
          <div className="flex justify-center items-center min-h-[400px]">
            <div className="flex flex-col items-center">
              <img
                src="https://s3-alpha-sig.figma.com/img/2949/854e/640a24b4da12815da0f5b9cf7333efdc?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GyoxJ45nZHaaWqUV63JawxCRshC0PMDwLHpW1TeRaLTuR78QPaH6ZE63ViwWYRVBCNITNiuSytbpkb07TmzxL2ZMpF9DipwDd~Nmlf68MHix7QDX9J~tvtD0pf5AjSm30hLSXebaty618SLPOXf8K1f~0B3f6nRgYwrAmsp4YBB2ftyT6XyAV1e1khyow0pvILXHxCwQbOSpPlEJzLOLZCzCTB1orQaIgPxFeyyvaMEmTMGunaq-~RKYV0aFuZAIB2AchSIif2p4cA6j8mb0DyoeVLmdkgliCM7YprEcZjkOFxiAn5lU4YJHOo-JOkEG4CMWSPE15xLWv5fVLGaD9g__"
                alt="No results"
                className="w-[472.42px] h-[402.39px] mb-4"
              />
              <p className="text-gray-500 text-lg">No result found.</p>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-[22px]">
            {filteredData.map((user, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 flex flex-col items-start"
                style={{
                  width: "100%",
                  height: "312.57px", // Fixed height
                  borderRadius: "18.29px", // Exact border-radius
                }}
              >
                {/* Profile Image */}
                <div
                  className="w-16 h-16 rounded-full bg-gray-300 flex items-center justify-center mb-4"
                  style={{ borderRadius: "50%" }}
                >
                  <img
                    src="https://s3-alpha-sig.figma.com/img/a678/aed9/e259b9de82f3f0845448634759bf6f1f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fy6v-Hxht1YMJVrZDxHqG~ZuW13sl1YtWXU1xZoR-WvjYIeM~IQv3V2M6KTZc4rS~70rdi~V~aYiJKY6ytrH43OBXzAQHpjsGVsjsCA5G5piNZ4IJEoiyQyx36YgH3xR6hzoWsP5nbJXILUO-MUFf04RgpqljFtEivC~nTCnpkSnWXEi4nUOKluhOljJnSrXYmVkBLZShjgpo4KqPcksmiTEHg5is8jTKlf5OvnpIb9tDDAWQWlzGPN3mgnAhFNOCSCzvW7JUq06Di6HMmrPKZSIHzHKqgorpQPRVANEonjmjLo3uk5Qc1~WZljICyUISP3mZ85VGazVQb6~XNM-NA__"
                    alt="Profile"
                    className="w-full h-full rounded-full"
                  />
                </div>

                {/* Name and City */}
                <h3 className="text-xl font-semibold text-gray-800 mb-1">
                  {user.first_name} {user.last_name}
                </h3>

                {/* City with Location Icon */}
                <p className="text-sm text-gray-500 mb-3 flex items-center mt-2">
                  <img
                    src="https://static.thenounproject.com/png/7436436-512.png"
                    alt="Location Icon"
                    className="w-5 h-5 mr-2"
                  />
                  {user.city}
                </p>

                <div className="border-t border-black-100 pt-4 w-full">
                  {/* Contact Number with Phone Icon */}
                  <div className="flex justify-between items-center w-full">
                    <p className="text-sm text-gray-800  mt-2 flex items-center">
                      <img
                        src="https://static.thenounproject.com/png/7399212-512.png"
                        alt="Phone Icon"
                        className="w-5 h-5 mr-2"
                      />
                      {user.contact_number}
                    </p>

                    {/* Fetch Details Button */}
                    <button
                      onClick={() => handleFetchDetails(user)}
                      className="px-4 py- mt-6 bg-black text-white rounded-lg hover:bg-gray-800"
                      style={{
                        width: "140px", // Button width
                        height: "45px", // Button height
                        borderRadius: "8px",
                      }}
                    >
                      Fetch Details
                    </button>
                  </div>
                </div>

                <h6 className="text-sm mt-1">Available on phone</h6>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Modal */}
      <UserDetailsModal
        isOpen={isModalOpen}
        user={selectedUser}
        onClose={closeModal}
      />
    </div>
  );
}
