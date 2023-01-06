import axios, { AxiosInstance } from 'axios';

import type { AnimeByIdResponse, AnimeByNameResponse, AnimeRandomResponse } from '@/types/jikan';

import { JIKAN_URL } from '..';

export const jikanApi = axios.create({
  baseURL: JIKAN_URL,
});

export class JikanResource {
  private http: AxiosInstance = jikanApi;

  async getAnimesByTitleOnJikan(title: string) {
    return this.http.get<AnimeByNameResponse>(`/anime?q=${title}&order_by=score&&sort=desc`);
  }

  async getAnimeByIdOnJikan(malId: number) {
    return this.http.get<AnimeByIdResponse>(`/anime/${malId}`);
  }

  async getAnimeRandom() {
    return this.http.get<AnimeRandomResponse>('/random/anime');
  }

  async getAnimeTop() {
    return this.http.get<AnimeRandomResponse>('/top/anime');
  }
}
