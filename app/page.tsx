import Image from 'next/image'
import ProductCaard from './components/ProductCaard'
import Link from 'next/link'

export default function Home() {
  return (
   <main>
    <h1 className=' text-black'>Hello world</h1>
    <Link href='/users'>User</Link>
    <ProductCaard/>
    </main>
  )
}
