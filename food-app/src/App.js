import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">

                    <nav>
                <a href="#">Filmer</a>
                <a href="#">Karaktärer</a>
                <a href="#">Sith</a>
                <a href="#">Jedi</a>
            </nav>
            <main>
                <h2>A long time ago in a galaxy far, far away</h2>
                <p>... där berättas en av de bästa sagorna, som tagit världen (och inte minst mig) med storm. Den mörka mot den ljusa sidan. Viljan att bevara fred i galaxen, samtidigt som att styra den på "bästa" sätt. Och dessutom, en himla massa familjedrama kring familjen Skywalker.</p>
                <section id="movie-figures">
                    <figure>
                        <img src="images/episode-1.jpg" alt="Star Wars - Episode I: Poster">
                        <figcaption>Star Wars - Episode I</figcaption>
                    </figure>
                    <figure>
                        <img src="images/episode-2.jpg" alt="Star Wars - Episode II: Poster">
                        <figcaption>Star Wars - Episode II</figcaption>
                    </figure>
                    <figure>
                        <img src="images/episode-3.jpg" alt="Star Wars - Episode III: Poster">
                        <figcaption>Star Wars - Episode III</figcaption>
                    </figure>
                    <figure>
                        <img src="images/episode-4.jpg" alt="Star Wars - Episode IV: Poster">
                        <figcaption>Star Wars - Episode IV</figcaption>
                    </figure>
                    <figure>
                        <img src="images/episode-5.jpg" alt="Star Wars - Episode V: Poster">
                        <figcaption>Star Wars - Episode V</figcaption>
                    </figure>
                    <figure>
                        <img src="images/episode-6.jpg" alt="Star Wars - Episode VI: Poster">
                        <figcaption>Star Wars - Episode VI</figcaption>
                    </figure>
                </section>
            </main>
            <footer>
                
            </footer>


      </header>
    </div>
  );
}

export default App;
