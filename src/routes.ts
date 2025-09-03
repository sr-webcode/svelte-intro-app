export type RouteNavDetail = {
  id: string;
  label?: string;
  path: string;
};

export const HOME_ROUTE_ID = 'home' as const;
export const CATEGORY_ROUTE_ID = 'categories' as const;
export const ABOUT_ROUTE_ID = 'aboutUs' as const;
export const QUIZ_ROUTE_ID = 'quiz' as const;

type ROUTE_PATH_ID =
  | typeof HOME_ROUTE_ID
  | typeof CATEGORY_ROUTE_ID
  | typeof ABOUT_ROUTE_ID
  | typeof QUIZ_ROUTE_ID;

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
  {
    id: 'quiz',
    path: '/quiz',
  },
];

export const getRoutePath = (routeID: ROUTE_PATH_ID): string => {
  const matchPath =
    ROUTE_PATHS.find((p) => p.id === routeID)?.path ?? ROUTE_PATHS[0].path;

  return matchPath;
};
