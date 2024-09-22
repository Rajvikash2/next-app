'use client';
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const {status, data:session}=useSession()
  
  return (

    <div className='flex bg-slate-200 p-5 space-x-3'>
        <Link href='/' className='mr-5'>Next.js</Link>
        <Link href='/users'>Users</Link>
        {status ==='loading' && <div className='loading loading-spinner loading-md'></div>}
        { status === 'authenticated' && 
        <div> <span className='font-semibold text-green-700'> Signed In as :</span>  { session.user!.name }
        <Link href='/api/auth/signout' className='ml-3 text-white p-2 rounded-full bg-red-500'>Sign Out</Link>
        </div> }
       {status==='unauthenticated' && <Link href='/api/auth/signin'>Login</Link>}
    </div>
  )
}

export default Navbar