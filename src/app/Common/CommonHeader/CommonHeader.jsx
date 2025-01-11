// import React, { useEffect, useState } from 'react'
// import  Link  from 'next/link'
// import { useDispatch } from 'react-redux'
// import { setSelectedMod } from '../../Redux/actions/settingsActions'

// import CommonSetting from '../CommonSetting/CommonSetting'
// import UserDropdown from './Components/UserDropdown'

// import avatar1 from '../../assets/images/xs/avatar1.jpg'
// import avatar2 from '../../assets/images/xs/avatar2.jpg'
// import avatar3 from '../../assets/images/xs/avatar3.jpg'
// import avatar4 from '../../assets/images/xs/avatar4.jpg'

// import profile_av from '../../assets/images/profile_av.png'

// const CommonHeader = ( {toggleSidebar} ) => {

//     const dispatch = useDispatch();
//     const [selectedMode, setSelectedMode] = useState('light');
 
//     const setThemeMode = (mode) => {
//         setSelectedMode(mode);
//     };
    
//     let iconId;
//     switch (selectedMode) {
//         case 'light':
//         iconId = 'sun-fill';
//         break;
//         case 'dark':
//         iconId = 'moon-stars-fill';
//         break;
//         case 'auto':
//         iconId = 'circle-half';
//         break;
//         default:
//         iconId = 'sun-fill';
//     };

//     useEffect(() => {
//         dispatch(setSelectedMod(selectedMode));
//     }, [selectedMode]);

//   return (
//     <>
//       <header className="px-xl-5 px-lg-4 px-3 sticky-top" id='headerDark' data-bs-theme="none">
//           <div className="d-flex justify-content-between align-items-center py-2 w-100">
//               <div className="d-flex align-items-center pe-4">
//                 <button className="btn d-inline-flex d-xl-none border-0 p-0 pe-2" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvas_Navbar">
//                     <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" /><path d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z" fill="var(--accent-color)" /><path d="M15 12h-8" /><path d="M10 9l-3 3l3 3" /></svg>
//                 </button>
//                 <button className="btn d-xl-inline-flex d-none border-0 p-0 pe-2 sidebar-toggle-btn" type="button" onClick={toggleSidebar}>
//                     <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" height="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none" /><path d="M6 21a3 3 0 0 1 -3 -3v-12a3 3 0 0 1 3 -3" /><path d="M21 6v12a3 3 0 0 1 -6 0v-12a3 3 0 0 1 6 0z" fill="var(--accent-color)" /><path d="M15 12h-8" /><path d="M10 9l-3 3l3 3" /></svg>
//                 </button>
//                 {/* <!--[ Start:: Brand Logo icon ]--> */}
//                  <Link legacyBehavior href="/" className="brand-icon text-decoration-none d-flex align-items-center" title="HotelAir Admin Template">
//                     <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
//                         <path stroke="none" d="M0 0h24v24H0z" fill="none" />
//                         <path d="M3 3m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v14a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z" />
//                         <path d="M9 8l0 8" />
//                         <path d="M9 12l6 0" />
//                         <path d="M15 8l0 8" />
//                     </svg>
//                     <span className="fw-bold ps-2 fs-5 d-none d-xl-inline-flex text-gradient">HotelAir</span>
//                 </Link>
//             </div>
           
//         </div>
//       </header>
//       <CommonSetting selectedMode={selectedMode} />
//     </>
//   )
// }

// export default CommonHeader
// src/app/Common/CommonHeader/CommonHeader.jsx
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { setSelectedMod } from '../../Redux/actions/settingsActions';
import CommonSetting from '../CommonSetting/CommonSetting';

const CommonHeader = ({ toggleSidebar }) => {
    const dispatch = useDispatch();
    const [selectedMode, setSelectedMode] = useState('light');

    const setThemeMode = (mode) => {
        setSelectedMode(mode);
    };

    useEffect(() => {
        dispatch(setSelectedMod(selectedMode));
    }, [selectedMode]);

    return (
        <>
            <header>
                {/* Header Content */}
                <Link href="/">Brand</Link>
            </header>
            <CommonSetting selectedMode={selectedMode} />
        </>
    );
};

export default CommonHeader;
