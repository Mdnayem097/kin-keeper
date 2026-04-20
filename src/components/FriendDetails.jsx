import React, { useEffect, useState } from "react";
import { useOutletContext, useParams } from "react-router";

const FriendDetails = () => {
  const { id } = useParams();
  const [friend, setFriend] = useState(null);
  const [callData, setCallData] = useOutletContext();

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const singleFriend = data.find((f) => f.id == id);
        setFriend(singleFriend);
      });
  }, [id]);

  if (!friend) return <p>Loading...</p>;

  const handaleCallData = (friendObj, type) => {
    const newEntry = {
      id: Date.now(),
      name: friendObj.name,
      picture: friendObj.picture,
      type: type,
      time: new Date().toLocaleTimeString(),
    };
    setCallData([...callData, newEntry]);
  };

  return (
    <div className="grid  grid-cols-1 lg:grid-cols-5 gap-8 w-10/12 m-auto my-10 bg-white p-8 rounded-3xl shadow-sm">
      {/* Left Column (Profile Info) */}
      <div className="col-span-1 lg:col-span-2 text-center lg:border-r border-gray-100 lg:pr-8 flex flex-col items-center justify-center">
        <img
          className="w-24 h-24 rounded-full m-auto object-cover border-4 border-gray-50"
          src={friend.picture}
          alt={friend.name}
        />
        <p className="text-xl font-bold mt-4">{friend.name}</p>
        <p
          className={`my-3 px-4 py-1 inline-block rounded-full text-sm font-semibold ${
            friend.status === "On-Track"
              ? "bg-[#244D3F] text-white"
              : friend.status === "Almost Due"
                ? "bg-[#EFAD44] text-white"
                : "bg-[#EF4444] text-white"
          }`}
        >
          {friend.status}
        </p>

        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {friend.tags.map((tag, index) => (
            <span
              key={index}
              className="text-[#244D3F] bg-[#CBFADB] px-3 py-0.5 rounded-full text-xs font-medium"
            >
              {tag}
            </span>
          ))}
        </div>

        <p className="my-4 text-[#64748B] text-sm leading-relaxed">
          {friend.bio}
        </p>
        <p className="pb-6 text-[#64748B] text-sm font-medium border-b border-gray-100">
          Email: {friend.email}
        </p>

        <div className="mt-6 flex flex-col space-y-3">
          <button className="py-2 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
            ⏳ Snooze 2 weeks
          </button>
          <button className="py-2 px-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition">
            🗄️ Archive
          </button>
          <button className="py-2 px-4 rounded-xl text-red-600 hover:bg-red-50 transition font-semibold">
            ❌ Delete
          </button>
        </div>
      </div>

      <div className="col-span-1 lg:col-span-3">
        {/* Top Stats */}
        <div className="grid grid-cols-3 text-center mb-10">
          <div>
            <p className="text-3xl font-bold text-[#244D3F]">62</p>
            <p className="text-xs text-[#64748B] uppercase tracking-wider mt-1">
              Days Since Contact
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-[#244D3F]">30</p>
            <p className="text-xs text-[#64748B] uppercase tracking-wider mt-1">
              Goal (Days)
            </p>
          </div>
          <div>
            <p className="text-xl font-bold text-[#244D3F] leading-9">
              April 25, 2026
            </p>
            <p className="text-xs text-[#64748B] uppercase tracking-wider mt-1">
              Next Due
            </p>
          </div>
        </div>

        {/* Relationship Goal Section */}
        <div className="flex justify-between items-center bg-gray-50 p-4 rounded-2xl mb-10">
          <div>
            <p className="text-sm font-semibold text-[#244D3F]">
              Relationship Goal
            </p>
            <p className="text-sm text-[#64748B]">
              Connect every{" "}
              <span className="font-bold text-black">30 days</span>
            </p>
          </div>
          <button className="text-sm font-bold text-[#244D3F] underline">
            Edit
          </button>
        </div>

        <div className="mt-10">
          <p className="text-lg font-bold text-[#244D3F] mb-6">
            Quick Check-In
          </p>

          <div className="grid grid-cols-3 gap-4">
            {/* Call Button */}
            <div
              onClick={() => handaleCallData(friend, "Call")}
              className="btn flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl"
            >
              <img
                src="/call.png"
                alt="call"
                className="h-8 w-8 mb-2 group-hover:scale-110 transition"
              />
              <p className="text-sm font-semibold text-[#244D3F]">Call</p>
            </div>

            {/* Text Button */}
            <div
              onClick={() => handaleCallData(friend, "Text")}
              className="btn flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl"
            >
              <img
                src="/text.png"
                alt="text"
                className="h-8 w-8 mb-2 group-hover:scale-110 transition"
              />
              <p className="text-sm font-semibold text-[#244D3F]">Text</p>
            </div>

            {/* Video Button */}
            <div
              onClick={() => handaleCallData(friend, "Video")}
              className="btn flex flex-col items-center justify-center p-6 border-2 border-dashed border-gray-200 rounded-2xl "
            >
              <img
                src="/video.png"
                alt="video"
                className="h-8 w-8 mb-2 group-hover:scale-110 transition"
              />
              <p className="text-sm font-semibold text-[#244D3F]">Video</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
