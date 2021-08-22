import React from "react";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

function useUser() {
  return useSWR("https://jsonplaceholder.typicode.com/users/1", fetcher);
}

function Avatar() {
  const { data, error } = useUser();

  if (error) return <div>{error}</div>;
  if (!data) return <div>loading..</div>;

  return <div>Avtar-{data.name}</div>;
}

export default function AppAvatar() {
  return (
    <>
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
      <Avatar />
    </>
  );
}
