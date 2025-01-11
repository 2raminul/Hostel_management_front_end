import React from 'react';
import Link from 'next/link';

const TwoStep = () => {
  return (
    <div className="px-xl-5 px-4 auth-body">
      <form>
        <ul className="row g-3 list-unstyled li_animate">
          <li className="col-3">
            <input 
              type="text" 
              className="form-control form-control-lg text-center" 
              placeholder="-" 
              maxLength="1" 
              aria-label="First digit" 
            />
          </li>
          <li className="col-3">
            <input 
              type="text" 
              className="form-control form-control-lg text-center" 
              placeholder="-" 
              maxLength="1" 
              aria-label="Second digit" 
            />
          </li>
          <li className="col-3">
            <input 
              type="text" 
              className="form-control form-control-lg text-center" 
              placeholder="-" 
              maxLength="1" 
              aria-label="Third digit" 
            />
          </li>
          <li className="col-3">
            <input 
              type="text" 
              className="form-control form-control-lg text-center" 
              placeholder="-" 
              maxLength="1" 
              aria-label="Fourth digit" 
            />
          </li>
          <li className="col-12 my-lg-4">
             <Link legacyBehavior className="btn btn-lg w-100 btn-primary text-uppercase mb-2" href="/index" title="Verify my account" aria-label="Verify my account">Verify my account</Link>
          </li>
          <li className="col-12 text-center">
            <span className="text-muted">Haven't received it? 
               <Link legacyBehavior href="#" aria-label="Resend a new code"> Resend a new code.</Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default TwoStep;
