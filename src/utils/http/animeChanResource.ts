import axios, { AxiosInstance } from 'axios';

import type { QuoteResponse } from '@/types/animeChan';

import { ANIMECHAN_URL } from '..';

export const animeChanApi = axios.create({
  baseURL: ANIMECHAN_URL,
});

export class AnimeChanResource {
  private http: AxiosInstance = animeChanApi;

  async getRandomAnimeQuote() {
    return this.http.get<QuoteResponse>('/random');
  }

  async getAnimeQuoteByTitle(title: string) {
    return this.http.get<QuoteResponse>(`/random/anime?title=${title}`);
  }

  async getAnimeQuoteByCharacter(character: string) {
    return this.http.get<QuoteResponse>(`/random/character?name=${character}`);
  }

  async getTenRandomAnimeQuotes() {
    return this.http.get<QuoteResponse[]>('/quotes');
  }

  async getTenAnimeQuotesByTitle(title: string) {
    return this.http.get<QuoteResponse[]>(`/quotes/anime?title=${title}`);
  }

  async getTenAnimeQuotesByCharacter(character: string) {
    return this.http.get<QuoteResponse[]>(`/quotes/character?name=${character}`);
  }
}
