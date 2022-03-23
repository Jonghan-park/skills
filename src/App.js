import "./App.css";
import Skills from './Skills';

function App() {
  return (
    <main>
      <section className="container">
        <div className="title">
          <h2>My Skills</h2>
          <div className="underline"></div>
        </div>
        <Skills />
      </section>
    </main>
  );
}

export default App;
