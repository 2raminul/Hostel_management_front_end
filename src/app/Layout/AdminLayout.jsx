"use client";
import React, { useState } from 'react';
import CommonSidebar from '../Common/CommonSidebar/CommonSidebar';
import CommonHeader from '../Common/CommonHeader/CommonHeader';
import CommonBreadcrumb from '../Common/CommonBreadcrumb/CommonBreadcrumb';

const AdminLayout = ({ themeMode, themeColor, borderStroke, boxLayout, monochrome, borderRadius, iconColor, gradientColor, children }) => {
  const [sidebarHidden, setSidebarHidden] = useState(false);

  const toggleSidebar = () => {
    setSidebarHidden((prevState) => !prevState);
  };

  return (
    <div 
      data-ha={themeColor} 
      data-bs-theme={themeMode} 
      className={`${gradientColor} ${sidebarHidden ? 'sidebar-hide' : ''} ${borderStroke} ${boxLayout} ${monochrome} ${borderRadius}`}
    >
      <main className={boxLayout === 'box-layout rightbar-hide' ? 'container' : 'container-fluid'} px-0>
        <CommonSidebar iconColor={iconColor} />
        <div className="content">
          <CommonHeader toggleSidebar={toggleSidebar} />
          <CommonBreadcrumb />
          {children} {/* Render children here */}
        </div>
      </main>
    </div>
  );
};

export default AdminLayout;
