import Head from 'next/head'
import { useState } from 'react';
import { AiFillLinkedin,AiFillGithub } from 'react-icons/ai'

import styles from './about.module.scss';


export default function About() {
  const [cnpj, setCnpj] = useState('');


  function str(valor: string){
    

    
  }

  function handleChanche(e: any){
    setCnpj(e.target.value);


 

    

  }
  



   return (
    <>
      <Head>
        <title>About | Ig.News</title>
      </Head>


      
      <main className={styles.contentContainer}>

        <h1>Fabiano Bispo <a href='https://www.linkedin.com/in/fabiano-bispo-canedo-422738109'><AiFillLinkedin /></a> <a href='https://github.com/fabianoobispo'><AiFillGithub/></a></h1>
        <p>Este site e para fins educativos, valores aqui cobrados são ficticios.</p>

        <br />
        <input
         maxLength={14}
     
        
         onChange={e => handleChanche(e)}
    
        ></input>

        <p>resultado</p>
        <input disabled={true} value={cnpj} />



        
 
      </main> 

    </>  
  )
}

