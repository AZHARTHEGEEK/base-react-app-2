import React from 'react';
import './custom_css.css';

function App({name,age,year}) {
  return <div className="custon_bg">
  <div>Hello from <strong>{name}</strong>, Age: {age+1}</div>
  <h1>This Second Base React App Task</h1>
  <h3>Bootcamp {year}</h3>
  <div> Unordered List Of Courses
     <ul>
       <li>Artificial Intelligence</li>
       <li>4IR</li>
       <li>Bootcamp2020</li>
     </ul> 
  </div>
  <div> Ordered List Of Courses
     <ol>
       <li>Deep learning</li>
       <li>HTML,CSS</li>
       <li>javaScript</li>
       <li>React</li>
       <li>Word Press</li>
       <li>Linux</li>
     </ol> 
  </div>
  <h6>Build Using React</h6>
</div>;
}

export default App;
