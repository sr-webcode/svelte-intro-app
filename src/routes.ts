export type RouteNavDetail = {
  id: string;
  label: string;
  path: string;
};

export const HOME_PATH_ID = 'home' as const;
export const CATEGORY_PATH_ID = 'categories' as const;
export const ABOUT_PATH_ID = 'aboutUs' as const;

type ROUTE_PATH_ID = 'home' | 'categories' | 'aboutUs';

export const ROUTE_PATHS: RouteNavDetail[] = [
  {
    id: 'home',
    label: 'Home',
    path: '/',
  },
  {
    id: 'categories',
    label: 'Categories',
    path: '/categories',
  },
  {
    id: 'aboutUs',
    label: 'About Us',
    path: '/about',
  },
];

export const getRoutePath = (pathID: ROUTE_PATH_ID): string => {
  const matchPath =
    ROUTE_PATHS.find((p) => p.id === pathID)?.path ?? ROUTE_PATHS[0].path;
  return matchPath;
};
