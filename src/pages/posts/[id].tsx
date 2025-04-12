// /pages/index.tsx
import Layout from '@/components/layout/Layout';
import PostDetail from '@/features/posts/PostDetail';

const Home = () => {

  return (
    <Layout>
      <PostDetail/>
    </Layout>
  );
};

export default Home;