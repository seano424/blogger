import FeaturedPosts from "./grid/featured-posts";
import FeaturedPost from "./grid/featured-post";

export default function FeaturedList(props) {
  return (
    <div className="grid grid-flow-col gap-5">
      <div className="row-span-4 col-span-3">
        <FeaturedPost posts={props.posts} />
      </div>
      <div className="col-span-1">
        <FeaturedPosts posts={props.posts} />
      </div>
    </div>
  );
}
