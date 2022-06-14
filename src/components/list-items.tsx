import * as React from "react";
import { useQueryClient } from "react-query";
import { useItems } from "../hooks/use-list-items";
import { keyQuery } from "../key-query";
import { Item } from "./types";
type ListItemsProps = {
  setItemId: React.Dispatch<React.SetStateAction<number>>;
};
export default function ListItems({ setItemId }: ListItemsProps) {
  const queryClient = useQueryClient();
  const {
    data: items,
    error,
    isLoading,
    isFetching,
    isIdle,
    refetch,
  } = useItems();

  /*  const [isLoading, setIsLoading] = React.useState(true);
  const [error, setError] = React.useState("");
  const [items, setItems] = React.useState<Post[]>();

  React.useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const data = await getItems();
        setItems(data);
        setError("");
      } catch (error) {
        const errorMessage = error as unknown as ErrorMessage;
        setError(errorMessage.message);
      }
      setIsLoading(false);
    };
    fetchData();
  }, []);
*/
  const handleClick = () => {
    refetch();
  };
  if (isIdle) {
    // Si la consulta está deshabilitada (enabled: false) llamamos a funcion refetch() que nos hara la consulta
    return <button onClick={handleClick}>Fetch items</button>;
  }
  if (isLoading) {
    return (
      <div>
        <span> Loading Items...</span>
      </div>
    );
  }

  if (error) {
    return <p>{error.message}</p>;
  }
  if (!items) return null;

  return (
    <>
      <section>
        <h2>Item List: {isFetching && <span>isFetching</span>}</h2>
        <ul>
          {items.map((item: Item) => (
            <li key={item.id}>
              <a
                style={{
                  color: queryClient.getQueryData([keyQuery, item.id])
                    ? "green"
                    : "black",
                }}
                onClick={() => setItemId(item.id as number)}
                href="##"
              >
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
}
