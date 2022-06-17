import * as React from "react";
import { BackButton } from "./components/back-button";

import CreateItem from "./components/create-item";
import ListItems from "./components/list-items";
import ShowItem from "./components/show-item";

export default function App() {
  const [itemId, setItemId] = React.useState(-1);

  return (
    <div>
      <h1>Demo React-query</h1>
      <BackButton itemId={itemId} setItemId={setItemId} />
      <ShowItem itemId={itemId} />
      {itemId === -1 && (
        <div>
          <CreateItem />
          <ListItems setItemId={setItemId} />
        </div>
      )}
      {/*  <ComponentFather /> */}
    </div>
  );
}
