import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, CardActionArea } from '@mui/material';
import { typeHandler } from '../../utils';


export default function PokemonCard({ name, image, types }) {

  return (
    <Card hover sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={image}
          max-height="200"
          alt="green iguana"

        />
        <CardContent>
          <Box>
            <Typography gutterBottom variant="h5" fontWeight="bold" component="div">
              {name}
            </Typography>
            <Typography gutterBottom variant="caption" component="div">
              {typeHandler(types)}
            </Typography>
          </Box>
          {/*<Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>*/}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

