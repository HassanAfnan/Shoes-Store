import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import { useNavigate } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.background.paper,
  },
  gridList: {
    width: '100%',
    height: 'auto',
  },
  icon: {
    color: 'rgba(255, 255, 255, 0.54)',
  },
}));

const shoes = {
    "1":{
        name:"Dlatons Boot",
        price:10,
        img:"https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes"
    },
    "2":{
        name:"New Boot",
        price:20,
        img:"https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes"
    },
    "3":{
        name:"Classy Boot",
        price:30,
        img:"https://images.pexels.com/photos/1598505/pexels-photo-1598505.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes"
    },
    "4":{
        name:"Classy Boot",
        price:30,
        img:"https://images.pexels.com/photos/1478442/pexels-photo-1478442.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes"
    },
    "5":{
        name:"Classy Boot",
        price:30,
        img:"https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes"
    },
    "6":{
        name:"Classy Boot",
        price:40,
        img:"https://images.pexels.com/photos/637076/pexels-photo-637076.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
        description:"Very good quality shoes"
    }
};

export default function TitlebarGridList() {
  const classes = useStyles();

  const navigator = useNavigate();

  return (
    <div className={classes.root}>
      <GridList cellHeight={300} className={classes.gridList}>
        <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
          <ListSubheader component="div"></ListSubheader>
        </GridListTile>
        {Object.entries(shoes).map(([ProductID,{name,img,price,desc}]) => (
          <GridListTile key={ProductID}>
            <img src={img} alt={name} />
            <GridListTileBar
              title={name+" "+price+"$" }
              subtitle={desc}
              actionIcon={
                <IconButton aria-label={`info about ${name}`} className={classes.icon} onClick={()=> navigator(ProductID)}>
                  <InfoIcon />
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
