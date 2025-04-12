import Layout from '@/components/layout/Layout';
import PostsList from '@/features/posts/list/PostList';
import { GetServerSideProps } from 'next';
import { Post } from '@/types/Post'; // Import Post type

type HomeProps = {
  initialData: Post[];
};

const Home = ({ initialData }: HomeProps) => {
  return (
    <Layout>
      <PostsList initialData={initialData} />
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch('https://67fa1570094de2fe6ea31be2.mockapi.io/posts');
  const data: Post[] = await res.json(); // Cast to Post[]

  return { props: { initialData: data } };
};

export default Home;
