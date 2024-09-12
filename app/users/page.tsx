import React, { Suspense } from 'react'
import Userpage from './Userpage'
import Link from 'next/link'
interface Props{
  searchParams:{sortOrder:string}
}

const UserPage = async ({searchParams:{sortOrder}}:Props) => {
 
  return (
    <div>
      Userpage
      <p>{new Date().toLocaleTimeString()}</p>
      <h1>Users</h1>
    <Link href='/users/newuser' className="btn">New user</Link>
    <Suspense fallback={<p>Loading...</p>}>
      <Userpage sortOrder={sortOrder}/>
    </Suspense>
    </div>
  )
}

export default UserPage