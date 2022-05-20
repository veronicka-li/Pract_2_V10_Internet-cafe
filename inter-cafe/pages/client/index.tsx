import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Index({clients})  {
   const router = useRouter()

     return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
          
         <ul>
           {clients.map(client => (
             <li key={client.id_client}>
               <Link href={`/client/${client.id_client}`}>
                 <a> {client.name_client}</a>
               </Link>

             </li>

           ))}
         </ul>

              </Card>
        </Grid>

            <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
       <Button  onClick={()=> router.push('/client/create')}>
       Создать элемент
          </Button> 
         </Card>
        </Grid>

        </MainLayout>

    );
}



Index.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/client')
  const clients = await res.json()
  return { clients }
}

