import React from 'react';
import Link from 'next/link';

const TuningSidebar = ({ iconColor }) => {
  return (
    <div className="tab-pane fade" id="tab_settings" role="tabpanel">
      <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{ "--dynamic-color": "var(--theme-color1)" }}>Configuration</h6>
      <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
        <li>
           <Link legacyBehavior href="/tuning" passHref aria-label="tuning">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M19.875 6.27a2.225 2.225 0 0 1 1.125 1.948v7.284c0 .809 -.443 1.555 -1.158 1.948l-6.75 4.27a2.269 2.269 0 0 1 -2.184 0l-6.75 -4.27a2.225 2.225 0 0 1 -1.158 -1.948v-7.285c0 -.809 .443 -1.554 1.158 -1.947l6.75 -3.98a2.33 2.33 0 0 1 2.25 0l6.75 3.98h-.033z" />
                <path d="M12 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
              </svg>
              <span className="mx-3">Tuning</span>
            </a>
          </Link>
        </li>
        <li>
           <Link legacyBehavior href="/common-settings" passHref aria-label="payment set">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M3 21l18 0" />
                <path d="M5 21v-14l8 -4v18" />
                <path d="M19 21v-10l-6 -4" />
                <path d="M9 9l0 .01" />
                <path d="M9 12l0 .01" />
                <path d="M9 15l0 .01" />
                <path d="M9 18l0 .01" />
              </svg>
              <span className="mx-3">Common</span>
            </a>
          </Link>
        </li>
        <li>
           <Link legacyBehavior href="/payment-set" passHref aria-label="payment set">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 19h-6a3 3 0 0 1 -3 -3v-8a3 3 0 0 1 3 -3h12a3 3 0 0 1 3 3v4.5" />
                <path d="M3 10h18" />
                <path d="M16 19h6" />
                <path d="M19 16l3 3l-3 3" />
                <path d="M7.005 15h.005" />
                <path d="M11 15h2" />
              </svg>
              <span className="mx-3">Payment Set</span>
            </a>
          </Link>
        </li>
        <li>
           <Link legacyBehavior href="/accounts-setting" passHref aria-label="Accounts Setting">
            <a>
              <svg className="svg-stroke" xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M14 3v4a1 1 0 0 0 1 1h4"></path>
                <path d="M17 21h-10a2 2 0 0 1 -2 -2v-14a2 2 0 0 1 2 -2h7l5 5v11a2 2 0 0 1 -2 2z"></path>
                <path d="M9 7l1 0"></path>
                <path d="M9 13l6 0"></path>
                <path d="M13 17l2 0"></path>
              </svg>
              <span className="mx-3">Accounts</span>
            </a>
          </Link>
        </li>
        <li className="py-2 mt-2">
          <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{ "--dynamic-color": "var(--theme-color1)" }}>Role Management</h6>
          <ul className="list-unstyled">
            <li> <Link legacyBehavior href="/role-add" passHref aria-label="Role Add"><a>Role Add</a></Link></li>
            <li> <Link legacyBehavior href="/role-list" passHref aria-label="Role List"><a>Role List</a></Link></li>
            <li> <Link legacyBehavior href="/role-permission" passHref aria-label="Role Permission"><a>Role Permission</a></Link></li>
            <li> <Link legacyBehavior href="/role-create-list" passHref aria-label="Role Create List"><a>Role Create</a></Link></li>
            <li> <Link legacyBehavior href="/role-assign" passHref aria-label="Role Assign"><a>Role Assign</a></Link></li>
            <li> <Link legacyBehavior href="/role-access-list" passHref aria-label="Role Access"><a>Role Access</a></Link></li>
          </ul>
        </li>
        <li className="py-2 mt-2">
          <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{ "--dynamic-color": "var(--theme-color1)" }}>Front Pages</h6>
          <ul className="list-unstyled">
            <li> <Link legacyBehavior href="/about-us" passHref aria-label="About Us"><a>About Us</a></Link></li>
            <li> <Link legacyBehavior href="/contact-us" passHref aria-label="Contact Us"><a>Contact Us</a></Link></li>
            <li> <Link legacyBehavior href="/privacy-policy" passHref aria-label="Privacy Policy"><a>Privacy Policy</a></Link></li>
            <li> <Link legacyBehavior href="/terms-conditions" passHref aria-label="Terms Conditions"><a>Terms Conditions</a></Link></li>
          </ul>
        </li>
        <li className="py-2 mt-2">
          <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{ "--dynamic-color": "var(--theme-color1)" }}>Application</h6>
          <ul className="list-unstyled">
            <li> <Link legacyBehavior href="/calendar" passHref aria-label="Calendar"><a>My Calendar</a></Link></li>
            <li> <Link legacyBehavior href="/inbox" passHref aria-label="Inbox"><a>Inbox (98)</a></Link></li>
            <li> <Link legacyBehavior href="/chat" passHref aria-label="Chat"><a>Chat (2)</a></Link></li>
            <li> <Link legacyBehavior href="/blog" passHref aria-label="Blog"><a>Blog Article</a></Link></li>
            <li> <Link legacyBehavior href="/filemanager" passHref aria-label="File Manager"><a>File Manager</a></Link></li>
          </ul>
        </li>
      </ul>
      {/* <!-- start: More Pages --> */}
      <h6 className="fl-title title-font ps-2 small text-uppercase text-muted" style={{ "--dynamic-color": "var(--theme-color4)" }}>Pages</h6>
      <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
        <li>
           <Link legacyBehavior href="/help" passHref aria-label="Help">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 20v1" />
                <path d="M12 3v1" />
                <path d="M18 18l1 1" />
                <path d="M18 5l1 -1" />
                <path d="M4 18l-1 1" />
                <path d="M4 5l-1 -1" />
                <path d="M20 18c0 1.5 -1 3 -4 3s-4 -1.5 -4 -3s1 -3 4 -3s4 1.5 4 3z" />
                <path d="M20 5c0 -1.5 -1 -3 -4 -3s-4 1.5 -4 3s1 3 4 3s4 -1.5 4 -3z" />
              </svg>
              <span className="mx-3">Help</span>
            </a>
          </Link>
        </li>
        <li>
           <Link legacyBehavior href="/settings" passHref aria-label="Settings">
            <a>
              <svg xmlns="http://www.w3.org/2000/svg" className="svg-stroke" width="24" viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M12 8v4l3 3" />
                <path d="M15 21h4a1 1 0 0 0 1 -1v-4" />
                <path d="M3 12h18" />
                <path d="M9 3v4a1 1 0 0 1 -1 1H4" />
                <path d="M21 12h-6" />
              </svg>
              <span className="mx-3">Settings</span>
            </a>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default TuningSidebar;
