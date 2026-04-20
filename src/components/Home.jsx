import React, { useEffect, useState } from "react";
import HomeYourFriendList from "./HomeYourFriendList";

const Home = () => {
  const [data, setData] = useState([]);
  const onTrack = data.filter((f) => f.status === "On-Track");

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <div className="mt-10 text-center w-10/12 m-auto">
        <p className="text-4xl font-bold">
          Friends to keep close in your life
        </p>
        <p className="mt-5 text-[#000000c5]">
          <small>
            Your personal shelf of meaningful connections. Browse, tend, and
            nurture the <br />
            relationships that matter most.
          </small>
        </p>
        <button className="bg-[#244D3F] p-3 my-5 rounded-lg text-white font-semibold">
          + Add a Friend
        </button>
        <div className="grid grid-cols-2 space-y-4 lg:grid-cols-4 justify-center my-10">
          <div className="flex-1 text-center">
            <p className="text-[#244D3F] text-3xl font-bold">{data.length}</p>
            <p className="text-[#64748B]">Total Friends</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-[#244D3F] text-3xl font-bold">
              {onTrack.length}
            </p>
            <p className="text-[#64748B]">On Track</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-[#244D3F] text-3xl font-bold">6</p>
            <p className="text-[#64748B]">Need Attention</p>
          </div>
          <div className="flex-1 text-center">
            <p className="text-[#244D3F] text-3xl font-bold">12</p>
            <p className="text-[#64748B]">Interactions This Month</p>
          </div>
        </div>
      </div>
      <div className="w-10/12 m-auto my-10">
        <h1 className="text-3xl font-bold mb-8">Your Friends</h1>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-15">
          {data.map((friend) => (
            <HomeYourFriendList
              key={friend.id}
              friend={friend}
            ></HomeYourFriendList>
          ))}
        </div>
      </div>
    </>
  );
};

export default Home;
