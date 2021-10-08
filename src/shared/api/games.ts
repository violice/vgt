import makeRequest from 'shared/utils/api';
import type { Game } from 'shared/types/models';

type ResultWithPagination<T> = {
  results: Array<T>;
};

export const getGames = async ({
  page = 1,
  prevData = [],
}: {
  page?: number;
  prevData?: Array<Game>;
} = {}) => {
  const data = await makeRequest<
    ResultWithPagination<{ name: string; background_image: string; slug: string }>
  >({
    method: 'GET',
    url: 'games',
    params: { page },
  });

  const games: Array<Game> = [
    ...prevData,
    ...data.results.map(result => {
      return {
        name: result.name,
        image: result.background_image.replace('media/', 'media/crop/600/400/'),
        slug: result.slug,
        // "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        // "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      };
    }),
  ];

  return games;
};

export const getGameBySlug = async (slug: string) => {
  const data = await makeRequest<{ name: string; background_image: string; slug: string }>({
    method: 'GET',
    url: `games/${slug}`,
  });

  const game: Game = {
    name: data.name,
    image: data.background_image,
    slug: data.slug,
  };

  return game;
};
