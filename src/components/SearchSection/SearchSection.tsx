"use client";
import { useEffect, useState } from "react";
import { ITunesSearchResponse } from "@/types/types";
import fetchSearchResults from "@/api/itunesApi";
import SearchBar from "../SearchBar/SearchBar";
import DropDown from "../DropDown/DropDown";

interface ISearchSectionpProps {
  setResults: React.Dispatch<React.SetStateAction<ITunesSearchResponse[] | undefined>>;
}

function SearchSection({ setResults }: ISearchSectionpProps) {
  const [term, setTerm] = useState<string>("");
  const [selectedMediaType, setSelectedMediaType] = useState<string>("all");
  const [entity, setEntity] = useState<string>("");

  useEffect(() => {
    const handleSearch = async (
      term: string,
      mediaType: string,
      entity: string
    ) => {
      if (!term || term.length < 2) return;

      try {
        const results = await fetchSearchResults(term, mediaType, entity);

        setResults(results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    handleSearch(term, selectedMediaType, entity);
  }, [term, selectedMediaType, entity, setResults]);

  return (
    <div className="flex justify-center items-center gap-5">
      <SearchBar term={term} setTerm={setTerm} />
      <DropDown
        selectedMediaType={selectedMediaType}
        setSelectedMediaType={setSelectedMediaType}
        entity={entity}
        setEntity={setEntity}
      />
    </div>
  );
}

export default SearchSection;
