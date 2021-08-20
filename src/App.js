import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Slickdemo from './components/Slickdemo' ;


function App()
{
  return(

    <>

    <section className="container-fluid">
    <Header/>
    <main>
    <section className="container">
    <div className="row mt-4"></div>
    <div className="mt-4"></div>
    <div className="row mt-4">
    <Slickdemo/> 
    </div>
    </section>

    <section className="container">
    <div className="row mt-4">
    <div className="mt-4"></div>
    <div className="mt-4"></div>
    <div className="mt-4"></div>
    <div className="col-sm-5"></div>
    <div className="col-sm-2"><button type="button" class="btn btn-danger">Learn More</button></div>
    <div className="col-sm-5"></div>
    <div className="mt-4"></div>
    <div className="mt-4"></div>
    </div>
    </section>

    </main>
   
    <Footer/>

    </section>

    
    

    </>
  );

}

export default App;
