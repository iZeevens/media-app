interface ITunesSearchResponse {
  trackName: string;
  artistName: string;
  collectionName: string;
  artworkUrl100: string;
  collectionPrice: number;
  trackPrice: number;
  trackId: number
}

export type { ITunesSearchResponse };
