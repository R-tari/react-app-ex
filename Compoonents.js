function Header(props)
{
  return(
    <header>
      <div className="container">
        <h1>{props.name1}{props.name2()}</h1>
      </div>
    </header>
  );
}

function Section(props)
{
  return(
    <section>
        <div className="container">
          <p>{props.content[2]}</p>
        </div>
      </section>
  );
}

function Footer(props)
{
  return(
    <footer>
       <address  className={props.Class.name}>
          인천광역시 연수구 연수동 582-2
          {props.Class.consolePrint()}
        </address>
      </footer>
  );
}

export  {Header,Section,Footer};