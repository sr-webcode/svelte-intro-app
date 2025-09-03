import axios from 'axios';

const BASE_URL = 'https://opentdb.com/api.php?amount=5';

export type FetchResponse = {
  response_code: number;
  results: Result[];
} | null;

export interface Result {
  type: 'multiple' | 'boolean';
  difficulty: 'easy' | 'medium' | 'hard';
  category: string;
  question: string;
  correct_answer: string;
  incorrect_answers: string[];
}

export const fetchQuestionsRandom = async (): Promise<FetchResponse> => {
  try {
    const request = axios.get(BASE_URL);
    const data: FetchResponse = (await request).data;
    return data;
  } catch (error) {
    return null;
  }
};

// export const fetchQuestionsBycategory = async (): Promise<FetchResponse> => {
//   try {
//     const request = axios.get('https://opentdb.com/api_category.php');
//     const data: FetchResponse = (await request).data;
//     return data;
//   } catch (error) {
//     return null;
//   }
// };
