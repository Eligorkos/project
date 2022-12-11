import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import './CarouselBox.css'
import { Link } from 'react-router-dom';

export default function MultiActionAreaCard() {
  return (
    <>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="http://antropolog-instrument.ru/content/images/1_104.png"
          alt=" ЦИРКУЛЬ ПЛАНШЕТНЫЙ (ТИП МАРТИНА)"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <p className='bibo'> ЦИРКУЛЬ ПЛАНШЕТНЫЙ (ТИП МАРТИНА) </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
            <p className='bibo'>Для измерений в краниометрических исследованиях.</p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Link to="/cart" className="">
            <Button size="small" color="primary">
                Узнать больше
            </Button>
        </Link>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="http://antropolog-instrument.ru/content/images/1_105.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <p className='bibo'>  ЦИРКУЛЬ ПЛАНШЕТНЫЙ С НОНИУСОМ И СПИЦАМИ </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p className='bibo'>  Для малых краниометрических измерений </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/cart" className="">
            <Button size="small" color="primary">
                Узнать больше
            </Button>
        </Link>
      </CardActions>
    </Card>
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="250"
          image="http://antropolog-instrument.ru/content/images/1_106.png"
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
          <p className='bibo'>  ТОЛСТОТНЫЙ ЦИРКУЛЬ ОКРУГЛЕННЫЕ КРАЯ 300 ММ </p>
          </Typography>
          <Typography variant="body2" color="text.secondary">
          <p className='bibo'> Для измерений 0-300 мм в антропологических исследованиях </p>
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
      <Link to="/cart" className="">
            <Button size="small" color="primary">
                Узнать больше
            </Button>
        </Link>
      </CardActions>
    </Card>
 </>   
  );
}