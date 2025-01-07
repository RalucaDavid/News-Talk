import axios from 'axios';

const NEWS_API_URL = 'https://newsapi.org/v2/top-headlines';
const API_KEY = import.meta.env.VITE_NEWS_API_KEY;

if (!API_KEY) {
  throw new Error('VITE_NEWS_API_KEY is not defined');
}

export const fetchNews = async (country: string = 'us') => {
    try {
      const response = await axios.get(NEWS_API_URL, {
        params: {
          country: country,
          apiKey: API_KEY
        }
      });
  
      if (response.status === 200) {
        return response.data.articles;
      } else {
        throw new Error('Failed to fetch news');
      }
    } catch (error) {
      console.error("Error fetching news:", error);
      throw error;
    }
};