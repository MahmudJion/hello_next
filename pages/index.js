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

// Using async/await with try-catch for better error handling
Index.getInitialProps = async function () {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=10');

    // Returning the data as an object to be consistent
    return {
      featured: response.data,
    };
  } catch (error) {
    console.error('Error fetching data:', error.message);

    // Returning an empty object in case of an error to prevent potential issues
    return {};
  }
};

export default Index;
