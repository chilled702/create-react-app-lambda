import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, TextField } from '@mui/material';


const card = (
  <React.Fragment>
    <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Hi, Priya. You are answering the form anonymously. 
      </Typography>

      <FormControl className='form'>
        <div className="q">
            <FormLabel id="q1">What do you want to learn more about?</FormLabel>
            <RadioGroup
                aria-labelledby="q1"
                defaultValue="seo"
                name="radio-buttons-group"
                >
                <FormControlLabel className='q-options' value="seo" control={<Radio size='small'/>} label="SEO" />
                <FormControlLabel className='q-options' value="events" control={<Radio size='small' />} label="Events" />
                <FormControlLabel className='q-options' value="websites" control={<Radio size='small' />} label="Websites" />
                <FormControlLabel className='q-options' value="marketing-automation" control={<Radio size='small' />} label="Marketing Automation" />
                <FormControlLabel className='q-options' value="tealium" control={<Radio size='small' />} label="Tealium" />
            </RadioGroup>
        </div>
        <div className="q">
            <TextField id="q2" className='q-text' label="What do you want to learn more about?" variant="filled" />
        </div>

        <Button variant="contained" className='q-submit'>Submit</Button>

       </FormControl>




    </CardContent>
  </React.Fragment>
);

export default function OutlinedCard() {
  return (
    <Box sx={{ minWidth: 275 }}>
      <Card variant="outlined">{card}</Card>
    </Box>
  );
}