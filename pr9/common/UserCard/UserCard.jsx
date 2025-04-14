import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="max-w-sm min-w-[300px] bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden transition-colors duration-300">
      <div className="flex flex-col items-center p-6">
        <img
          src={user.picture.large}
          alt={user.name.first + ' ' + user.name.last}
          className="w-32 h-32 rounded-full border-4 border-blue-500 dark:border-blue-300 shadow-md mb-4"
        />
        <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
          {user.name.first} {user.name.last}
        </h2>
        <p className="text-gray-600 dark:text-gray-300 mb-2">{user.email}</p>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {user.location.city}, {user.location.country}
        </p>
      </div>
    </div>
  );
};

export default UserCard;
