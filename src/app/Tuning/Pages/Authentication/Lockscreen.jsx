import React from 'react';
import Link from 'next/link';
import profile_av from '../../../assets/images/profile_av.png';

const Lockscreen = () => {
  return (
    <div className="px-xl-5 px-4 auth-body">
      <form>
        <ul className="row g-3 list-unstyled li_animate">
          <li className="col-12 mb-3">
            <div className="d-flex align-items-end">
              <img
                className="rounded-4 img-thumbnail shadow avatar xl"
                src={profile_av}
                data-bs-toggle="tooltip"
                title="avatar"
                alt="Avatar"
              />
              <div className="ms-3">
                <a className="fs-4" href="#" title="">
                  Michelle Hughes
                </a>
                <p className="mb-0">brian.hughes@example.com</p>
              </div>
            </div>
          </li>
          <li className="col-12">
            <div className="mb-2">
              <div className="form-label">Enter Password</div>
              <input
                type="password"
                className="form-control form-control-lg"
                placeholder="***************"
              />
            </div>
          </li>
          <li className="col-12 my-lg-4">
             <Link legacyBehavior href="/index" className="btn btn-lg w-100 btn-primary text-uppercase mb-2" title="">
              SIGN IN
            </Link>
          </li>
          <li className="col-12 text-center">
            <span className="text-muted">
              Don't have an account yet?  <Link legacyBehavior href="/signup">Sign up here</Link>
            </span>
          </li>
        </ul>
      </form>
    </div>
  );
};

export default Lockscreen;
