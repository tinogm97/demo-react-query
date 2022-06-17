import React from "react";
import { QueryClient, QueryClientProvider, useQuery } from "react-query";
import { getItems } from "../api-items";
import { useMutateCreateItem } from "../hooks/use-mutate-create-item";
import { Item } from "./types";

export const useTest = () => useQuery<Item[], Error>(["items"], getItems);

export function ComponentOne() {
  const { data, isFetching, isStale } = useTest();
  if (!data) return <div>Loading...</div>;

  if (isFetching) return <p>Fecthing</p>;
  return (
    <div style={{ left: "50%" }}>
      <h1> I'M COMPONENT ONE</h1>
      <h2>
        {" "}
        {"COMPONENT ONE PAINTED AT..." +
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds() +
          "."}
      </h2>
      <h3> {data[data.length - 1].body} </h3>
      {isStale ? <h3> ESTOY STALE </h3> : <h3> ESTOY FRESH </h3>}
      <CreateItemButton />
    </div>
  );
}

export function ComponentTwo() {
  const { data, isStale } = useTest();
  if (!data) return <div>Loading...</div>;
  return (
    <div style={{ left: "50%" }}>
      <h1> I'M COMPONENT TWO</h1>
      <h2>
        {" "}
        {"COMPONENT TWO PAINTED AT..." +
          new Date().getHours() +
          ":" +
          new Date().getMinutes() +
          ":" +
          new Date().getSeconds() +
          "."}
      </h2>
      <h3> {data[data.length - 1].body} </h3>
      {isStale ? <h3> ESTOY STALE </h3> : <h3> ESTOY FRESH </h3>}
      <CreateItemButton />
    </div>
  );
}

function CreateItemButton() {
  const { mutate } = useMutateCreateItem();

  const createRandomItem: React.MouseEventHandler<HTMLButtonElement> = (e) => {
    e.preventDefault();
    const title = `Item ${Math.floor(Math.random() * 100)}`;
    const body = `Body ${Math.floor(Math.random() * 100)}`;
    mutate({ title, body });
  };
  return <button onClick={createRandomItem}>Generate Data</button>;
}
