import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useUser (id) {
  const { data, error } = useSWR(`https://jsonplaceholder.typicode.com/users/${id}`, fetcher)

  return {
    user: data,
    isLoading: !error && !data,
    isError: error
  }
}


function Spinner() {
  return <h4>Loading...</h4>
}

export default function SWRBasics ({ id }) {
  const { user, isLoading, isError } = useUser(id)

  if (isLoading) return <Spinner />
  if (isError) return <Error />
  return <h1>{user.name}</h1>
}