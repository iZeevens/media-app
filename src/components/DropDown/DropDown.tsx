import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@nextui-org/react";

interface IDropDownProps {
  selectedMediaType: string;
  setSelectedMediaType: React.Dispatch<React.SetStateAction<string>>;
  entity: string;
  setEntity: React.Dispatch<React.SetStateAction<string>>;
}

const mediaTypes: { [key: string]: string[] } = {
  all: [
    "movie",
    "album",
    "allArtist",
    "podcast",
    "musicVideo",
    "mix",
    "audiobook",
    "tvSeason",
    "allTrack",
  ],
  movie: ["movieArtist", "movie"],
  podcast: ["podcastAuthor", "podcast"],
  music: ["musicArtist", "musicTrack", "album", "musicVideo", "mix", "song"],
  musicVideo: ["musicArtist", "musicVideo"],
  audiobook: ["audiobookAuthor", "audiobook"],
  shortFilm: ["shortFilmArtist", "shortFilm"],
  tvShow: ["tvEpisode", "tvSeason"],
  software: ["software", "iPadSoftware", "macSoftware"],
  ebook: ["ebook"],
};

function DropDown({
  selectedMediaType,
  setSelectedMediaType,
  entity,
  setEntity,
}: IDropDownProps) {
  return (
    <div className="flex gap-2 max-[390px]:w-full max-[390px]:content-end">
      <Dropdown>
        <DropdownTrigger>
          <button className="w-26 px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200">
            {selectedMediaType || "Select Media Type"}
          </button>
        </DropdownTrigger>
        <DropdownMenu
          onAction={(key) => {
            setSelectedMediaType(key as string);
            setEntity("");
          }}
        >
          {Object.keys(mediaTypes).map((type) => (
            <DropdownItem key={type}>{type}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
      <Dropdown>
        <DropdownTrigger>
          <button className="min-w-[130px]  h-12 px-4 py-2 border rounded bg-gray-100 hover:bg-gray-200">
            {entity || "Select Entity"}
          </button>
        </DropdownTrigger>
        <DropdownMenu onAction={(key) => setEntity(key as string)}>
          {mediaTypes[selectedMediaType].map((ent) => (
            <DropdownItem key={ent}>{ent}</DropdownItem>
          ))}
        </DropdownMenu>
      </Dropdown>
    </div>
  );
}

export default DropDown;
