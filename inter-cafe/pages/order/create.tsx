import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {
    const sum = useInput('')
    const session_time = useInput('')
    const waiter_id = useInput('')
    const client_id = useInput('')
    const PC_id = useInput('')

    const router = useRouter()
   
   
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/order', {
        sum: sum.value,   
        session_time: session_time.value,
        waiter_id : waiter_id .value,
        client_id: client_id.value,
        PC_id: PC_id.value
  })

  router.push('/order')

}
    
   
    return (
        <MainLayout>
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

            <Button onClick={save}>Сохранить </Button> 

          
        </MainLayout>

    );
};

export default Create;

