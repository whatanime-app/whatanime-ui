import axios, { AxiosInstance } from 'axios';

import type { QuoteResponse } from '@/types/animeChan';
import type { QuoteResult } from '@/types/results';

export const ANIMECHAN_URL = 'https://animechan.vercel.app/api';

export const animeChanApi = axios.create({
  baseURL: ANIMECHAN_URL,
});

class AnimeChanResource {
  private http: AxiosInstance = animeChanApi;

  async getRandomAnimeQuote() {
    const { data } = await this.http.get<QuoteResponse>('/random');
    return this.formatQuote(data);
  }

  async getAnimeQuoteByTitle(title: string) {
    const { data } = await this.http.get<QuoteResponse>(`/random/anime?title=${title}`);
    return this.formatQuote(data);
  }

  async getAnimeQuoteByCharacter(character: string) {
    const { data } = await this.http.get<QuoteResponse>(`/random/character?name=${character}`);
    return this.formatQuote(data);
  }

  async getTenRandomAnimeQuotes() {
    const { data } = await this.http.get<QuoteResponse[]>('/quotes');
    return data.map((quote) => this.formatQuote(quote));
  }

  async getTenAnimeQuotesByTitle(title: string) {
    const { data } = await this.http.get<QuoteResponse[]>(`/quotes/anime?title=${title}`);
    return data.map((quote) => this.formatQuote(quote));
  }

  async getTenAnimeQuotesByCharacter(character: string) {
    const { data } = await this.http.get<QuoteResponse[]>(`/quotes/character?name=${character}`);
    return data.map((quote) => this.formatQuote(quote));
  }

  private formatQuote({ anime, character, quote }: QuoteResponse): QuoteResult {
    return {
      title: anime,
      character,
      quote,
    };
  }
}

export const QuotesResource = new AnimeChanResource();
