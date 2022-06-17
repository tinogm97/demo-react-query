import { useQuery } from "react-query";
import { getItems } from "../api-items";
import { Item } from "../components/types";
import { keyQuery } from "../key-query";

export function useItems() {
  return useQuery<Item[], Error>([keyQuery], getItems, {
    refetchOnWindowFocus: false,
    retry: 1,
    onError: (err) => {
      console.log(`Obtenemos información del error: ${err}`);
    },
    onSuccess: (data) =>
      console.log(
        `Obtenemos información de la lista de items: ${JSON.stringify(data)}`
      ),
  });
}
