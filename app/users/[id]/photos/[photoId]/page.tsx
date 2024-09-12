import React from 'react'

interface Props{
    params:
    {
      id:number;
      photoId:number;
    }
}

const Photos = ({params:{id,photoId}}:Props) => {
  return (
    <div>Photos {photoId} user id is {id}</div>
  )
}

export default Photos