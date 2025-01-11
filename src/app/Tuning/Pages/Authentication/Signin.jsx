import React from 'react';
import Link from 'next/link';

const Signin = () => {
  return (
    <div className="px-xl-5 px-4 auth-body">
      <form>
        <ul className="row g-3 list-unstyled li_animate">
          <li className="col-12">
            <label className="form-label">Email</label>
            <input 
              type="email" 
              className="form-control form-control-lg" 
              placeholder="" 
              defaultValue="admin@hotelair.com" 
              required 
            />
          </li>
          <li className="col-12">
            <div className="form-label">
              <span className="d-flex justify-content-between align-items-center">
                Password
                 <Link legacyBehavior className="text-primary" href="/password-reset">Forgot Password?</Link>
              </span>
            </div>
            <input 
              type="password" 
              className="form-control form-control-lg" 
              placeholder="" 
              defaultValue="admin.hotelair" 
              required 
            />
          </li>
          <li className="col-12">
            <div className="form-check fs-5">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="Rememberme" 
              />
              <label className="form-check-label fs-6" htmlFor="Rememberme">Remember this Device</label>
            </div>
          </li>
          <li className="col-12 my-lg-4">
             <Link legacyBehavior className="btn btn-lg w-100 btn-primary text-uppercase mb-2" href="/index" title="sign in">SIGN IN</Link>
            <a className="btn btn-lg btn-secondary w-100" href="#">
              <i className="fa fa-google me-2"></i>
              <span> Sign in with Google</span>
            </a>
          </li>
          <li className="col-12 text-center">
            <span className="text-muted d-flex d-sm-inline-flex">
              New to HotelAir 
               <Link legacyBehavior className="ms-2" href="/signup" title="">Sign up here</Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Signin;
