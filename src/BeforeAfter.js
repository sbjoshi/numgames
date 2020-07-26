
import React from 'react';
import UIFx from 'uifx';
import buzzerAudio from './assets/sounds/buzzer.mp3';
import cheerAudio from './assets/sounds/cheers1.mp3';
/* Both the audio clips are from https://freesfx.co.uk/ */


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
  return(<text style={{fontSize:40}}> Your score is : <span style={{color:'orange'}}>{props.score}/{props.nq}</span> </text>);
  
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

function MyQuestion(props)
{
 
 let c; 
 let fsize={fontSize:40}; if(props.order.localeCompare("before"))
    {
      c={color:'magenta'};
      
    }
  else
    {
      c={color:'cyan'};
        
      
    }
  return (<text style={fsize}> What comes  <span style={c}>{props.order} </span> {props.number}?
      </text>);
      
    
}

class Game extends React.Component
{
  constructor(props)
  {
    super(props);
    this.state={isBefore:true, mynum: 2, answer:'', isCorrect:false, answerStatusText:'',score: 0,numQuestions: 1,}
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
    let r = Math.floor(Math.random()*99+1);
    let b = (Math.random()<0.5);
    this.setState({isBefore:b,mynum:r,answerStatusText:'',answer:'', isCorrect: false,numQuestions: nq,});
  }
  handleAnswerSubmit()
  {
    const mscore=this.state.score;
    
    if((this.state.isBefore && this.state.answer== this.state.mynum-1) || (!this.state.isBefore && this.state.answer==this.state.mynum+1))
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
    let comp = this.state.isBefore? 'before':'after';
    return(
      <div>
        <Score score={this.state.score} nq={this.state.numQuestions}/> <br/>
        <MyQuestion order={comp} number={this.state.mynum} />
      <input autoFocus style={{fontSize:40}} type="text" maxLength="2" size="2" value={this.state.answer} onChange={this.handleAnswerChange} 
        ref={(input) => { this.nameInput = input; }} />
   <AnswerStatus isCorrect={this.state.isCorrect} text={this.state.answerStatusText}/>
        
        <br/>
        <button style={{fontSize:40}} onClick={this.handleAnswerSubmit} disabled={this.state.isCorrect}>
          Submit </button>
        <button  style={{fontSize:40}} onClick={this.generateNewQuestion}> Play another </button>
        </div>);
    
  }
  
}

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '', isInitialized: false,};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
   // alert('A name was submitted: ' + this.state.value);
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
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange}
            
            />
        </label>
        <input type="submit" value="Submit" />
      </form>
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
