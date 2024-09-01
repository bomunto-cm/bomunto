import PostCard from '@/components/common/PostCard';
import React from 'react'

interface Props {
  posts: any;
}

function Posts({ posts }: Props) {
  if (!posts || posts.length === 0) {
    return <p>No posts available</p>; // or any other placeholder content
  }

  return (
    <section className="section">
      <div className="container">
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 sm:gap-10">
          {posts.map((post: any, i: number) => (
            <PostCard key={post.fields.slug} post={post} />
          ))}
        </ul>
      </div>
    </section>
  );
}


export default Posts