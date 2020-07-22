import React, { useState } from "react";

export default function CreatePost({ user, posts, dispatch }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  function handleTitle(event) {
    setTitle(event.target.value);
  }

  function handleContent(event) {
    setContent(event.target.value);
  }

  function handleCreate() {
    dispatch({ type: "CREATE_POST", title, content, author: user });
  }

  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        handleCreate();
      }}
    >
      <p>
        Author: <b>{user}</b>
      </p>
      <div>
        <label htmlFor='create-title'>Title:</label>
        <input
          type='text'
          value={title}
          onChange={handleTitle}
          id='create-title'
          name='create-title'
        />
      </div>
      <textarea value={content} onChange={handleContent} />
      <input type='submit' value='Create' />
    </form>
  );
}