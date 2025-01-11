import React from 'react';
import Link from 'next/link';

const Signup = () => {
  return (
    <div className="px-xl-5 px-4 auth-body">
      <form>
        <ul className="row g-3 list-unstyled li_animate">
          <li className="col-6">
            <label className="form-label">Full name</label>
            <input 
              type="text" 
              className="form-control form-control-lg" 
              placeholder="Jony" 
              required 
            />
          </li>
          <li className="col-6">
            <label className="form-label">&nbsp;</label>
            <input 
              type="text" 
              className="form-control form-control-lg" 
              placeholder="Parker" 
              required 
            />
          </li>
          <li className="col-12">
            <label className="form-label">Email address</label>
            <input 
              type="email" 
              className="form-control form-control-lg" 
              placeholder="name@example.com" 
              required 
            />
          </li>
          <li className="col-6">
            <label className="form-label">Password</label>
            <input 
              type="password" 
              className="form-control form-control-lg" 
              placeholder="8+ characters required" 
              required 
            />
          </li>
          <li className="col-6">
            <label className="form-label">Confirm password</label>
            <input 
              type="password" 
              className="form-control form-control-lg" 
              placeholder="8+ characters required" 
              required 
            />
          </li>
          <li className="col-12">
            <div className="form-check">
              <input 
                className="form-check-input" 
                type="checkbox" 
                id="TermsConditions" 
                required 
              />
              <label className="form-check-label" htmlFor="TermsConditions">
                I accept the  <Link legacyBehavior href="#" title="" className="text-primary">Terms and Conditions</Link>
              </label>
            </div>
          </li>
          <li className="col-12 my-4">
             <Link legacyBehavior className="btn btn-lg w-100 btn-primary text-uppercase mb-2" href="/index" title="">SIGN UP</Link>
            <a className="btn btn-lg btn-secondary w-100" href="#">
              <i className="fa fa-google me-2"></i>
              <span> Sign up with Google</span>
            </a>
          </li>
          <li className="col-12 text-center">
            <span className="text-muted d-flex d-sm-inline-flex mt-3 mt-sm-0">
              Already have an account? 
               <Link legacyBehavior className="ms-2" href="/signin">Sign in here</Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Signup;
