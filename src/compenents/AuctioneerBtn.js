import React from 'react'
import { Button } from '@material-ui/core'
import { withStyles } from '@material-ui/core'


const StyledButton = withStyles({
  root: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "50",
    padding: "0 25px",
    boxSizing: "border-box",
    borderRadius: 0,
    background: "#4f25f7",
    color: "#fff",
    transform: "none",
    boxShadow: "6px 6px 0 0 #c7d8ed",
    transition: "background .3s, boarder-color .3s, color .3s",
    "&:hover": {
      backgroundColor: "4f25f7"
    },
  }
})(Button);

export default function AuctioneerBtn(props) {
  return (
    // <Button>Auctioneer</Button>
    <StyledButton variant='contained'>{props.txt}</StyledButton>
  )
}
