import Layout from "../../components/layout";
import PostItem from "../../components/posts/all-posts/post-item";
import DUMMY_POSTS from "../../data/dummy-data";

export default function Posts(props) {
  const postList = DUMMY_POSTS.map((post) => (
    <PostItem key={post.slug} post={post} />
  ));
  
  return (
    <Layout>
      <div className="grid grid-cols-3 gap-5 mx-9">{postList}</div>
    </Layout>
  );
}
