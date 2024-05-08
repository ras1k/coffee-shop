export const useUrls = () => {
  const config = useRuntimeConfig();

  const apiBaseUrl = config.public.apiUrl;
  const LOGIN = `/server/user/login`;
  const ALL_PRODUCTS = `/server/products`;
  const CATEGORIES_SUBCATEGORIES = `/server/categories-subcategories`;
  const FILTER_BY_CATEGORIES = `/server/products-by-cat`;
  const FILTER_BY_SUBCATEGORIES = `/server/products-by-subcat`;

  return {
    apiBaseUrl,
    LOGIN,
    ALL_PRODUCTS,
    CATEGORIES_SUBCATEGORIES,
    FILTER_BY_CATEGORIES,
    FILTER_BY_SUBCATEGORIES,
  };
};
