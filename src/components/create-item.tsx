import * as React from "react";
import { useMutateCreateItem } from "../hooks/use-mutate-create-item";

function CreateItem() {
  const [title, setTitle] = React.useState("");
  const [body, setBody] = React.useState("");

  const { mutate, isLoading, isSuccess, reset } = useMutateCreateItem();

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();
    mutate(
      { title, body },
      {
        onSuccess: () => {
          setTitle("");
          setBody("");
        },
      }
    );
  };

  return (
    <section>
      <h2>Create a new item:</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            <b>Title:</b>
          </label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            id="title"
          />
        </div>
        <div>
          <label htmlFor="content">
            <b>Content:</b>
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            id="content"
          ></textarea>
        </div>

        <button disabled={isLoading || !title}>
          {isLoading ? (
            <>
              <span> Submitting...</span>
            </>
          ) : (
            "Submit"
          )}
        </button>

        {isSuccess && (
          <div>
            The item was saved successfuly
            <button onClick={reset} type="button">
              X
            </button>
          </div>
        )}
      </form>
    </section>
  );
}

export default CreateItem;
