import * as React from "react";
import { useShowItem } from "../hooks/use-show-item";
type ShowItemProps = {
  itemId: number;
};
export default function ShowItem({ itemId }: ShowItemProps) {
  const { data: item, error, isLoading } = useShowItem(itemId);
  if (itemId < 1) return null;
  if (isLoading) {
    return (
      <div>
        <span>Loading Item...</span>
      </div>
    );
  }

  if (error) {
    return <div>Error fetching item: {error.message}</div>;
  }
  if (!item) return null;
  return (
    <article>
      <h1>{item.title}</h1>
      <p>{item.body}</p>
    </article>
  );
}
