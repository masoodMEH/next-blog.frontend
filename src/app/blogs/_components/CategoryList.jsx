import Link from "next/link";

export async function CategoryList() {
  await new Promise((res) => setTimeout(() => res(), 3000));
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/category/list`);

  const {
    data: { categories },
  } = await res.json();

  console.log(categories);

  return (
    <ul className="space-y-4">
      <Link href="/blogs">همه</Link>
      {categories.map((category) => {
        return (
          <li key={category._id}>
            <Link href={`/blogs/category/${categories.slug}`}>
              {category.title}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
