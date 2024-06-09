'use client';

import { Inter } from 'next/font/google';
import React, { Suspense } from 'react';
import InternetStatus from '@components/InternetStatus';
import { Provider as ReduxProvider } from 'react-redux';
import { ErrorBoundary } from 'react-error-boundary';
import { IErrorBoundary } from '@type';
import { Toaster } from 'react-hot-toast';
import { PersistGate } from 'redux-persist/integration/react';
import { persistor, store } from './lib/store';
import Loading from './loading';
import ErrorFallback from './global-error';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// Error boundary callback function to handle errors
const onError: IErrorBoundary = (error, { componentStack }) => {
  // Log the error and component stack for debugging

  // eslint-disable-next-line no-console
  console.log(error, componentStack);
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const handleReset = () => {
    // if (pathname !== '/ai-assistance/') {
    //   router.back();
    // } else {
    //   router.refresh();
    // }
    window.location.reload();
  };

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.png" />
        <meta httpEquiv="Cache-control" content="no-cache" />
        <meta httpEquiv="Expires" content="-1" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </head>
      <body className={inter.className}>
        <ReduxProvider store={store}>
          <PersistGate loading={<Loading />} persistor={persistor}>
            <ErrorBoundary
              FallbackComponent={ErrorFallback}
              onReset={handleReset}
              onError={onError}>
              <Suspense fallback={<Loading />}>{children}</Suspense>
            </ErrorBoundary>
          </PersistGate>
        </ReduxProvider>
        <Toaster />
        <InternetStatus />
      </body>
    </html>
  );
}
