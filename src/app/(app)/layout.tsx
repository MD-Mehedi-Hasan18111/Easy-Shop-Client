import React from 'react';

const AppLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h3>This is App Layout</h3>
      {children}
    </div>
  );
};

export default AppLayout;
