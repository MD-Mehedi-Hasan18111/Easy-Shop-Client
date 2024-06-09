import React from 'react';

const AdminDashboardLayout = ({
  children
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div>
      <h3>This is Admin Dashboard Layout</h3>
      {children}
    </div>
  );
};

export default AdminDashboardLayout;
