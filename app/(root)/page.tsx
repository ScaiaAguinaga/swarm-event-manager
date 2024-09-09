"use client";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("/api/events");
        const result = await response.json();
        console.log(result);
      } catch (error) {
        console.log("Failed to fetch data:", error);
      }
    }

    fetchData();
  }, []);

  return <main>Home</main>;
}
