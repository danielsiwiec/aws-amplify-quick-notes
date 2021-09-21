import React from 'react'
import { Grid } from '@material-ui/core'

import BackButton from './BackButton'

const Hash = ({ hash, onBack }) => (
  <Grid container justifyContent='center'>
    <Grid item xs={12}>
      <Grid container justifyContent='center'>
        <h1>{hash}</h1>
      </Grid>
    </Grid>
    <Grid item xs={12}>
      <Grid container justifyContent='center'>
        <BackButton onClick={onBack} />
      </Grid>
    </Grid>
  </Grid>
)

export default Hash