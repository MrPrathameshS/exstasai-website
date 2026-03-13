import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(
  process.cwd(),
  "content/blog"
);


// ---------------- GET ALL POSTS ----------------

export function getAllPosts() {
  const files = fs.readdirSync(postsDirectory);

  const posts = files.map((fileName) => {

    const slug = fileName.replace(".mdx", "");

    const fullPath = path.join(
      postsDirectory,
      fileName
    );

    const fileContents =
      fs.readFileSync(fullPath, "utf8");

    const { data } =
      matter(fileContents);

    return {
      slug,
      title: data.title,
      description: data.description,
      date: String(data.date),
    };

  });

  return posts;
}


// ---------------- GET SINGLE POST ----------------

export function getPostBySlug(
  slug: string
) {

  const fullPath = path.join(
    postsDirectory,
    slug + ".mdx"
  );

  const fileContents =
    fs.readFileSync(fullPath, "utf8");

  const { data, content } =
    matter(fileContents);

  return {
    slug,
    title: data.title,
    date: String(data.date),
    content,
  };

}