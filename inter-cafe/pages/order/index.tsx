import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function Index({orders})  {
   const router = useRouter()

     return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
          
         <ul>
           {orders.map(order => (
             <li key={order.id_order}>
               <Link href={`/order/${order.id_order}`}>
                 <a> {order.waiter_id}, {order.client_id} </a>
               </Link>

             </li>

           ))}
         </ul>

              </Card>
        </Grid>

            <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
       <Button  onClick={()=> router.push('/order/create')}>
       Создать элемент
          </Button> 
         </Card>
        </Grid>

        </MainLayout>

    );
}



Index.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/order')
  const orders= await res.json()
  return { orders}
}

