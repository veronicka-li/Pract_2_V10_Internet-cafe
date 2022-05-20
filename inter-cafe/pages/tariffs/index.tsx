import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Index({tariffss})  {
   const router = useRouter()

     return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
          
         <ul>
           {tariffss.map(tariffs => (
             <li key={tariffs.id_tar}>
               <Link href={`/tariffs/${tariffs.id_tar}`}>
                 <a> {tariffs.name_tar} </a>
               </Link>

             </li>

           ))}
         </ul>

              </Card>
        </Grid>

            <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
       <Button  onClick={()=> router.push('/tariffs/create')}>
       Создать элемент
          </Button> 
         </Card>
        </Grid>

        </MainLayout>

    );
}



Index.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/tariffs')
  const tariffss= await res.json()
  return { tariffss}
}

