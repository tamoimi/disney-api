import Loading from "@/app/(home)/loading";
import CharacterInfo from "@/app/components/detail";
import { Suspense } from "react";

export default async function CharacterDetail({ params: { id } }: { params: { id: string } }) {
  return (
    <div>
      <Suspense fallback={<Loading />}>
        <CharacterInfo id={id} />
      </Suspense>
    </div>
  );
}
