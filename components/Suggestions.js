import { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(5)].map((_, i) => ({
      ...faker.helpers.contextualCard(),
      id: i,
    }));

    setSuggestions(suggestions);
  }, []);
  console.log(suggestions);
  return (
    <div className="mt-4 ml-10">
      <div className="flex justify-between mb-5">
        <h3 className="font-semibold text-lg text-gray-400">
          Suggestions for you
        </h3>
        <button className="font-semibold text-gray-900 text-sm">See All</button>
      </div>
      {suggestions.map(({ username, id, avatar, company }) => (
        <div key={id} className="flex items-center justify-between mt-3">
          <img
            className="h-10 w-10 mr-3 cursor-pointer rounded-full border p-[2px]"
            src={avatar}
            alt=""
          />
          <div className="flex-1 ">
            <h2 className=" text-md font-semibold cursor-pointer">
              {username}
            </h2>
            <h3 className="truncate font-light text-sm  text-gray-500">
              Works at {company.name}
            </h3>
          </div>
          <button className="text-blue-400 cursor-pointer text-sm font-semibold">
            Follow
          </button>
        </div>
      ))}
    </div>
  );
}

export default Suggestions;
