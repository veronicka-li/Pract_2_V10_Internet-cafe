import React from 'react';
import MainLayout from '../layouts/MainLayout';
import { Grid, Button, Box } from '@mui/material';
import { useRouter } from 'next/router';

const Index = () => {
    const router = useRouter()

    return (
     <>
     <MainLayout>
     <Grid container justifyContent='space-between'>
                <Box p={2}> 
              
                <Button  onClick={()=> router.push('/auth/reg')}> Регистрация </Button>  
                <Button  onClick={()=> router.push('/auth/login')}> Авторизация </Button>  
            </Box>
        </Grid>
            <div className="center">
            <h1> Добро пожаловать в информационную систему "Интернет-кафе!"</h1>
      </div>
     </MainLayout>
          <style jsx>
          {`
              .center{
                  margin-top: 300px;
                  display: flex;
                  flex-direction: column;
                  align-items: center;
                  justify-content: center;
              }
         `}
             
      </style>
       </>        );};

export default Index;