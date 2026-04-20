import React from "react";
import { useNavigate } from "react-router";

const HomeYourFriendList = ({ friend }) => {
    const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/FriendDetails/${friend.id}`)}
      className=" text-center"
    >
    
      <img
        src={friend.picture}
        alt="friend"
        className="w-20 h-20 rounded-full mx-auto"
      />
      <p className="text-xl font-bold mt-2 mb-5">{friend.name}</p>
      {friend.tags.map((tag, index) => (
        <span
          key={index}
          className="mr-2 text-[#244D3F] mt-4 bg-[#CBFADB] px-2 rounded"
        >
          {tag}
        </span>
      ))}
      <p
        className={`mt-3 w-28 m-auto rounded-2xl ${
          friend.status === "On-Track"
            ? "bg-[#244D3F] text-white"
            : friend.status === "Almost Due"
              ? "bg-[#EFAD44] text-white"
              : "bg-[#EF4444] text-white"
        }`}
      >
        {friend.status}
      </p>
    </div>
  );
};

export default HomeYourFriendList;
