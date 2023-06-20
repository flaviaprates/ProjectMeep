export type ResponseData = {
  name: string;
  url: string;
}[];

export type UseGetAllProductsResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: ResponseData;
};
