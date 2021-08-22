import React from "react";
import { useSWRInfinite } from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const PAGE_SIZE = 6;

export default function PaginationDemo() {
  const { data, error, mutate, size, setSize, isValidating } = useSWRInfinite(
    (index) =>
      `https://jsonplaceholder.typicode.com/posts?_limit=${PAGE_SIZE}&_page=${
        index + 1
      }`,
    fetcher,
    { revalidateAll: false }
  );

  const posts = data ? [].concat(...data) : [];
  const isLoadingInitialData = !data && !error;
  const isLoadingMore =
    isLoadingInitialData ||
    (size > 0 && data && typeof data[size - 1] === "undefined");
  const isEmpty = data?.[0]?.length === 0;
  const isReachingEnd =
    isEmpty || (data && data[data.length - 1]?.length < PAGE_SIZE);
  const isRefreshing = isValidating && data && data.length === size;

  return (
    <div style={{ fontFamily: "sans-serif" }}>
      <p>
        showing {size} page(s) of {isLoadingMore ? "..." : posts.length}{" "}
        issue(s){" "}
        <button
          disabled={isLoadingMore || isReachingEnd}
          onClick={() => setSize(size + 1)}
        >
          {isLoadingMore
            ? "loading..."
            : isReachingEnd
            ? "no more issues"
            : "load more"}
        </button>
        <button disabled={isRefreshing} onClick={() => mutate()}>
          {isRefreshing ? "refreshing..." : "refresh"}
        </button>
        <button disabled={!size} onClick={() => setSize(0)}>
          clear
        </button>
        <button
          onClick={() => {
            setSize(size - 1);
          }}
        >
          Previous {size - 1}
        </button>
        <button
          onClick={() => {
            setSize(size + 1);
          }}
        >
          Next {size + 1}
        </button>
      </p>
      {isEmpty ? <p>Yay, no issues found.</p> : null}
      {posts.map((post) => {
        return (
          <p key={post.id} style={{ margin: "6px 0" }}>
            - {post.title}
          </p>
        );
      })}
    </div>
  );
}
