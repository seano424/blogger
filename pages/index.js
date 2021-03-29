import Head from "next/head";

import Hero from "../components/hero";
import Layout from "../components/layout";
import DUMMY_POSTS from "../data/dummy-data";
import PostsList from '../components/posts/all-posts/posts-list'
import FeaturedList from '../components/posts/featured/featured-list'

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="max-w-6xl m-auto">
        <Hero title="The Diver Resource Library" isThere />
        <section className="mt-10">
          <FeaturedList posts={DUMMY_POSTS}/>
        </section>
        <section>
          <PostsList posts={DUMMY_POSTS}/>
        </section>
      </main>
    </Layout>
  );
}
