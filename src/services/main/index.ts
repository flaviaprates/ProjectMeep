import api from "libs/axios/api";
import parseResponseData from "libs/axios/parseResponseData";
import { UseQueryOptions, useQuery } from "react-query";
import { getAllProductsKey } from "./keys";
import { UseGetAllProductsResponse } from "./types";

const useGetAllProducts = (
  options: UseQueryOptions<UseGetAllProductsResponse>
) => {
  return useQuery<UseGetAllProductsResponse>(
    getAllProductsKey(),
    async () => {
      return await api
        .get<UseGetAllProductsResponse>(`/pokemon`)
        .then(parseResponseData);
    },
    options
  );
};

export { useGetAllProducts };
