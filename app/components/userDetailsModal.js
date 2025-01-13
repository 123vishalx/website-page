"use client";

import React from "react";

export default function UserDetailsModal({ isOpen, user, onClose }) {
  if (!isOpen) return null; // Don't render if modal is not open

  // Default image in case the user's profile image is not available
  const defaultImage =
    "https://s3-alpha-sig.figma.com/img/a678/aed9/e259b9de82f3f0845448634759bf6f1f?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fy6v-Hxht1YMJVrZDxHqG~ZuW13sl1YtWXU1xZoR-WvjYIeM~IQv3V2M6KTZc4rS~70rdi~V~aYiJKY6ytrH43OBXzAQHpjsGVsjsCA5G5piNZ4IJEoiyQyx36YgH3xR6hzoWsP5nbJXILUO-MUFf04RgpqljFtEivC~nTCnpkSnWXEi4nUOKluhOljJnSrXYmVkBLZShjgpo4KqPcksmiTEHg5is8jTKlf5OvnpIb9tDDAWQWlzGPN3mgnAhFNOCSCzvW7JUq06Di6HMmrPKZSIHzHKqgorpQPRVANEonjmjLo3uk5Qc1~WZljICyUISP3mZ85VGazVQb6~XNM-NA__";

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 px-4">
      <div className="bg-white rounded-lg shadow-lg w-[299px] md:w-[472px] h-auto p-6">
        {/* Modal Header */}
        <h2 className="text-xl font-bold mb-4">Fetch Details</h2>
        <p className="text-sm text-gray-600 mb-4">
          Here are the details of the following employee:
        </p>

        {/* User Information */}
        {user ? (
          <div>
            {/* User Details */}
            <div className="mb-4">
              <p className="text-base text-gray-800">
                <strong>Name:</strong> {user.first_name} {user.last_name}
              </p>
              <p className="text-base text-gray-800">
                <strong>Location:</strong> {user.city || "Not Provided"}
              </p>
              <p className="text-base text-gray-800">
                <strong>Contact Number:</strong> {user.contact_number || "N/A"}
              </p>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center">
              <img
                src={user.profile_image || defaultImage}
                alt="Profile"
                className="w-24 h-24 rounded-md object-cover"
                onError={(e) => (e.target.src = defaultImage)} // Fallback to default image on error
              />
            </div>
          </div>
        ) : (
          <p className="text-gray-600">No user data available.</p>
        )}

        {/* Close Button */}
        <div className="flex justify-end mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-200 text-gray-700 rounded-md border border-gray-300 hover:bg-gray-300"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
