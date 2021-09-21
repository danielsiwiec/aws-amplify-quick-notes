import React from 'react'
import { Button } from '@material-ui/core'

const BackButton = ({ onClick }) => (
  <Button variant='contained' color='secondary' onClick={onClick}>Back</Button>
)

export default BackButton