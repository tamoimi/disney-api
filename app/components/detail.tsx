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
      <main className="flex flex-col items-center justify-center p-5">
        <Image
          src={character.image}
          width={300}
          height={300}
          alt="character_img"
          style={{ borderRadius: "50%" }}
        />
        <div className="bg-gray-200 my-10 p-3 rounded">
        <h1>Name:{character.name}</h1>
        <h4>Status:{character.status}</h4>
        <h4>Origin:{character.origin.name}</h4>
        <h4>Gender:{character.gender}</h4>
        </div>
      </main>
    </>
  );
}
