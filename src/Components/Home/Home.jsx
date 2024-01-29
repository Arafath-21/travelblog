import React,{useState} from 'react';
import Header from '../Header/Header';
import HeroAbout from '../HeroAbout.jsx/HeroAbout';
import WhyWeStarted from '../WhyWeStarted/WhyWeStarted';
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
import a4 from '../../assets/a4.png'
import Join from '../Join/Join';
import './_home.scss';


const teamDetails = [
  {
    img: a1,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a2,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a4,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a3,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
]

const Home = () => {

  const [hoveredIndex, setHoveredIndex] = useState(null);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };

  return (
    <div>
      <section id='header'>
        <Header />
      </section>
      <section id="hero-about">
        <HeroAbout />
      </section>
      <section style={{paddingTop:'120px'}} id="whyweStarted">
        <WhyWeStarted />
      </section>
      <section>
        <div className="container">
            <div className="row">
              <div className="auth-head text-center h1">List of team members</div>
                  {
                    teamDetails.map((e,i)=>{
                      return <>
                        <div className={`col-lg-3 col-md-3 col-sm-3 authours`} key={i}>
                          <div className={`auth ${hoveredIndex === i ? 'hovered' : ''}`} onMouseOver={()=>handleMouseOver(i)}>
                              <div className="auth-img"><img src={e.img} alt="" /></div>
                              <div className="auth-name">{e.name}</div>
                              <div className="auth-job">{e.job}</div>
                              <ul className="auth-icons d-flex justify-content-center align-items-center">
                                <li><i className="fa-brands fa-facebook"></i></li>
                                <li><i className="fa-brands fa-twitter"></i></li>
                                <li><i className="fa-brands fa-instagram"></i></li>
                                <li><i className="fa-brands fa-linkedin"></i></li>
                              </ul>
                            </div>
                          </div>
                      </>
                    })
                  }
            </div>          
        </div>
      </section>
      <section>
        <Join />
      </section>
    </div>
  )
}

export default Home