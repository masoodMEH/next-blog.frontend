import Image from "next/image";

async function PostList() {
  await new Promise((res) => setTimeout(() => res(), 3000));

  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/post/list`);
  const {
    data: { posts },
  } = await res.json();
  return posts.length > 0 ? (
    <div className="grid grid-cols-12 gap-8">
      {posts.map((post) => (
        <div className="col-span-12 sm:col-span-4 lg:cols-span-6 border border-secondary-300 p-2 rounded-lg">
          <div className="relative aspect-w-16 aspect-h-9 overflow-hidden rounded-md mb-6">
            <Image
              src={post.coverImageUrl}
              alt={post.title}
              fill
              className="object-cover object-center hover:scale-110 translate-all duration-300 ease-outt"
              quality={80}
            />
          </div>
        </div>
      ))}
    </div>
  ) : null;
}

export default PostList;
