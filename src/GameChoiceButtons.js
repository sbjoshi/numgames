import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

export default function GameChoiceForm() {
  const [value, setValue] = React.useState('addition');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <FormControl component="fieldset">
      <FormLabel component="legend">Game Type</FormLabel> 
	  <TextField id="standard-basic" label="Name" />
      <RadioGroup aria-label="gender" name="gamechoice" value={value} onChange={handleChange}>
        <FormControlLabel value="addition" control={<Radio />} label="Addition" />
        <FormControlLabel value="beforeAfter" control={<Radio />} label="BeforeAfter" />
      </RadioGroup>
	  <Button variant="outlined" color="primary" href="#outlined-buttons">
  Submit
</Button>
    </FormControl>
  );
}
