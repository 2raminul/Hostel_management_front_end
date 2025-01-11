import React from 'react';
import Link from 'next/link';

const PasswordReset = () => {
  return (
    <div className="px-xl-5 px-4 auth-body">
      <form>
        <ul className="row g-3 list-unstyled li_animate">
          <li className="col-12">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control form-control-lg" 
              placeholder="name@example.com" 
              required 
            />
            <small className="text-muted">
              An email will be sent to the above address with a link to set your new password.
            </small>
          </li>
          <li className="col-12 my-lg-4">
             <Link legacyBehavior 
              className="btn btn-lg w-100 btn-primary text-uppercase mb-2" 
              href="/two-step" 
              title=""
            >
              SUBMIT
            </Link>
          </li>
          <li className="col-12 text-center">
            <span className="text-muted">
               <Link legacyBehavior href="/signin">Back to Sign in</Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default PasswordReset;
