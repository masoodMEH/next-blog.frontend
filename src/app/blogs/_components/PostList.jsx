async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 3000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  return posts.length > 0
    ? posts?.map((post) => <div className="">{post.title}</div>)
    : null;
}

export default PostList;