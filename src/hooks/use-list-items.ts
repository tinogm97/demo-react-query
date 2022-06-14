import { useQuery } from "react-query";
import { getItems } from "../api-items";
import { Item } from "../components/types";
import { keyQuery } from "../key-query";

export function useItems() {
  return useQuery<Item[], Error>([keyQuery], getItems, {
    /*  refetchOnWindowFocus: false,
        refetchInterval: 5000, */
    //retry: 1  por defecto reintenta 3 veces obtener los datos
  });
}
