import Image from "next/image";
import Link from "next/link";

export default function Navigation() {
  return (
    <div className="pt-3 flex justify-center ">
      <Link href={"/"}>
        <Image src={"/rick-and-morty.png"} width={60} height={60} alt="rick-and-morty" />
      </Link>
    </div>
  );
}
