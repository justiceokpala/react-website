import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import banner1 from './images/banner1.png';
import Header from './components/Header';
import Footer from './components/Footer';


function App()
{
  return(

    <>

    <section className="container-fluid">
    <Header/>
   
    <main>
    <section className="container"> 
    <div className="row mt-4">
    <div className="mt-4"></div>
    <div className="col-md-3 col-sm-2 blue"><h3> We Are The No 1 Place You Can Get Your Smart Phones.</h3></div>
    <div className="col-md-6 col-sm-8"><img className="img-fluid" src={banner1} alt=""/></div>
    <div className="col-md-3 col-sm-2 blue"><h3>Call Us To Place Your Orders</h3></div>
    </div>
    </section>
   
    <section className="container">
    <div className="row mt-4">
    <div className="mt-4"></div>
    <div className="col-md-4 col-sm-4"></div>
    <div className="col-md-4 col-sm-4"><button type="button" class="btn btn-primary">Learn More</button></div>
    <div className="col-md-4 col-sm-4"></div>
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
