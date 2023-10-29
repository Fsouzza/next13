import { Suspense } from 'react'
import { User } from "./components/user";
import Link from 'next/link';

export const metadata = {
  title: 'Home'
}
 
export default async function Home() {

  return (
    <div>
      <h1>Home</h1>
      <Link href={'/app'}>Dashboard</Link>
      <User />
    </div>
  )
}
