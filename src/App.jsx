import { Button } from "@mui/material";
import react, { useEffect, useState } from "react";

const App = () => {
  const [data, setData] = useState({
    name: "",
    house: "",
    sentence: "",
  });

  useEffect(() => {
    click();
  }, []);

  const click = async () => {
    const res = await (
      await fetch("https://api.gameofthronesquotes.xyz/v1/random")
    ).json();
    setData(() => {
      return {
        name: res.character.name,
        house: res.character.house.name,
        sentence: res.sentence,
      };
    });
  };

  return (
    <>
      <div className=" bg-gray-950 h-screen w-screen pb-4">
        <div className=" w-auto p-3 bg-gray-800 sm:p-5">
          <h1 className=" text-center text-orange-400 text-4xl font-bold sm:text-5xl">
            Game of Thrones
          </h1>
        </div>
        <div className=" p-4 m-4 flex justify-center items-center sm:p-5">
          <p className=" text-stone-300 text-justify text-xl sm:text-2xl sm:w-2/4">
            Its a simple webpage for generating famous{" "}
            <span className="font-semibold text-orange-300">
              Game of thrones{" "}
            </span>
            quotes.It shows quote, who said it and their house.
          </p>
        </div>

        <div className="text-white flex justify-center items-center m-5 ">
          <Button color="error" variant="contained" onClick={click}>
            Get quote
          </Button>
        </div>
        <div className="flex justify-center items-center">
          <div className="border-b-4 border-gray-700 w-2/4"></div>
        </div>
        <div className="flex justify-center items-center text-white m-8">
          <div
            className="flex flex-col rounded-md shadow-2xl
          gap-2 justify-center items-center text-xl bg-slate-800  px-2 py-10 w-11/12 sm:w-3/5 sm:text-2xl sm:px-3"
          >
            <h1 className="font-bold text-red-500 text-center">{data.name}</h1>
            <h2 className="font-semibold text-orange-400 text-center">
              {data.house}
            </h2>
            <p className="text-center">{data.sentence}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
