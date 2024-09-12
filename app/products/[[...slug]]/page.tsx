import React from 'react'
interface Props{
    params:{
        slug:string[];
    };
    searchParams:{sortOrder:string};
}

const Products = ({params:{slug},searchParams:{sortOrder}}:Props) => {
  return (
    <div>Products of slug <code className=' text-2xl'>{slug} {sortOrder} </code></div>
  )
}

export default  Products 