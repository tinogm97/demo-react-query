import { useQuery } from "react-query";
import { getItemById } from "../api-items";
import { Item } from "../components/types";
import { keyQuery } from "../key-query";

export function useShowItem(postId: number) {
  return useQuery<Item, Error>([keyQuery, postId], () => getItemById(postId));
}
