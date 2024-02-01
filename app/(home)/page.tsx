"use client";

import Image from "next/image";
import useSWR from "swr";

export default function Home() {
  // swr --------------------------------------------------------------------------------------- swr
  const { data } = useSWR("api/characters", getCharacters);
  // const characters = await getCharacters();
  console.log("characters", data);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
        {/* {data?.map((character: any) => (
          <li key={character.id}>{character.name}</li>
        ))} */}
      </div>
    </main>
  );
}
function getCharacters(arg: "api/characters") {
  throw new Error("Function not implemented.");
}
