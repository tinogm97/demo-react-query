import { useMutation, useQueryClient } from "react-query";
import { createNewItem } from "../api-items";
import { Item } from "../components/types";
import { keyQuery } from "../key-query";

export function useMutateCreateItem() {
  const queryClient = useQueryClient();

  return useMutation(createNewItem, {
    onSuccess: (item: Item) => {
      queryClient.setQueryData([keyQuery], (prevItems) => {
        const items = prevItems as unknown as Item[];
        items.concat(item);
      });
      queryClient.invalidateQueries([keyQuery]);
    },
  });
}
