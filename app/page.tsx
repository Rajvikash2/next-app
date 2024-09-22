import Image from 'next/image'
import ProductCaard from './components/ProductCaard'
import Link from 'next/link'
import { getServerSession } from 'next-auth'
import { AuthOptions } from './api/auth/[...nextauth]/route'
export default async function Home() {
  const session= await getServerSession(AuthOptions)             // we need to pass our providers to this function
  return (
   <main>
    <h1 className=' text-black'>Hello {session && <span>{session.user!.name}</span>}</h1>
    <Link href='/users'>User</Link>
    <ProductCaard/>
    </main>
  )
}
