
import './App.css';
import Adress from './Components/Adress';
import Age from './Components/Age';
import Email from './Components/Email';
import FullName from './Components/FullName';
import Job from './Components/Job';
import Phone from './Components/Phone';
import Picture from './Components/Picture';

function App() {
  const data={
    fullName:"Foulen ben Falten",
    email:"foulen@gmail.com" ,
    phoneNumber: "0123456789",
    job:"3ala 3al Moujtma3",
    adress:{
      rue: "rue de l'empire",
      city : "Paris",
      zipCode : "75008"
    },
    age:"cherif",
    pic:"https://f4.bcbits.com/img/a2251368116_65"
    

  }
  return (
    <div className="App">
  <Picture taswira={data.pic} />
  <FullName isem={data.fullName} />
  <Email  baridEclrouni={data.email} />
  <Adress  {...data.adress} />
  <Age omar={data.age} >
    this is a simple message
  </Age>
<Job khedma={data.job}/>
<Phone numro ={data.phoneNumber}/>
    </div>
  );
}

export default App;
