import 'bulma/css/bulma.css'
import './App.css';
import Course from './Course';
import Angular from './images/angular.jpg';
import Bootstrap from './images/bootstrap5.png';
import KompleWeb from './images/kompleweb.jpg';
import Csharp from './images/ccsharp.png';

function App() {
  return (
    <div className="App">
      <section className="hero is-link">
        <div className="hero-body">
          <p className="title">Kurslarım</p>
        </div>
      </section>
      <div className="container">
        <section className='section'>
          <div className="columns">
            <div className="column">
              <Course 
              // props : image, title, description
                image={Angular}
                title="Angular" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, possimus ex nihil, obcaecati vitae doloremque voluptatem quam ab provident necessitatibus quas quis, reprehenderit in asperiores sit velit inventore. Fugiat, quos!"
              />
            </div>
            <div className="column">
              <Course
                image={Bootstrap}
                title="Bootstrap 5" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, possimus ex nihil, obcaecati vitae doloremque voluptatem quam ab provident necessitatibus quas quis, reprehenderit in asperiores sit velit inventore. Fugiat, quos!"
              />
            </div>
            <div className="column">
              <Course
                image={Csharp}
                title="Komple Web" 
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, possimus ex nihil, obcaecati vitae doloremque voluptatem quam ab provident necessitatibus quas quis, reprehenderit in asperiores sit velit inventore. Fugiat, quos!"
              />
            </div>
            <div className="column">
              <Course
                image={KompleWeb}
                title="FrontEnd"
                description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, possimus ex nihil, obcaecati vitae doloremque voluptatem quam ab provident necessitatibus quas quis, reprehenderit in asperiores sit velit inventore. Fugiat, quos!"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
