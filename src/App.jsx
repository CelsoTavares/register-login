import { ImUser, ImMail, ImKey, ImEyeBlocked, ImEye } from "react-icons/im";
import { useState } from 'react';

function App() {

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password1, setPassword] = useState('')
  const [text, setText] = useState('password')
  const [eye, setEye] = useState('visible')
  
const condition = /[123]{3}|[abc|ABC]{3}/ 
const conditionNumber = /[0-9]/ 
const letterLowercase = /[a-z]/ 
const letterUppercase = /[A-Z]/ 
const character = /[@!?#$%-_^&=*()/+{}]/ 
const conditionEmail = /[@.]/

function change() {
  
  if(text === 'password') {
    setText('text') 
    setEye('invisible')
  }else {
    setText('password')
    setEye('visible')
  }
 
}
function submit(){
 
     if( name === '' | email === '' | password1 === '') {
      alert("Preencha todos os campos")
     
    }else if (name.length < 3) {
     alert('Full name: Mínimo de 3 caracteres.')
    
    }else if (email.length < 5) {
      alert('Email: Mínimo de 5 caracteres.')
    
    }else if (!conditionEmail.test(email)) {
     alert(`Email: Use '@' e '.' .`)

    }else if(condition.test(password1)) {
     alert('Password: Não use sequência.')

    }else if(!character.test(password1)) {
     alert('Password: Mínimo de 1 carácter especial.')

    }else if (password1.length < 8) {
      alert('Password: mínimo de 8 caracteres.')
    
    }else if(!conditionNumber.test(password1)) {
      alert('Password: Mínimo de 1 número.')
    
    }else if(!letterLowercase.test(password1)) {
      alert('Password: Mínimo de uma letra minúscula.')
    
    }else if(!letterUppercase.test(password1)) {
      alert('Password: Mínimo de uma letra maiúscula.')
        
    }else {
      alert('Parabéns, todos os dados foram cadastrados.')
       setName('')
       setEmail('')
       setPassword('')
    }
 }

  return (
    <div className="App">
    
      <h2>Welcome</h2>
   
      <div className="container">

        <h1>Register</h1>
        <hr></hr>

        <h3 className="register">Register</h3>
        <h3 className="sign">Sign in</h3>
      
            <div className="nameIcon">
            <label htmlFor="nameClass"><ImUser/></label>  
            <input id="nameClass" type="text" placeholder="FULL NAME"
            value={name}
            onChange = {(e)=> setName(e.target.value)} 
            />
          </div>
          
            <div className="emailIcon">
            <label htmlFor="emailClass"><ImMail/></label>
            <input id="emailClass" type="email" placeholder="EMAIL"
            value={email}
            onChange = {(e)=> setEmail(e.target.value)}
            />
          </div>    
          
           <div className="passwordIcon" >
           <label htmlFor="passwordClass"><ImKey/></label>
           <input id="passwordClass" type={text}  placeholder="PASSWORD"
           value={password1}
           onChange = {(e)=> setPassword(e.target.value)}          
           />  
        
          {eye === 'visible' ? <ImEyeBlocked onClick={change} /> : <ImEye onClick={change} />}
         
          </div>  

          <button type="submit"  onClick={submit}>Submit</button>
        </div>
        <div className="condition">
          
          {name.length > 0 && email.length > 0 && password1.length > 0 ? 
          <p style={{color: 'green'}}>Preencha todos os campos.</p>
          : <p style={{color: '#e60000'}}>Preencha todos os campos.</p>}
           
          {name.length >= 3 ? 
          <p style={{color: 'green'}}>Full name: Mínimo 3 caracteres.</p>
          : <p style={{color: '#e60000'}}>Full name: Mínimo 3 caracteres.</p>}

          {!conditionEmail.test(email) ? 
          <p style={{color: '#e60000'}}>Email: Use " @ " use " . "</p> 
          :<p style={{color: 'green'}}>Email: Use " @ " use " . "</p>}
                      
          {email.length >= 5 ? 
          <p style={{color: 'green'}}>Email: Mínimo 5 caracteres</p>
          :<p style={{color: '#e60000'}}>Email: Mínimo 5 caracteres</p>}
           
          {!conditionNumber.test(password1) ?
          <p style={{color: '#e60000'}}>Password: Mínimo de 1 número</p>
          :<p style={{color: 'green'}}>Password: Mínimo de 1 número</p>}
            
          {condition.test(password1) ?
          <p style={{color: '#e60000'}}>Password: Não use sequência 123 ou abc</p>
          :<p style={{color: 'green'}}>Password: Não use sequência 123 ou abc</p>}

          {!character.test(password1) ?
          <p style={{color: '#e60000'}}>Password: Mínimo de um carácter especial</p>
          :<p style={{color: 'green'}}>Password: Mínimo de um carácter especial</p>}

          {!letterLowercase.test(password1) ?
          <p style={{color: '#e60000'}}>Password: Mínimo de uma letra minúscula</p>
          :<p style={{color: 'green'}}>Password: Mínimo de uma letra minúscula</p>}

          {!letterUppercase.test(password1) ?
          <p style={{color: '#e60000'}}>Password: Mínimo de uma letra maiúscula</p>
          :<p style={{color: 'green'}}>Password: Mínimo de uma letra maiúscula</p>}

          {password1.length < 8 ?
          <p style={{color: '#e60000'}}>Password: mínimo 8 caracteres</p>
          :<p style={{color: 'green'}}>Password: mínimo 8 caracteres</p>}
            
        </div>
    </div> 
  );
}

export default App;
