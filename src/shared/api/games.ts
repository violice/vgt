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
  const data = await makeRequest<ResultWithPagination<{ name: string; background_image: string }>>({
    method: 'GET',
    url: 'games',
    params: { page },
  });

  const games = [
    ...prevData,
    ...data.results.map(result => {
      return {
        name: result.name,
        image: result.background_image.replace('media/', 'media/crop/600/400/'),
        // "https://media.rawg.io/media/crop/600/400/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
        // "https://media.rawg.io/media/games/618/618c2031a07bbff6b4f611f10b6bcdbc.jpg"
      };
    }),
  ];

  return games;
};
