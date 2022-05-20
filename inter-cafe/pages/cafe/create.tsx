import React from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Card, Grid, Box, TextField } from '@mui/material';
import {useInput} from "../../hooks/useInput";
import { useRouter } from 'next/router';
import axios from "axios";


const Create= () => {
    const name_cafe = useInput('')
    const address = useInput('')
    const bank_account = useInput('')
    const pan = useInput('')
    const router = useRouter()
   
     const save = () =>
    {       
     axios.post('http://localhost:5000/cafe', {
    name_cafe:  name_cafe.value,
    address: address.value,
    bank_account:  bank_account.value,
    pan: pan.value
  }) 
    router.push('/cafe')
  }

       return (
        <MainLayout>
            <Box p={2}>
            <TextField 
             {...name_cafe}
            label = "Название кафе"
            fullWidth        />            </Box>
            <Box p={2}>
            <TextField 
            {...address}
            label = "Адрес кафе"
            fullWidth            />             </Box>
        <Box p={2}>
                        <TextField 
            {...bank_account}
            label = "Банковский счет кафе"
            type="number"
             fullWidth            />             </Box>

        <Box p={2}>
            <TextField 
            {...pan}
            label = "ИНН кафе"
            fullWidth
            type="number"            />                 </Box>    

            <Button onClick={save}>Сохранить </Button> 
         
        </MainLayout>  
          );};

export default Create;

