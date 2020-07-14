import axios from 'axios';
import Layout from '../components/Layout';
import Featured from '../components/Featured';
import Trending from '../components/Trending';

const Index = (props) => (
  <Layout>
    <div>
		<h1>Featured News</h1>
		<Featured featured={props.featured}/>
		<h1>Trending News</h1>
		<Trending/>
    </div>
  </Layout>
);

Index.getInitialProps = async function() {

	const response = await axios.get('https://jsonplaceholder.typicode.com/posts',
	)
	return {
		featured: response.data
	}
}

export default Index;