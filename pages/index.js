import axios from 'axios';
import Layout from '../components/Layout';
import Featured from '../components/Featured';
import Trending from '../components/Trending';

const Index = ({ featured }) => (
  <Layout>
    <div>
      <h1>Featured News</h1>
      <Featured featured={featured} />
      <h1>Trending News</h1>
      <Trending />
    </div>
  </Layout>
);

export async function getStaticProps() {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');

    return {
      props: {
        featured: Array.isArray(response.data) ? response.data : [],
      },
      revalidate: 60,
    };
  } catch (error) {
    console.error('Error fetching featured posts:', error.message);

    return {
      props: {
        featured: [],
      },
      revalidate: 60,
    };
  }
}

export default Index;
