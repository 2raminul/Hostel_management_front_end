import React from 'react';
import Link from 'next/link'; // Import Link from next/link
import { usePathname } from 'next/navigation'; // Import usePathname from next/navigation

import { singleTitleMapping } from './Components/TitleMappings';
import PageHeaderAction from './Components/PageHeaderAction';

const CommonBreadcrumb = () => {
    const pathname = usePathname(); // Use usePathname to get the current route
    const pathSegments = pathname.split('/').filter((segment) => segment);
    const singleTitle = singleTitleMapping[pathname];

    return (
        <div className="px-xl-5 px-lg-4 px-3 py-2 page-header">
            <ol className="breadcrumb mb-0 bg-transparent">
                <li className="breadcrumb-item">
                     <Link legacyBehavior href={pathname === '/index-hr' ? '/index-hr' : '/'}>Home</Link>
                </li>
                {pathname === '/' && (
                    <li className="breadcrumb-item active">
                        <span>Dashboard</span>
                    </li>
                )}
                {pathSegments.map((segment, index) => (
                    <li key={index} className="breadcrumb-item active">
                        <span>{index === pathSegments.length - 1 ? singleTitle : ''}</span>
                    </li>
                ))}
            </ol>
            <ul className="list-unstyled action d-flex align-items-center mb-0">
                <PageHeaderAction />
            </ul>
        </div>
    );
}

export default CommonBreadcrumb;
