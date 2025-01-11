import React from 'react';
import Link from 'next/link';

const HRTabSidebar = ({ iconColor }) => {
  return (
    <div className="tab-pane fade" id="tab_hrms" role="tabpanel">
      <h6
        className="fl-title title-font ps-2 small text-uppercase text-muted"
        style={{ '--dynamic-color': 'var(--theme-color1)' }}
      >
        Usual
      </h6>
      <ul className={`list-unstyled mb-4 menu-list ${iconColor}`}>
        <li>
           <Link legacyBehavior href="/index-hr" aria-label="HRMS Dashboard">
            <a className="d-flex align-items-center">
              <svg
                className="svg-stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                <path d="M5 12l-2 0l9 -9l9 9l-2 0"></path>
                <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7"></path>
                <path d="M10 12h4v4h-4z"></path>
              </svg>
              <span className="mx-3">HR Dashboard</span>
            </a>
          </Link>
        </li>
        <li>
           <Link legacyBehavior href="/hrms" aria-label="hrms">
            <a className="d-flex align-items-center">
              <svg
                className="svg-stroke"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                viewBox="0 0 24 24"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                <path d="M7 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M5 22v-5l-1 -1v-4a1 1 0 0 1 1 -1h4a1 1 0 0 1 1 1v4l-1 1v5" />
                <path d="M17 5m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
                <path d="M15 22v-4h-2l2 -6a1 1 0 0 1 1 -1h2a1 1 0 0 1 1 1l2 6h-2v4" />
              </svg>
              <span className="mx-3">HRMS</span>
            </a>
          </Link>
        </li>
        <li>
          <a
            href="#DutyMenu"
            data-bs-toggle="collapse"
            aria-expanded="false"
            className="dropdown-toggle d-flex align-items-center"
            aria-label="Users"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="svg-stroke"
              width="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M3 12a9 9 0 0 0 5.998 8.485m12.002 -8.485a9 9 0 1 0 -18 0" />
              <path d="M12 7v5" />
              <path d="M12 15h2a1 1 0 0 1 1 1v1a1 1 0 0 1 -1 1h-1a1 1 0 0 0 -1 1v1a1 1 0 0 0 1 1h2" />
              <path d="M18 15v2a1 1 0 0 0 1 1h1" />
              <path d="M21 15v6" />
            </svg>
            <span className="mx-3">Duty Changes</span>
          </a>
          <ul className="collapse list-unstyled" id="DutyMenu">
            <li>
               <Link legacyBehavior href="/duty-assigned-list" aria-label="Assigned List">
                <a>Assigned List</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/duty-shift-list" aria-label="Shift List">
                <a>Shift List</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/duty-roster-list" aria-label="Roster List">
                <a>Roster List</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="py-2 mt-2">
          <h6
            className="fl-title title-font ps-2 small text-uppercase text-muted"
            style={{ '--dynamic-color': 'var(--theme-color1)' }}
          >
            Employees [ <strong>58</strong> ]
          </h6>
          <ul className="list-unstyled">
            <li>
               <Link legacyBehavior href="/employees-all" aria-label="All Employees">
                <a>All Employees</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/employees-leave" aria-label="Leave Tracking">
                <a>Leave Tracking</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/employees-attendance" aria-label="Employees Attendance">
                <a>Attendance</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/employees-departments" aria-label="Departments">
                <a>Departments</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/employees-loan" aria-label="Employees Loan">
                <a>Employees Loan</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/employees-appraisal" aria-label="Appraisal">
                <a>Appraisal</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/employees-add" className="fw-bold" aria-label="Add Employees">
                <a>Add Employees</a>
              </Link>
            </li>
          </ul>
        </li>
        <li className="py-2 mt-2">
          <h6
            className="fl-title title-font ps-2 small text-uppercase text-muted"
            style={{ '--dynamic-color': 'var(--theme-color1)' }}
          >
            Payroll
          </h6>
          <ul className="list-unstyled">
            <li>
               <Link legacyBehavior href="/payroll-employee-salary" aria-label="Employee Salary">
                <a>Employee Salary</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/payroll-payslip" aria-label="Payslip">
                <a>Payslip</a>
              </Link>
            </li>
            <li>
               <Link legacyBehavior href="/payroll-report" aria-label="Report">
                <a>Report</a>
              </Link>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default HRTabSidebar;
