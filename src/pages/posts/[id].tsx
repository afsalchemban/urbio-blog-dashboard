// /pages/index.tsx
import Layout from '@/components/layout/Layout';
import PostDetail from '@/features/posts/PostDetail';
import PostList from "@/features/posts/PostList";

const Home = () => {

  return (
    <Layout>
      <PostDetail/>
    </Layout>
  );
};

export default Home;