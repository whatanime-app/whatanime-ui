import logo from "../assets/whatanime-logo.svg";
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
    <Link href="/">
      <Image src={logo} width={230} height={75} alt="WhatAnime" />
    </Link>
  );
}
