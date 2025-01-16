import { Input } from "@nextui-org/react";
import { SeachIcon } from "@/icons/icons";

interface ISearchBarProps {
  term: string;
  setTerm: React.Dispatch<React.SetStateAction<string>>;
}

function SearchBar({ term, setTerm }: ISearchBarProps) {
  return (
    <div className="max-w-md w-full">
      <Input
        placeholder="Search..."
        startContent={<SeachIcon width={20} height={20} />}
        onChange={(e) => setTerm(e.target.value)}
        value={term}
      />
    </div>
  );
}

export default SearchBar;
