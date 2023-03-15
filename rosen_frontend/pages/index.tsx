import { Button } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import { useRouter } from 'next/router';
import PageHeader from '../components/ProgressiveStepper/PageHeader/PageHeader';

export default function Home() {

  const router=useRouter();
  const start = () => {
    router.push("/train-algorithm/1");
  };

  return (
    <div>
      <PageHeader/>
      <Button onClick={start} >Start Training</Button>
    </div>
  )
}
