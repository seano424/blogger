import FeaturedPostsItems from "../display/featured-posts-items";

export default function FeaturedPosts(props) {
  const size = 5;
  const { posts } = props;
  const displayPost = posts
    .slice(1, size)
    .map((post) => <FeaturedPostsItems key={post.slug} post={post} />);
  return (
    <>
      <div>
        <h1 className="font-bold">Featured Resources</h1>
      </div>
      {displayPost}
    </>
  );
}
