import Head from 'next/head';
import Layout from '../../components/Layout';

const post = {
  id: '1',
  title: 'post X',
  description:
    '  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis lacus quam, fringilla vel mauris auctor, ullamcorper cursus metus. Praesent a ante ultricies nunc efficitur vehicula non ut nulla.  ',
  thumbnail:
    'http://www.mdtop.com.br/wp-content/uploads/2021/01/placeholder-images-image_large.png',
};

function Post() {
  return (
    <div>
      <Head>
        <title>Post | Coders Club</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <div className='w-4/5 a-auto min-h-[21.5rem] p-14'>
        <div className='w-full'>
          <img
            className='w-full h-[26rem] object-cover rounded-[1.875rem] '
            src={post.thumbnail}
            alt='Post img'
          />
        </div>
      </div>
    </div>
  );
}

export default Post;

Post.getLayout = function getlayout(page) {
  return <Layout title={post.title}>{page}</Layout>;
};
