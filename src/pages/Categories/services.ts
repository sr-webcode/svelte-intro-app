import axios from 'axios';

export type Category = {
  id: number;
  name: string;
};

type FetchResponse = {
  trivia_categories: Category[]
}

export const fetchCategories = async (): Promise<FetchResponse> => {
  try {
    const request = axios.get('https://opentdb.com/api_category.php');
    const data: FetchResponse = (await request).data;
    return data;
  } catch (error) {
    console.log(error);
    return {trivia_categories: []}
  }
};
