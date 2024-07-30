import Link from 'next/link'
import React from 'react'

const Page = ({params}: {params: {storeId: string}}) => {
   const storeId = params.storeId
  return (
    <>
    <div>Welcome store:  {storeId}</div>
    <Link href={"/manage"}>GO TO Manage link</Link></>
  )
}

export default Page