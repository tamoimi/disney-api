import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="py-4 flex justify-center ">
      <Link href={"/"}>
        <Image src={"/rick-and-morty.png"} width={80} height={80} alt="rick-and-morty" />
      </Link>
    </div>
  );
}
