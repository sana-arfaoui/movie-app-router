import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import {Form} from "react-bootstrap";

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  
};


export default function BasicModal(props) {
    
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const styles={
    width:'90px',
    backgroundColor:'blue' ,
    border:'blue',
    display:'flex',
    justifyContent:'center',
    alignItems:'center'}
    const[newMovie,setNewMovie]=React.useState()
  
  /*const handleChange = (e) => {
    setNewMovie({
        ...newMovie,
        [e.target.name]: e.target.value,
        id: Math.random(),
    });
};*/
const handleChange=(e)=>{
    setNewMovie({...newMovie,[e.target.name]:e.target.value,id:Math.random})
}

const handleSaveChanges=()=>{
    props.setMovies([...props.movies,newMovie]);
    handleClose();
}
    
  return (
    <div>
      <Button onClick={handleOpen}>Add New Movie</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Add New Movie
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
           <form onChange={(e) => handleChange(e)}>
            

            <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                name="title"
                                placeholder="Enter a title name"
                                
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Photo</Form.Label>
                            <Form.Control
                                type="text"
                                name="imgUrl"
                                placeholder="add movie photo"
                               
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Description</Form.Label>
                            <Form.Control
                                type="text"
                                name="description"
                               
                                
                            />
                        </Form.Group>
                        <Form.Group
                            className="mb-3"
                            controlId="exampleForm.ControlInput1"
                        >
                            <Form.Label>Rate</Form.Label>
                            <Form.Control
                                type="number"
                                name="rate"
                                min={1}
                                max={5}
                               
                            />
                        </Form.Group>
                        <Form.Group>
                            <button  style={styles} 

onClick={() => handleSaveChanges()} >Add</button>
                        </Form.Group>
                        
                            
                        
                            
                        



           </form>
          </Typography>
        </Box>
      </Modal>
    </div>
  );
}
