// import App from 'next/app'
import {Provider} from 'react-redux' // for later redux implementation
import withRedux from 'next-redux-wrapper' // for creating store per request
import store from '../../redux/store'
import Layout from '../components/layout'
import 'bootstrap/dist/css/bootstrap.min.css'
import '../styles/global.css'

// /* eslint-disable */

function Dizz({ Component, pageProps }) {
    // Component is the active page
    // pageProps are initial props for page (empty if not using getInitialProps)
    

    return (
    <Provider store={store}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider> )
  }
  
  // Only uncomment this method if you have blocking data requirements for
  // every single page in your application. This disables the ability to
  // perform automatic static optimization, causing every page in your app to
  // be server-side rendered.
  //
  // MyApp.getInitialProps = async (appContext) => {
  //   // calls page's `getInitialProps` and fills `appProps.pageProps`
  //   const appProps = await App.getInitialProps(appContext);
  //
  //   return { ...appProps }
  // }
  



  const makeStore = () => store
  export default withRedux(makeStore)(Dizz)
  
  // export default Dizz