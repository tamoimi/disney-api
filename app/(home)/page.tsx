import Image from "next/image";
import Link from "next/link";

export const metaData = {
  title: "Home",
};

export const API_URL = "https://rickandmortyapi.com/api";

async function getCharacters() {
  const response = await fetch(`${API_URL}/character`);
  const json = await response.json();
  return json;
}

export default async function HomePage() {
  // swr --------------------------------------------------------------------------------------- swr
  // const { data } = useSWR("api/rick-and-morty", getCharacters);
  const characters = await getCharacters();

  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-10">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-6">
        {characters?.results.map((character: any) => (
          <div
            className="max-w-sm bg-white border border-gray-200 rounded-lg shadow "
            key={character.id}
          >
            <Link href={`characters/${character.id}`}>
              <Image
                src={character.image}
                width={300}
                height={300}
                alt="character_img"
                style={{ width: "100%", height: "auto" }}
              />
            </Link>
            <div className="p-5">
              <Link href={`characters/${character.id}`}>
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                  {character.name}
                </h5>
              </Link>
              <p className="mb-3 font-normal text-gray-700 ">status: {character.status}</p>
              <p className="mb-3 font-normal text-gray-700 ">species: {character.species}</p>

              <Link
                href={`characters/${character.id}`}
                className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-teal-700 rounded-lg hover:bg-teal-800"
              >
                Read more
                <svg
                  className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
}
