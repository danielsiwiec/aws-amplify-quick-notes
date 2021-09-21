import React from 'react'
import { Button } from '@material-ui/core'

const SendButton = ({ onClick }) => {
  return <Button variant='contained' color='primary' onClick={onClick}>Send</Button>
}

export default SendButton