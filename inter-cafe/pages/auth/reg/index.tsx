import React from 'react';
import MainLayout from '../../../layouts/MainLayout';
import { Button, Box, TextField } from '@mui/material';
import { useRouter } from 'next/router';
import axios from "axios";
import { useInput } from '../../../hooks/useInput';

const Index = () => {
    const router = useRouter()

    const email = useInput('')
    const password = useInput('')
 
  const save = () =>
    {  
     
     axios.post('http://localhost:5000/auth/reg', {
    email: email.value,
    password: password.value
  })

  router.push('/')

}
    return (

     <>
     <MainLayout>
             
     <Box p={2}>
            <TextField 
             {...email}
            label = "Логин"
            fullWidth 
          />
            </Box>

            <Box p={2}>
            <TextField 
             {...password}
            label = "Пароль"
            type="password"
            fullWidth 
           />
            </Box>

            <Button onClick={save}> Сохранить </Button>  
      
     </MainLayout>
         </>
    



    );


};

export default Index;

