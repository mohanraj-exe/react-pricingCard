import { Box, Grid } from '@mui/material';
import * as React from 'react';
import { makeStyles } from '@mui/styles';
import { Card, CardContent, Button, Typography } from '@mui/material';
import DoneOutlinedIcon from '@mui/icons-material/DoneOutlined';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';

const styles = makeStyles({
  cssProps: {
    background: "linear-gradient(to right, #0062E6, #33AEFF)",
    padding: "120px",
    height: "400px",
  },
  cssAlign: {
    display: "flex"
  },
  contentAlign: {
    textAlign: "center",
  },
  cardAlign:{
    alignContent: "center"
  },
  buttonAlign: {
    padding: "10px 0px",
    textAlign: "center"
  },
  buttonWidth:{
    height: "40px",
    width: "200px"
  },
  textBlur:{
    color: "lightgrey"
  }
})

function pricingTable() {
  const classes = styles();
  return (

    <Box className={classes.cssProps}>

      <Grid container spacing={1} className={classes.cssAlign}>
        <Grid item xs={12} sm={6} md={4} className={classes.cardAlign}>

          <Card sx={{ width: 275 }} >
            <CardContent>
              <Typography sx={{ fontSize: 14 }} 
              color="text.secondary" 
              fontWeight={"bold"} gutterBottom className={classes.contentAlign}>
                FREE
              </Typography><br />
              <Typography variant="h5" component="div" className={classes.contentAlign}>
                $0 /Month
              </Typography>
              <hr />
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Single User
              </Typography>
              <Typography variant="body2"> 
                <DoneOutlinedIcon fontSize="small" /> &nbsp; 5 GB Storage
              </Typography>
              <Typography variant="body2"> 
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Unlimited Public Projects
              </Typography>
              <Typography variant="body2"> 
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Community Access
              </Typography>
              <Typography variant="body2" className={classes.textBlur}>
                <HighlightOffOutlinedIcon fontSize="small" /> &nbsp; Unlimited Private Projects
              </Typography>
              <Typography variant="body2" className={classes.textBlur}> 
                <HighlightOffOutlinedIcon fontSize="small" /> &nbsp; Dedicated Phone Support
              </Typography>
              <Typography variant="body2" className={classes.textBlur}> 
                <HighlightOffOutlinedIcon fontSize="small" /> &nbsp; Free Subdomain
              </Typography>
              <Typography variant="body2" className={classes.textBlur}>
                <HighlightOffOutlinedIcon fontSize="small" /> &nbsp; Monthly Status Reports
              </Typography>
            </CardContent>
            <div className={classes.buttonAlign}>
              <Button size="small" variant="contained" className={classes.buttonWidth}>BUTTON</Button>
            </div>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.cardAlign}>

          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} 
              color="text.secondary" 
              fontWeight={"bold"} gutterBottom className={classes.contentAlign}
              >
                PLUS 
              </Typography><br />
              <Typography variant="h5" component="div" className={classes.contentAlign}>
                $9 /Month
              </Typography>
              <hr />
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; 5 Users
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; 50 GB Storage
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Unlimited Public Projects
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Community Access
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Unlimited Private Projects
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Dedicated Phone Support
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Free Subdomain
              </Typography>
              <Typography variant="body2" className={classes.textBlur}>
                <HighlightOffOutlinedIcon fontSize="small" /> &nbsp; Monthly Status Reports
              </Typography>
            </CardContent>
            <div className={classes.buttonAlign}>
              <Button size="small" variant="contained" className={classes.buttonWidth}>BUTTON</Button>
            </div>
          </Card>
        </Grid>

        <Grid item xs={12} sm={6} md={4} className={classes.cardAlign}>
          <Card sx={{ width: 275 }}>
            <CardContent>
              <Typography sx={{ fontSize: 14 }} color="text.secondary" 
              fontWeight={"bold"} gutterBottom className={classes.contentAlign}>
                PRO
              </Typography><br />
              <Typography variant="h5" component="div" className={classes.contentAlign}>
                $49 /Month
              </Typography>
              <hr />
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Unlimited Users
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; 150 GB Storage
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Unlimited Public Projects
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Community Access
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Unlimited Private Projects
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Dedicated Phone Support
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Unlimited Free Subdomains
              </Typography>
              <Typography variant="body2">
                <DoneOutlinedIcon fontSize="small" /> &nbsp; Monthly Status Reports
              </Typography>
            </CardContent>
            <div className={classes.buttonAlign}>
              <Button size="small" variant="contained" className={classes.buttonWidth}>BUTTON</Button>
            </div>
          </Card>
        </Grid>
      </Grid>
    </Box >
  );
}
export default pricingTable;
