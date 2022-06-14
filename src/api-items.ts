import axios from "axios";
import { Item } from "./components/types";

const API = "http://localhost:3005";

export const getItemById = async (itemId: number) => {
  const { data } = await axios.get(`${API}/items/${itemId}`);
  return data;
};

export const getItems = async () => {
  const { data } = await axios.get(`${API}/items`);
  return data;
};

export const createNewItem = async (item: Item) => {
  const { data } = await axios.post(`${API}/items`, item);
  return data;
};
