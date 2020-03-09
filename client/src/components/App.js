import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Aside from './Aside';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
    }
  }

  componentDidMount() {
    // Code to retrieve articles data here and set the State
    console.log('App mounted');
  }

  render() {
    return (
      <React.Fragment>
        <Header/>

        <section>
          <strong>Demonstration of a simple page layout using HTML5 tags: header, nav, section, main, article, aside, footer, address. Implemented with React with components Header, Aside, ArticleList, Article, Footer</strong>
        </section>

        <section id="pageContent">
          <main role="main">
            <article>
              <h2>Hard Coded Title 1</h2>
              <p>Hard Coded contents 1 Hard Coded contents 1 Hard Coded contents 1 Hard Coded contents 1 Hard Coded contents 1 Hard Coded contents 1 Hard Coded contents 1</p>
            </article>
            <article>
            <h2>Hard Coded Title 2</h2>
              <p>Hard Coded contents 2 Hard Coded contents 2 Hard Coded contents 2 Hard Coded contents 2 Hard Coded contents 2</p>
            </article>
            <article>
            <h2>Hard Coded Title 3</h2>
              <p>Hard Coded contents 3 Hard Coded contents 3 Hard Coded contents 3 Hard Coded contents 3 Hard Coded contents 3 Hard Coded contents 3</p>
            </article>
            <article>
              <h2>Hard Coded Title 4</h2>
              <p>Hard Coded contents 4 Hard Coded contents 4 Hard Coded contents 4 Hard Coded contents 4 Hard Coded contents 4 Hard Coded contents 4 Hard Coded contents 4</p>
            </article>
          </main>

        </section>

        <Footer/>
      </React.Fragment>
    );
  }
}

export default App;