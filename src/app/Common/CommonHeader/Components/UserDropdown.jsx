import React from 'react'
import Link from 'next/link'


const UserDropdown = () => {
  return (
        <div className="dropdown-menu dropdown-menu-end shadow p-2 p-xl-3 rounded-4">
            <div className="bg-body p-3 rounded-3">
                <h4 className="mb-1 title-font text-gradient">Michelle Glover</h4>
                <p className="small text-muted">michelle.glover@gmail.com</p>
                <input type="text" className="form-control form-control-sm" placeholder="Update my status" />
            </div>
            <ul className="list-unstyled mt-3">
                <li><Link as='a' className="dropdown-item rounded-pill" aria-label="my profile" to="/my-profile">My Profile</Link></li>
                <li><Link as='a' className="dropdown-item rounded-pill" aria-label="common settings" to="/common-settings">Common Settings</Link></li>
                <li><Link as='a' className="dropdown-item rounded-pill" aria-label="account settings" to="/accounts-setting">Settings</Link></li>
            </ul>
            <Link as='a' className="btn py-2 btn-primary w-100 mt-3 rounded-pill" to="/signin" role="button">Logout</Link>
            <div className="mt-3 text-center small">
                <a className="text-muted me-1" href="#">Privacy policy</a>•<a className="text-muted mx-1" href="#">Terms</a>•<a className="text-muted ms-1" href="#">Cookies</a>
            </div>
        </div>
    )
}

export default UserDropdown