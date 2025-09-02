import type { Component } from 'svelte';
import type { IconProps } from '@lucide/svelte';
import Brain from '@lucide/svelte/icons/brain';
import Book from '@lucide/svelte/icons/book-open';
import Film from '@lucide/svelte/icons/film';
import Theater from '@lucide/svelte/icons/theater';
import Television from '@lucide/svelte/icons/tv';
import BoardGame from '@lucide/svelte/icons/dice-5';
import ScienceNature from '@lucide/svelte/icons/test-tube';
import ScienceComputers from '@lucide/svelte/icons/zap';
import ScienceMath from '@lucide/svelte/icons/sigma';
import Mythology from '@lucide/svelte/icons/omega';
import Sports from '@lucide/svelte/icons/bike';
import Geography from '@lucide/svelte/icons/map';
import History from '@lucide/svelte/icons/history';
import Politics from '@lucide/svelte/icons/megaphone';
import Art from '@lucide/svelte/icons/brush';
import Celebrities from '@lucide/svelte/icons/users';
import Animals from '@lucide/svelte/icons/dog';
import Vehicles from '@lucide/svelte/icons/car';
import Comics from '@lucide/svelte/icons/newspaper';
import Gadgets from '@lucide/svelte/icons/tablet';
import Anime from '@lucide/svelte/icons/wallpaper';
import Cartooon from '@lucide/svelte/icons/tv-minimal-play';

export type CategoryImage = {
  id: number;
  name: string;
  image: Component<IconProps, {}, ''>;
};

export const CATEGORY_IMAGES: CategoryImage[] = [
  {
    id: 9,
    name: 'General Knowledge',
    image: Brain,
  },
  {
    id: 10,
    name: 'Entertainment: Books',
    image: Book,
  },
  {
    id: 11,
    name: 'Entertainment: Film',
    image: Film,
  },
  {
    id: 12,
    name: 'Entertainment: Music',
    image: Theater, // Assigned Theater as no specific music icon is provided
  },
  {
    id: 13,
    name: 'Entertainment: Musicals & Theatres',
    image: Theater,
  },
  {
    id: 14,
    name: 'Entertainment: Television',
    image: Television,
  },
  {
    id: 15,
    name: 'Entertainment: Video Games',
    image: BoardGame, // Assigned BoardGame as a placeholder since no specific video game icon
  },
  {
    id: 16,
    name: 'Entertainment: Board Games',
    image: BoardGame,
  },
  {
    id: 17,
    name: 'Science & Nature',
    image: ScienceNature,
  },
  {
    id: 18,
    name: 'Science: Computers',
    image: ScienceComputers,
  },
  {
    id: 19,
    name: 'Science: Mathematics',
    image: ScienceMath,
  },
  {
    id: 20,
    name: 'Mythology',
    image: Mythology,
  },
  {
    id: 21,
    name: 'Sports',
    image: Sports,
  },
  {
    id: 22,
    name: 'Geography',
    image: Geography,
  },
  {
    id: 23,
    name: 'History',
    image: History,
  },
  {
    id: 24,
    name: 'Politics',
    image: Politics,
  },
  {
    id: 25,
    name: 'Art',
    image: Art,
  },
  {
    id: 26,
    name: 'Celebrities',
    image: Celebrities,
  },
  {
    id: 27,
    name: 'Animals',
    image: Animals,
  },
  {
    id: 28,
    name: 'Vehicles',
    image: Vehicles,
  },
  {
    id: 29,
    name: 'Entertainment: Comics',
    image: Comics,
  },
  {
    id: 30,
    name: 'Science: Gadgets',
    image: Gadgets,
  },
  {
    id: 31,
    name: 'Entertainment: Japanese Anime & Manga',
    image: Anime,
  },
  {
    id: 32,
    name: 'Entertainment: Cartoon & Animations',
    image: Cartooon, // Note: 'Cartooon' seems to be a typo in your import; should be 'Cartoon'
  },
];
