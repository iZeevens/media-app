"use client";
import { useState } from "react";
import { ITunesSearchResponse } from "@/types/types";
import SearchSection from "@/components/SearchSection/SearchSection";
import CardMedia from "@/components/CardMedia/CardMedia";

export default function HomeMediaPage() {
  const [results, setResults] = useState<ITunesSearchResponse[] | []>([]);

  return (
    <div className="max-w-[1600px] mx-auto p-5">
      <header className="mb-10">
        <SearchSection setResults={setResults} />
      </header>
      <main>
        <CardMedia results={results} />
      </main>
    </div>
  );
}
