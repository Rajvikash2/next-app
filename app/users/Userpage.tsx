import Link from 'next/link';
import React from 'react'
import { sort } from 'fast-sort';
interface User{
    id:number;
    name:string;
    email:string;
  }
interface Props{
  sortOrder:string;
}
const Userpage = async ({sortOrder}:Props) => {
    const res = await fetch('https://jsonplaceholder.typicode.com/users',
        {cache:'no-store'}
      );
      const data:User[] = await res.json();
      const sortedData=sort(data).asc(sortOrder ==="email"? (user)=>user.email:(user)=>user.name);
  return (
    <div>
         <table className='table table-bordered'>
        <thead>
          <tr>
            <th>
               <Link href="/users?sortOrder=name">Name</Link>
            </th>
           <th> <Link href="/users?sortOrder=email">Email</Link></th>
          </tr>
        </thead>
        <tbody>
        {sortedData.map(user=>(
          <tr key={user.id}>
            <td>{user.name}</td>
            <td>{user.email}</td>
          </tr>
        ))}
        </tbody>

       
      </table>
    </div>
  )
}

export default Userpage