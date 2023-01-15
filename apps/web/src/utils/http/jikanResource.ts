import { colors } from '@whatanime/design-tokens';
import axios, { AxiosInstance } from 'axios';

import type {
  Anime,
  AnimeByIdResponse,
  AnimeByNameResponse,
  AnimeRandomResponse,
  Images,
  TopAnimeResponse,
  TypeTopAnime,
} from '@/types/jikan';
import type { AnimeResult, GetAnimeByTitleOnJikan } from '@/types/results';

export const JIKAN_URL = 'https://api.jikan.moe/v4';

export const jikanApi = axios.create({
  baseURL: JIKAN_URL,
});

export class JikanResource {
  private http: AxiosInstance = jikanApi;

  private animeChunk(animes: Array<AnimeResult>) {
    const chunks = [];
    let count = -1;

    for (let i = 0; i < animes.length; i += 4) {
      for (let j = 1; j < 4; j += 4) {
        count += 1;
      }

      chunks.push({
        animes: animes.slice(i, i + 4),
        page: count,
      });
    }

    return chunks;
  }

  async getAnimesByTitleOnJikan(title: string): Promise<GetAnimeByTitleOnJikan> {
    const { data: response } = await this.http.get<AnimeByNameResponse>(
      `/anime?q=${encodeURI(title)}&order_by=popularity`,
    );
    const animes = response.data.map((anime) => this.formatAnime(anime));

    const animeByTitle = animes.shift();

    if (animeByTitle === undefined) {
      return null;
    }

    return {
      animeByTitle,
      data: this.animeChunk(animes),
    };
  }

  async getAnimeByIdOnJikan(malId: number) {
    const { data: response } = await this.http.get<AnimeByIdResponse>(`/anime/${malId}`);
    return this.formatAnime(response.data);
  }

  async getAnimeRandom() {
    const { data: response } = await this.http.get<AnimeRandomResponse>('/random/anime');
    return this.formatAnime(response.data);
  }

  async getAnimeTop(filter: TypeTopAnime) {
    const { data: response } = await this.http.get<TopAnimeResponse>(`/top/anime?filter=${filter}`);

    const arraySize = {
      airing: 5,
      upcoming: 10,
      bypopularity: 10,
      favorite: 10,
    } as const;

    return response.data.slice(0, arraySize[filter]).map((anime) => this.formatAnime(anime));
  }

  private formatAnime(anime: Anime): AnimeResult {
    return {
      malId: anime.mal_id,
      image: this.imageUrlTransformer(anime.images),
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
        ? anime.synopsis.replace('\n\n[Written by MAL Rewrite]', '').replaceAll('\n', ' ')
        : null,
      season: anime.season,
      year: anime.year || anime.aired.prop.from.year || null,
    };
  }

  private imageUrlTransformer(images: Images) {
    const url = images.webp.large_image_url || images.jpg.large_image_url;
    const { black, white } = colors;

    if (url === 'https://cdn.myanimelist.net/img/sp/icon/apple-touch-icon-256.png') {
      return `https://via.placeholder.com/230x250/${black}/${white}.png?text=whatanime.org`.replaceAll(
        '#',
        '',
      );
    }

    return url;
  }
}

export const AnimesResource = new JikanResource();
