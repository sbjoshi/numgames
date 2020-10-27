import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class  GameChoiceForm extends React.Component {
	constructor(props) {
		super(props);
	}

 /* const [value, setValue] = React.useState('addition');*/

/*  const handleChange = (event) => {
    setValue(event.target.value);
  }; */
render() {
  return (
    <FormControl component="fieldset"> 
      <FormLabel component="legend">Game Type</FormLabel> 
	  <TextField id="standard-basic" label="Name" onChange={this.props.textChangeHandler}/>
      <RadioGroup aria-label="Game Choice" name="gamechoice" onChange={this.props.choiceChangeHandler}>
        <FormControlLabel value="2" control={<Radio />} label="Addition" />
        <FormControlLabel value="1" control={<Radio />} label="BeforeAfter" />
      </RadioGroup>
	  <Button variant="outlined" color="primary" href="#outlined-buttons" onClick={this.props.submitHandler}>
  Submit
</Button>
    </FormControl> 
  );
}
}

export default GameChoiceForm;
