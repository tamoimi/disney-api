import Image from "next/image";
import { API_URL } from "../contents";

async function getDetail(id: string) {
  const response = await fetch(`${API_URL}/character/${id}`);
  return response.json();
}

export default async function CharacterInfo({ id }: { id: string }) {
  const character = await getDetail(id);
  return (
    <>
      <main className="flex flex-col items-center justify-center p-6">
        <Image
          src={character.image}
          width={300}
          height={300}
          alt="character_img"
          style={{ borderRadius: "50%" }}
        />
        <div className="flex flex-col gap-3 w-full mt-5">
          <div className="relative">
            <input
              type="text"
              className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900  rounded-lg appearance-none  focus:outline-none focus:teal-blue-600 peer bg-transparent border border-gray-300"
              value={character.name}
            />
            <label className="absolute bg-gray-100 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-teal-600  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Name
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900  rounded-lg appearance-none  focus:outline-none focus:teal-blue-600 peer bg-transparent border border-gray-300"
              value={character.status}
            />
            <label className="absolute bg-gray-100 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-teal-600  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Status
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900  rounded-lg appearance-none  focus:outline-none focus:teal-blue-600 peer bg-transparent border border-gray-300"
              value={character.species}
            />
            <label className="absolute bg-gray-100 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-teal-600  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Species
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900  rounded-lg appearance-none  focus:outline-none focus:teal-blue-600 peer bg-transparent border border-gray-300"
              value={character.origin.name}
            />
            <label className="absolute bg-gray-100 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-teal-600  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Origin
            </label>
          </div>
          <div className="relative">
            <input
              type="text"
              className="block px-2.5 pb-2.5 pt-4 w-full text-gray-900  rounded-lg appearance-none  focus:outline-none focus:teal-blue-600 peer bg-transparent border border-gray-300"
              value={character.gender}
            />
            <label className="absolute bg-gray-100 text-gray-500 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] px-2 peer-focus:px-2 peer-focus:text-teal-600  peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">
              Gender
            </label>
          </div>
        </div>
      </main>
    </>
  );
}
