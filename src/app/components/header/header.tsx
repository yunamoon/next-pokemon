"use clinet";
import style from "./header.module.css";
import Link from "next/link";

export default function Header() {
  return (
    <header className={style.header}>
      <nav className={style.nav}>
        <Link className={style.link} href="/">
          Pokemon App
        </Link>
        {/* <Link className={style.link} href="/my">
          My Pokemon
        </Link> */}
      </nav>
    </header>
  );
}
