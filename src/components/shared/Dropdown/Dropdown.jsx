import React from 'react'
import { observer } from 'mobx-react'
import { MenuItem, Select, InputLabel, FormControl } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import './Dropdown.styl'

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2
  },
  selectMenu: {
    color: '#ddd'
  }
})

const Dropdown = ({
  classes,
  data: { name, value, options },
  onChange,
  showLabel,
  placeholder
}) => (
  <div className={`dropdown ${classes.root} ${value ? 'active' : ''}`} autoComplete="off">
    <FormControl className={classes.formControl}>
      {showLabel && <InputLabel htmlFor="age-simple">نوع</InputLabel>}
      <Select
        placeholder={placeholder}
        disableUnderline
        className="dropdown__select"
        value={value}
        onChange={({ target }) => onChange(target.value)}
        inputProps={{
          name: 'dropdown',
          id: `dropdown-${name}`
        }}
      >
        <MenuItem value="">
          <em></em>
        </MenuItem>
        {options.map(option => (
          <MenuItem key={option} value={option}>
            {option}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  </div>
)

export default withStyles(styles)(observer(Dropdown))
