import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {
    const full_name = useInput('')
    const address = useInput('')
    const passport = useInput('')
    const cafe_id = useInput('')
    const router = useRouter()
   
   
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/waiter', {
        full_name: full_name.value,
    address: address.value,
    passport: passport.value,
    cafe_id: cafe_id.value
  })

  router.push('/waiter')

}
    
   
    return (
        <MainLayout>
            <Box p={2}>
            <TextField 
             {...full_name}
            label = "ФИО официанта"
            fullWidth 
           
            />
            </Box>

            <Box p={2}>
            <TextField 
            {...address}
            label = "Адрес прописки"
            fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...passport}
            label = "Паспорт"
            type="number"
             fullWidth
            />
             </Box>

        <Box p={2}>
            <TextField 
            {...cafe_id}
            label = "ID кафе в котором работает"
            fullWidth
            type="number"
            />      
             </Box>    

            <Button onClick={save}>Сохранить </Button> 

          
        </MainLayout>

    );
};

export default Create;

