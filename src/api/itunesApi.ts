import axios from "axios";

const fetchSearchResults = async (
  term: string,
  mediaType: string,
  entity: string
) => {
  if (!term) return;

  try {
    const params: {
      term: string;
      media?: string;
      entity?: string;
      limit: number;
      country?: string;
    } = {
      term,
      limit: 10,
      country: "US",
    };

    if (mediaType) params.media = mediaType;
    if (entity) params.entity = entity;

    const { data } = await axios.get("https://itunes.apple.com/search", {
      params,
    });
    return data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export default fetchSearchResults;
