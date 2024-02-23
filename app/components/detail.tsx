import { API_URL } from "@/app/(home)/page";
import Image from "next/image";

async function getDetail(id: string) {
  const response = await fetch(`${API_URL}/character/${id}`);
  return response.json();
}

export default async function CharacterInfo({ id }: { id: string }) {
  const character = await getDetail(id);
  return (
    <>
      <main className="flex flex-col items-center justify-center px-5">
        <Image
          src={character.image}
          width={300}
          height={300}
          alt="character_img"
          style={{ width: "100%", height: "auto", borderRadius: "50%", marginBottom: 20 }}
        />
        <h1>Name:{character.name}</h1>
        <h1>Name:{character.name}</h1>
        <h4>Status:{character.status}</h4>
        <h4>Origin:{character.origin.name}</h4>
        <h4>Gender:{character.gender}</h4>
      </main>
    </>
  );
}
