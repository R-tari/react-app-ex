
import './App.css';
import {useState} from 'react';
import srcData from './SrcData.js'
import {Button,Card} from 'react-bootstrap';



function SecContainer(props)
{
  return(
    <div className="container">

      {
        props.wear.map((item,idx,arr)=>
        {
          return(
            <div key={item.id} className="card">
            <h2>{item.title}</h2>
            <p>{item.content}</p>
            <p>{item.price}</p>
          </div>
            
          );
        })
      }
      
    </div>
  );
}

function Footer(props)
{
  return(
    <footer onClick={()=>
    {
      console.log('푸터');
    }}>
      푸터
    </footer>
  );
  
}

function Input(props)
{
  return(
    <input type="text" onChange={(event)=>
      {
        {props.onChange(event);
       }
       }} />
  );
}







function App() {



  let[wear,wearChange]=useState(srcData);


  return (
    <div className="App">
     
      <header>
        <h1>제목</h1>
      </header>

    <section>
      <Input onChange={(id)=>
      {
        console.log(id.target.value)
      }}/>
      <button>클릭</button>
     <SecContainer wear={wear} wearChange={wearChange}/>
    </section>

      <section>

      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the bulk of
            the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
      
      </section>


    <Footer onClick={()=>
    {
      console.log('푸터');
    }}/>
      {/* <footer>
        푸터
      </footer> */}
    </div>
  );
}


export default App;
