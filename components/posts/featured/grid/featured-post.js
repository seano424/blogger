import FeaturedPostItem from "../display/featured-post-item";

export default function FeaturedPost(props) {
  const size = 1;
  const { posts } = props;
  const featuredPost = posts
    .slice(0, size)
    .map((post) => <FeaturedPostItem key={post.slug} post={post} />);

  return <>{featuredPost}</>;
}
