import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
// import Todolist from "../components/todolist";
// import { Button } from "@chakra-ui/react";
// import { MdBuild , MdCall } from "react-icons/md"

import Button1 from "../components/button";

export default function Home() {
  return (
    <div className={styles.container}>
      <Button1 />
    </div>
  );
}
