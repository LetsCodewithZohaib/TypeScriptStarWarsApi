import { useQuery } from 'react-query';

import { Starships } from 'swapi-ts';

export const useGetStarships = (starships: string[]) => {
  const { data, isLoading, isError } = useQuery(
    ['starships', starships.toString()],
    async () => {
      const response = await Starships.find((starship) => starships.includes(starship.url));

      return response.resources.map((item) => item.value);
    },
    {
      cacheTime: Infinity,
    }
  );

  return {
    data: data || [],
    isLoading,
    isError,
  };
};
