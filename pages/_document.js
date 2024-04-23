import Document, { Html, Head, Main, NextScript } from "next/document";
import { projectData } from "../helper/variables";

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }
  render() {
    return (
      <Html>
        <Head>
          <meta charSet="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="viewport" content="user-scalable=0" />
          <title>
            {projectData.name}
          </title>
          <meta
            name="description"
            content="Buy Car Accessories online in Pakistan for car decoration & modifications. Get new Automotive Car Parts and Accessories online. Explore a wide range of Car auto parts, best car accessories online, in this Car parts online Shop. Pakistan most reliable auto store."
          />
          <meta name="keywords" />
          <meta name="referrer" content="always" />
          <meta property="og:locale" content="en_US" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="SehgalMotors.PK" />
          <meta
            property="og:description"
            content="Pakistan's Largest Car Accessories Online Store. Car Accessories, Modification, Decoration, Performance Parts for Honda, Toyota, Suzuki, Daihatsu, BMW, Audi"
          />
          <meta property="og:url" content="http://www.sehgalmotors.pk/" />
          <meta property="og:site_name" content="SehgalMotors.PK" />
          <meta
            property="og:image"
            content="http://sehgalmotors.pk/wp-content/uploads/2016/05/FBCOVERNEW2016.png"
          />
          <meta
            name="viewport"
            content="width=device-width,initial-scale=1"></meta>
          <meta name="twitter:card" content="summary" />
          <meta
            name="twitter:description"
            content="Pakistan's Largest Car Accessories Online Store. Car Accessories, Modification, Decoration, Performance Parts for Honda, Toyota, Suzuki, Daihatsu, BMW, Audi"
          />
          <meta name="twitter:title" content="SehgalMotors.PK" />
          <meta
            name="twitter:image"
            content="http://sehgalmotors.pk/wp-content/uploads/2016/05/FBCOVERNEW2016.png"
          />
          <link
            href="/css/bootstrap.min1.css"
            type="text/css"
            rel="stylesheet"
          />
          <link
            href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
            rel="stylesheet"
          />
          <link
            rel="stylesheet"
            href="/css/owl.carousel.min.css"
            type="text/css"
          />
          <link href="/css/bootstrap-datepicker.min.css" rel="stylesheet" />
          <link
            data-n-head="ssr"
            rel="icon"
            type="image/x-icon"
            href="/favicon.ico"
          />
          <link
            data-n-head="ssr"
            rel="shortcut icon"
            type="image/x-icon"
            href="/favicon.ico"
          />
          <link
            data-n-head="ssr"
            data-hid="shortcut-icon"
            rel="shortcut icon"
            href="https://www.clicky.pk/_nuxt/icons/icon_64x64.db864a.png"
          />
          <link
            data-n-head="ssr"
            data-hid="apple-touch-icon"
            rel="apple-touch-icon"
            href="https://www.clicky.pk/_nuxt/icons/icon_512x512.db864a.png"
            sizes="512x512"
          />
          <link
            data-n-head="ssr"
            rel="manifest"
            href="https://www.clicky.pk/_nuxt/manifest.892fb1c5.json"
            data-hid="manifest"
          />
          <link data-n-head="ssr" rel="canonical" href="/" />
          <link
            rel="stylesheet"
            href="https://cdn.jsdelivr.net/npm/swiper/swiper-bundle.min.css"
          />
          <link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css"
  integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi"
  crossorigin="anonymous"
/>
          <link rel="stylesheet" href="/css/stylesheet.css"></link>
          <link
            rel="stylesheet"
            href="<NODE_MODULES_FOLDER>/react-responsive-carousel/lib/styles/carousel.min.css"
          />
          <script
            src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"
            crossorigin></script>

          <script
            src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
            crossorigin></script>

          <script
            src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
            crossorigin></script>
        </Head>
        <body>
          <Main />

          <NextScript />
          <script
            type="text/javascript"
            src="//connect.facebook.net/en_US/all.js#xfbml=1&version=v12.0&appId=493919851001700"
            id="facebook-jssdk"
          />
          <script src="https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js"
  crossorigin></script>

<script
  src="https://cdn.jsdelivr.net/npm/react-bootstrap@next/dist/react-bootstrap.min.js"
  crossorigin></script>
          <script type="text/javascript" src="/js/jquery-3.4.1.min.js" />
          <script type="text/javascript" src="/js/bootstrap.min.js" />
          <script type="text/javascript" src="/js/fontawesome.min.js" />
          <script src="/js/jQuery.session.js" />
          <script type="text/javascript" src="/js/modernizr-2.6.2.min.js" />
          <script type="text/javascript" src="/js/owl.carousel.min.js" />
          <script type="text/javascript" src="/js/notify.min.js" />

          {/* <script type="text/javascript" src="/js/main.js"/> */}
        </body>
      </Html>
    );
  }
}
export default MyDocument;
