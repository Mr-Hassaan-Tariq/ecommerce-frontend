import { Provider } from 'react-redux';
import { ActiveNavContextProvider } from '../context/ActiveNavContext';
import GlobalLayout from '../components/globalLayout';
import store from '../redux/app/store';
import { OpenModalContextProvider } from '../context/OpenModalContext';

function MyApp({ Component, pageProps, router }) {
  const isCheckoutPage = router.pathname.includes('/checkout');

  // Render the GlobalLayout only if it's not the checkout page
  if (isCheckoutPage) {
    return (
      <>
        <Provider store={store}>
          <ActiveNavContextProvider>
            <OpenModalContextProvider>
              <Component {...pageProps} />
            </OpenModalContextProvider>
          </ActiveNavContextProvider >
        </Provider>

      </>
    )
  }


  return (
    <>
      <Provider store={store}>
        <GlobalLayout>
          <ActiveNavContextProvider>
            <OpenModalContextProvider>
              <Component {...pageProps} />
            </OpenModalContextProvider>
          </ActiveNavContextProvider>
        </GlobalLayout>
      </Provider>
    </>
  );
}

export default MyApp;
