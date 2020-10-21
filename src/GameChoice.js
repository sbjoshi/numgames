
import React from 'react';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import UIFx from 'uifx';
import buzzerAudio from './assets/sounds/buzzer.mp3';
import cheerAudio from './assets/sounds/cheers1.mp3';
import GameChoiceForm from './GameChoiceButtons';
/* Both the audio clips are from https://freesfx.co.uk/ */

const lb = 1;
const ub = 5;
const correctAnswerEmoji="0x1F913";
const wrongAnswerEmoji="0x1F62D";
const objEmojis = ["0x1F408","0x1F9AE","0x1F404","0x1F416","0x1F411","0x1F42A", "0x1F992", "0x1F418", "0x1F98F", "0x1F400", "0x1F407", "0x1F43F", "0x1F987", "0x1F998"]



const buzzer = new UIFx(
	  buzzerAudio,
	  {
		      volume: 0.4, // number between 0.0 ~ 1.0
		      throttleMs: 100
		    }
)
const cheer = new UIFx(
	  cheerAudio,
	  {
		      volume: 0.4, // number between 0.0 ~ 1.0
		      throttleMs: 100
		    }
)

function Score(props)
{
  return(<text style={{fontSize:40}}> Your score is : <span style={{color:'blue'}}>{props.score}/{props.nq}</span> </text>);
  
}
function AnswerStatus(props)
{
  let c;
  let fsize={fontSize:40};
  if(props.isCorrect)
    {
      c = {color:'green'};
      
    }
  else
    {
      c={color:'red'};
      
    }
  return(<text style={c,fsize}> {props.text} </text>);
}

function getEmojiString(e,n1,n2)
{
	var str1 = String.fromCodePoint(e).repeat(n1);
	var str2 = String.fromCodePoint(e).repeat(n2);
	return str1.concat("+",str2);
}

function DisplayObjects(props)
{
 let fsize={fontSize:40}; 
  return (<text style={fsize}> {getEmojiString(props.emoji,props.n1,props.n2)} </text>);
}

function AddQuestion(props)
{
 
 let c; 
 let fsize={fontSize:40}; 
      c={color:'magenta'};
      
  return (<text style={fsize}> What is  <span style={c}>{props.n1} </span> + <span style={c}> {props.n2} </span>?
      </text>);
      
    
}


function getRandomNum(l, u)
{
	return Math.floor(Math.random()*u+l);
}

class Game extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={emojiIndex: objEmojis[Math.floor(Math.random()*objEmojis.length)], num1: getRandomNum(lb,ub), num2: getRandomNum(lb,ub), answer:'', isCorrect:false, answerStatusText:'',score: 0,numQuestions: 1,}
    this.handleAnswerChange=this.handleAnswerChange.bind(this);
    this.handleAnswerSubmit=this.handleAnswerSubmit.bind(this);
    this.generateNewQuestion=this.generateNewQuestion.bind(this);
  };
  
  componentDidMount(){
    this.nameInput.focus();
  }
  componentDidUpdate(){
    this.nameInput.focus();
  }
  generateNewQuestion()
  {
    const nq = this.state.numQuestions+1;
    let n1 = getRandomNum(lb,ub);
    let n2 = getRandomNum(lb,ub);
	  let emoji = objEmojis[Math.floor(Math.random()*objEmojis.length)];
    this.setState({emojiIndex: emoji, num1: n1, num2: n2,answerStatusText:'',answer:'', isCorrect: false,numQuestions: nq,});
  }
  handleAnswerSubmit()
  {
    const mscore=this.state.score;
    
	  if(this.state.answer == (this.state.num1 + this.state.num2))
	  {
		  this.setState({isCorrect:true,answerStatusText:String.fromCodePoint("0x1F913"), score: mscore+1,});
		  cheer.play();
	  }
    else {
	    this.setState({isCorrect:false,answerStatusText:String.fromCodePoint("0x1F62D")});
	    buzzer.play();
             }
  }
  
  handleAnswerChange(event)
  {
    this.setState({answer:event.target.value});
  }
  
  render()
  {
    return(
      <div>
        <Score score={this.state.score} nq={this.state.numQuestions}/> <br/>
        <AddQuestion n1={this.state.num1} n2={this.state.num2} />
      <input autoFocus style={{fontSize:40}} type="text" maxLength="2" size="2" value={this.state.answer} onChange={this.handleAnswerChange} 
        ref={(input) => { this.nameInput = input; }} />
   <AnswerStatus isCorrect={this.state.isCorrect} text={this.state.answerStatusText}/>
        
        <br/>
	    <DisplayObjects emoji={this.state.emojiIndex} n1={this.state.num1} n2={this.state.num2} /> <br/>
        <button style={{fontSize:40}} onClick={this.handleAnswerSubmit} disabled={this.state.isCorrect}>
          Submit </button>
        <button  style={{fontSize:40}} onClick={this.generateNewQuestion}> Play another </button>
        </div>);
    
  }
  
}



/*function makeEnum(arr){
    let obj = {};
    for (let val of arr){
        obj[val] = Symbol(val);
    }
    return Object.freeze(obj);
}


const GameChoices = makeEnum(["Addition","BeforeAfter"]);

class GameChoice extends React.Comonent {

	constructor(props) {
		super(props);
		this.state={ choice: GameChoices.Addition }
	}
} */



const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', isInitialized: false, gc: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    alert('x: ' + this.state.value);
    this.setState({isInitialized:true});
    event.preventDefault();
  }

  render() {
    if(this.state.isInitialized)
      return(
        <div><h1> Hello, {this.state.value}!</h1> 
      <Game/></div>);
    else
    return (
/*      <form onSubmit={this.handleSubmit}  noValidate autoComplete="off">
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}
            
            />
        </label> <br/>

	<GameChoiceForm />  <br/>
        <input type="submit" value="Submit" />
      </form>*/
	    <GameChoiceForm />
    );
  }
}

export default NameForm;

/*
ReactDOM.render(
  <NameForm />,
  document.getElementById('root')
);
*/
