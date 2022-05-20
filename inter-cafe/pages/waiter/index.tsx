import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Index({waiters})  {
   const router = useRouter()

     return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
          
         <ul>
           {waiters.map(waiter => (
             <li key={waiter.id_waiter}>
               <Link href={`/waiter/${waiter.id_waiter}`}>
                 <a> {waiter.full_name}</a>
               </Link>

             </li>

           ))}
         </ul>

              </Card>
        </Grid>

            <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
       <Button  onClick={()=> router.push('/waiter/create')}>
       Создать элемент
          </Button> 
         </Card>
        </Grid>

        </MainLayout>

    );
}



Index.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/waiter')
  const waiters= await res.json()
  return { waiters}
}

