/* interface propsPost {
  title: string;
  description: string;
  thumbnail: string;
  id: number;
} */

import { useRouter } from 'next/router';
import { useCallback } from 'react';

function PostCard({ post }) {
  const router = useRouter();

  const handlePostClick = useCallback(() => {
    router.push(`/post/${post.id}`);
  }, []);

  return (
    <div className='w-[27.75rem]' onClick={handlePostClick}>
      <img
        className='w-full h-60 object-cover rounded-[1rem] cursor-pointer '
        src={post.thumbnail}
        alt='post thumbnail'
      />

      <h3 className='font-bold mb-[0.625rem] text-2xl '> {post.title}</h3>
      <span className='text-lg'>{post.description}</span>
    </div>
  );
}

export default PostCard;
