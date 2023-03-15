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
  const styles={
    mainbox:{
      width: "90%",
      padding: "5%",
      margin: "2rem auto 1rem auto",
    }
  }

  return (
    <div>
      <PageHeader/>
      <div style={styles.mainbox}>
        <h1>
          Get Started
        </h1>
        <p>
          This image-analysis tool is designed for the inspection of water pipelines. 
        </p>
        <p>
          Using a pre-trained learning algorithm, you can detect frames in video footage that are similar to a specific reference image.
        </p>
        <p>
          Click the button below to start inspections!
        </p>
        <Button onClick={start} >Start</Button>
      </div>
      
      
    </div>
  )
}
