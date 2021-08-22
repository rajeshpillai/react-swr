import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

// The SWR object returned by useSWR also contains a mutate() function that
// is pre-bound to the SWR's key. It is functionally equivalent to the
// global mutate function but does not require the key parameter.

async function requestUpdateUsername(newName) {
  fetch("http://localhost:4000/users/1", {
    method: "PATCH",
    body: JSON.stringify({
      name: newName.toUpperCase(),
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then((response) => response.json())
    .then((json) => console.log(json));
}

export default function AppWithMutationBinding() {
  const { data, mutate } = useSWR("http://localhost:4000/users/1", fetcher);

  return (
    <div>
      {!data && <h1>Loading...</h1>}
      {data && <h1>My name is {data.name}.</h1>}

      <button
        onClick={async () => {
          const newName = data.name.toUpperCase();
          // send a request to the API to update the data
          await requestUpdateUsername(newName);
          // update the local data immediately and revalidate (refetch)
          // NOTE: key is not required when using useSWR's mutate as it's pre-bound
          mutate({ ...data, name: newName });
        }}
      >
        Uppercase my name!
      </button>
    </div>
  );
}
