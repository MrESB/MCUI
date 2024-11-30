'use client';
import * as React from 'react';
import { Container, Typography, Button, Box } from '@mui/material';
import { useParams } from 'next/navigation';

export default function about() {
    const param = useParams();
    console.log(param)
    const newsId = param?.id; 
    return(
        <Box margin={"auto"}>
            <Typography>
                Your news Id is: {param.id}
            </Typography>
        </Box>
    );
}