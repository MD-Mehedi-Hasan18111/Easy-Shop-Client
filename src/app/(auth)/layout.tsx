import React from 'react';

const AuthLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h2>This is Auth layout</h2>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
