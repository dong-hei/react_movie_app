import React from 'react'
import { useLocation, useParams } from 'react-router-dom'
import { IMG_BASE_URL } from '../components/Movie';
export default function MovieDetail() {
  const { title } = useParams();
  const { overview } = useParams();
  const { state } = useLocation();

    return (
    <div className='page-container' style={{ display:'flex' }}>
        <div>
            <img 
            style={{ width: "300px", height: "458px" }}
            src={IMG_BASE_URL + state.poster_path}
            alt='영화 포스터 이미지'/>
        </div>
        <div>
            <div style={{ fontSize: "32px" , color: "white" }}>{title}</div>
            <div style={{ fontSize: "16px" }}>{overview}</div>
        </div>
    </div>
  )
}
