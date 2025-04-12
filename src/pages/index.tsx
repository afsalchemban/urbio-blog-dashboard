import Layout from '@/components/layout/Layout';
import PostsList from '@/features/posts/list/PostList';
import { GetServerSideProps } from 'next';

const Home = ({ initialData }: { initialData: any[] }) => {
  return (
    <Layout>
      <PostsList initialData={initialData} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch('https://67fa1570094de2fe6ea31be2.mockapi.io/posts');
  const data = await res.json();

  return { props: { initialData: data } };
};

export default Home;
