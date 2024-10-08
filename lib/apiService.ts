import axios from 'axios';

const PARCL_API_URL = 'https://api.parcllabs.com/v1';
const API_KEY = 'obHpASVAskolDd51FcVINuM2bZ1A8rHEvHxMeUDVftU';  // Replace with your actual API key

export const fetchMarketMetrics = async (parclId: string) => {
  try {
    const response = await axios.get(`${PARCL_API_URL}/market_metrics/${parclId}/All`, {
      headers: {
        'Authorization': API_KEY,
        'Accept': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching market metrics:', error);
    throw error;
  }
};