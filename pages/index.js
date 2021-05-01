import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Button from '@material-ui/core/Button'
import { getLeagues } from '../api'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'

export default function Home() {

  const router = useRouter();

  const [leagues, setLeagues] = useState([]);
  //filter
  const [filterA, setFilterA] = useState(0);
  

  useEffect(async () => {
    router.push({
      query: {
        filterA,
      }
    });

    let data = await getLeagues(filterA);
    console.log(data.matches)
    setLeagues(data.matches)
  }, [filterA])

  function filterData() {
    setFilterA(filterA + 1);
  }


  return (
    
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        {filterA}
        <Button onClick={filterData}>Кнопка</Button>
        { leagues.map((league) => (
          <div key={league.id} className={styles.title}>{league.homeTeam.name}</div>
        )) }
      </main>
    </div>
  )
}
