import React from "react";

const Home: React.FC = () => {
  return (
    <>
      <section>
        <header>
          <div className="top">
            <input
              className="title text-3xl font-bold outline-none cursor-text pb-3 text-gray-500 w-full"
              placeholder="Write Title Here..."
            />
            <input
              type="text"
              className="subtext text-lg font-normal outline-none cursor-text pb-3 text-gray-500 w-full"
              placeholder="Enter subtext here..."
            />
            <div className="toolbar border border-1 h-20 w-full rounded bg-black/60"></div>
          </div>
        </header>
        <main className="mt-10">
          <textarea
            name=""
            id=""
            rows={2}
            className="w-full border-2 rounded outline-none p-5"
            placeholder="Write here..."
          ></textarea>
          <button className="rounded bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-2 px-5 capitalize text-white font-medium cursor-pointer w-full mt-5">
            post
          </button>
        </main>
      </section>
    </>
  );
};

export default Home;
