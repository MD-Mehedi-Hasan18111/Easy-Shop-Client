import React from 'react';

const CustomerDashboardLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h3>This is Customer Dashboard Layout</h3>
      {children}
    </div>
  );
};

export default CustomerDashboardLayout;
