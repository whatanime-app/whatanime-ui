import axios, { AxiosInstance } from 'axios';

import type {
  Anime,
  AnimeByIdResponse,
  AnimeByNameResponse,
  AnimeRandomResponse,
  TopAnimeResponse,
} from '@/types/jikan';
import type { AnimeResult } from '@/types/results';

import { JIKAN_URL } from '..';

export const jikanApi = axios.create({
  baseURL: JIKAN_URL,
});

export class JikanResource {
  private http: AxiosInstance = jikanApi;

  async getAnimesByTitleOnJikan(title: string) {
    const { data: response } = await this.http.get<AnimeByNameResponse>(
      `/anime?q=${title}&order_by=score&sort=desc`,
    );
    return response.data.map((anime) => this.formatAnime(anime));
  }

  async getAnimeByIdOnJikan(malId: number) {
    const { data: response } = await this.http.get<AnimeByIdResponse>(`/anime/${malId}`);
    return this.formatAnime(response.data);
  }

  async getAnimeRandom() {
    const { data: response } = await this.http.get<AnimeRandomResponse>('/random/anime');
    return this.formatAnime(response.data);
  }

  async getAnimeTop(filter: 'airing' | 'upcoming' | 'bypopularity' | 'favorite') {
    const { data: response } = await this.http.get<TopAnimeResponse>(`/top/anime?filter=${filter}`);
    return response.data.map((anime) => this.formatAnime(anime));
  }

  private formatAnime(anime: Anime): AnimeResult {
    return {
      malId: anime.mal_id,
      image: anime.images.webp.large_image_url || anime.images.jpg.large_image_url,
      title: anime.title,
      titleEnglish: anime.title_english,
      titleJapanese: anime.title_japanese,
      type: anime.type,
      source: anime.source,
      episodes: anime.episodes || null,
      status: anime.status,
      airing: anime.airing,
      rating: anime.rating,
      score: anime.score || null,
      rank: anime.rank,
      popularity: anime.popularity,
      members: anime.members,
      synopsis: anime.synopsis
        .replace('\n\n[Written by MAL Rewrite]', '')
        .replaceAll('\n', '</br>'),
      season: anime.season,
      year: anime.year || anime.aired.prop.from.year || null,
    };
  }
}
