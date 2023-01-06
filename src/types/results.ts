export interface QuoteResult {
  title: string;
  character: string;
  quote: string;
}

export interface AnimeResult {
  malId: number;
  image: string;
  title: string;
  titleEnglish: string;
  titleJapanese: string;
  type: string;
  source: string;
  episodes: number | null;
  status: string;
  airing: boolean;
  rating: string;
  score: number | null;
  rank: number;
  popularity: number;
  members: number;
  synopsis: string;
  season: string;
  year: number | null;
}
