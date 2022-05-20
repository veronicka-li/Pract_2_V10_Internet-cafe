import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Index({services})  {
   const router = useRouter()

     return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
          
         <ul>
           {services.map(service => (
             <li key={service.id_service}>
               <Link href={`/service/${service.id_service}`}>
                 <a> {service.id_service} </a>
               </Link>

             </li>

           ))}
         </ul>

              </Card>
        </Grid>

            <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
       <Button  onClick={()=> router.push('/service/create')}>
       Создать элемент
          </Button> 
         </Card>
        </Grid>

        </MainLayout>

    );
}



Index.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/service')
  const services= await res.json()
  return { services}
}

