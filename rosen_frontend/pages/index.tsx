import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';

export default function Home() {

  const router=useRouter();
  

  return (
    <div>
      <Button>Start</Button>
    </div>
  )
}
