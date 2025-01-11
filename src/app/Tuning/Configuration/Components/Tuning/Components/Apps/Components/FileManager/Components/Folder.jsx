import React from 'react'
import { FolderData } from './FileManagerData'

const Folder = () => {
  return (
    <div className="file_folder d-flex flex-wrap text-center">
        {FolderData.map((data, index) => {
        return(
        <a key={index} className="card p-4 m-1" href="#" style={{'--dynamic-color': data.theme_color}}>
            <i className="fa fa-folder fa-2x mb-3"></i>
            <h6 className="mb-0">{data.title}</h6>
            <div className="card-footer py-0">
                <small>{data.file_size}</small>
            </div>
        </a>
        )})}
    </div>
  )
}

export default Folder