// /pages/index.tsx
import Layout from '@/components/layout/Layout';
import PostList from "@/features/posts/PostList";

const Home = () => {

  return (
    <Layout>
      <PostList/>
    </Layout>
  );
};

export default Home;
