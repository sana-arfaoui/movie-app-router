import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom'

import './Movieitem.css'

export default function Movieitem({title,description,imgUrl,rate,bt,id}) {
  return (
    <Card sx={{ maxWidth: 245 , height:350}} className="Movieitem">
      <CardMedia
        component="img"
        height="140"
        image={imgUrl}
        alt="img"
        style={{ height: "150px" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
         <h4 style={{color:"red", fontSize:20, textAlign:'center'}}>{title}</h4> 
        </Typography>
        <Typography variant="body2" color="text.secondary">
          <h5>{description}</h5>
          <p style={{color: 'blue'}}>rate:{rate}</p>

        </Typography>
      </CardContent>
      <CardActions>
        
      <Button size="small"  >
        
        <Link to={`moviedetails/${id}`}>
        {bt}
        </Link>
        </Button>

        


      </CardActions>
    </Card>
  );
}
Movieitem.defaultProps = {
  title: " Title",
   imgUrl: "https://upload.wikimedia.org/wikipedia/commons/4/47/Bandera_del_NO.png",
   
   description:"N/A",
  rate: "N/A",
   
 };
 Movieitem.propTypes = {
 title: PropTypes.string.isRequired,
 imgUrl:PropTypes.string.isRequired,
 description:PropTypes.string.isRequired,
 rate:PropTypes.number.isRequired

};

