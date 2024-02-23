import CharacterInfo from "@/app/components/detail";
import { Suspense } from "react";

export default async function CharacterDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<h1>Loading character info</h1>}>
        <CharacterInfo id={id} />
      </Suspense>
    </div>
  );
}
