import React from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
function Github() {
  const { id } = useParams();
  const [data, setData] = React.useState([]);
  useEffect(() => {
    fetch(`https://api.github.com/users/${id || "hiteshchoudhary"}`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
    // Fetch GitHub followers here
  }, []);
  return (
    <div>
      <div className="text-lg bg-gray-600 font-bold text-white text-center m-4 p-4">
        Github followers: {data.followers}
        <img
          src={data.avatar_url}
          alt="Git picture"
          width="300"
          height="128"
          className="w-32 h-32 rounded-full mx-auto mt-4"
        />
      </div>
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const response = await fetch(`https://api.github.com/users/hiteshchoudhary`);
  return response.json();
};
