import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
export const metadata = {
  title: "home",
};
export default function Home() {
  return (
    <>
      <section className="main-div">
        <h1>Home Page</h1>
      </section>
    </>
  );
}
