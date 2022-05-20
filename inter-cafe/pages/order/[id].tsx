import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Card, Grid, Button, Box,TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import {useInput} from "../../hooks/useInput";



export default function orderPage({order})  {
 const router = useRouter()

 const sum = useInput('')
 const session_time = useInput('')
 const waiter_id = useInput('')
 const client_id = useInput('')
 const PC_id = useInput('')


 
    const update = () => {
       axios.put(`http://localhost:5000/order/${order.id_order}`, {
         sum: sum.value,   
         session_time: session_time.value,
         waiter_id : waiter_id .value,
         client_id: client_id.value,
         PC_id: PC_id.value
        })
 
     router.push('/order')
       
    }

   const remove = () => {
     
      axios.delete(`http://localhost:5000/order/${order.id_order}`)

         router.push('/order')
       
   }

      return (
        <MainLayout>
        <Grid container justifyContent='center'>
         <Card style = {{width: 1200}}>
         <h4> Сумма заказа: {order.sum} </h4> 
           <h4> Время заказа: {order.session_time} </h4> 
                  <h4> ID официанта: {order.waiter_id}</h4>
             <h4> ID клиента: {order.client_id}</h4>    
             <h4> ID ПК: {order. PC_id}</h4>       
                 </Card>
        </Grid>

        <Box p={2}>
           <Grid container justifyContent='space-between'>
          
           <Button  onClick={()=> router.push('/order')}> К списку </Button> 
              <Button onClick={remove}> Удалить </Button> 
                         </Grid>
            </Box>
            
           
            <h1> Изменение данных </h1>

         <Grid container justifyContent='center'>
         <Box p={2}>
            <TextField 
             {...sum}
            label = "Сумма заказа"
            type="number"
            fullWidth 
           
            />
            </Box>

            <Box p={2}>
            <TextField 
             {...session_time}
            label = "Время заказа"
            type="date"
            fullWidth 
           
            />
            </Box>

            <Box p={2}>
            <TextField 
            {...waiter_id}
            label = "ID официанта"
            type="number"
            fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {... client_id}
            label = "ID Клиента"
            type="number"
             fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...PC_id}
            label = "ID ПК"
            fullWidth
            type="number"
            />      
             
             </Box>      
             <Button onClick={update}> Изменить</Button> 
             </Grid>

        </MainLayout>

    );
}



orderPage.getInitialProps = async (ctx) => {
  const res = await fetch('http://localhost:5000/order/'+ ctx.query.id)
  const order = await res.json()
  return { order }
}

