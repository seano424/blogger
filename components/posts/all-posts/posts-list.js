import PostItem from './post-item'

export default function PostsList(props) {
  const postList = props.posts.map((post) => (
    <PostItem key={post.slug} post={post} />
  ));

  return (
    <div className="grid grid-cols-3 gap-5">{postList}</div>
  )
}
