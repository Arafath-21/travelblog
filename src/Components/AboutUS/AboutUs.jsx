import React,{useState,useEffect} from 'react'
import './_about.scss'
import grpImg from '../../assets/grpImg.png'
import team1 from '../../assets/team1.png'
import team2 from '../../assets/team2.png'
import a1 from '../../assets/a1.png'
import a2 from '../../assets/a2.png'
import a3 from '../../assets/a3.png'
import a4 from '../../assets/a4.png'
import a5 from '../../assets/a5.png'
import a6 from '../../assets/a6.png'
import a7 from '../../assets/a7.png'
import a8 from '../../assets/a8.png'
import Join from '../Join/Join'

const teamData = [
  {
    heading: "Our team of creatives",
    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    imageSrc: team1,
    order:"order-lg-1",
    order2:"order-lg-2"
  },
  {
    heading: "Why we started this Blog",
    description1: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.",
    description2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.",
    imageSrc: team2,
    order:"order-lg-2",
    order2:"order-lg-1"
  }
];

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
    img: a8,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a3,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a4,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a5,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a6,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
  {
    img: a7,
    name:'Floyd Miles',
    job:'Content Writer @Company'
  },
]



const AboutUs = () => {

  const [blogCount, setBlogCount] = useState(0);
  const [viewsCount, setViewsCount] = useState(0);
  const [usersCount, setUsersCount] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  useEffect(() => {
    
    window.scrollTo(0, 0); // Scroll to the top of the page on component mount
    const animateNumbers = (targetValue, setFunction) => {
      let currentValue = 0;
      const increment = targetValue / 60;

      const interval = setInterval(() => {
        currentValue = currentValue + increment;
        setFunction(Math.floor(currentValue));

        if (currentValue >= targetValue) {
          clearInterval(interval);
        }
      }, 250.67);

      return interval;
    };

    const blogInterval = animateNumbers(12, setBlogCount);
    const viewsInterval = animateNumbers(1800, setViewsCount);
    const usersInterval = animateNumbers(30000, setUsersCount);

    return () => {
      clearInterval(blogInterval);
      clearInterval(viewsInterval);
      clearInterval(usersInterval);
    };
  }, []);

  const handleMouseOver = (index) => {
    setHoveredIndex(index);
  };


  return <>
  <div className="container">
    <div className="row">
      <div className="col-lg-5 col-md-5 col-sm-5 ">
        <div className="wrp">
          <div className="subhead">About us</div>
          <div className="head h1">We are a team of content writers who share their learnings</div>
        </div>
      </div>
      <div className="col-lg-5 col-md-5 col-sm-5 offset-2 d-flex justify-content-center align-items-center abou-desc">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
      </div>
    </div>
    <div className="row">
      <div className="col-lg-12 col-md-12 col-sm-12">
        <div className="aboutImg"><img src={grpImg} alt="" className='w-100' />
          <div className='d-flex justify-content-evenly align-items-center counter-card'>
            <div className="counts text-center" >
              <div className="totalblog">{blogCount}+</div>
              <div>Blogs Published</div>
            </div>
            <div className="counts text-center">
              <div className="totalblog">{viewsCount}k+</div>
              <div>Views on Finsweet</div>
            </div>
            <div className="counts text-center">
              <div className="totalblog">{usersCount}k+</div>
              <div>Total active Users</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-6 col-lg-6 col-sm-6 mis">
        <div className="mis-heading">Our mision</div>
        <div className="mis-descr">Creating valuable content for creatives all around the world</div>  
        <div className="mis-descr2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</div>
      </div>
      <div className="col-md-6 col-lg-6 col-sm-6  mis">
      <div className="mis-heading">Our Vision</div>
        <div className="mis-descr">A platform that empowers individuals to improve</div>  
        <div className="mis-descr2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Non blandit massa enim nec. Scelerisque viverra mauris in aliquam sem. At risus viverra adipiscing at in tellus.</div>        
      </div>
    </div>
    {
      teamData.map((e,i)=>{
        return <>
            <div className="row" key={i}>
              <div className={`col-md-6 ${e.order} col-lg-6 col-sm-6 team`}>
                <div className="teamhead">{e.heading}</div>
                <div className="teamdesccr">{e.description1}</div>
                <div className="teamdescr2">{e.description2}</div>
              </div>
              <div className={`col-md-6 ${e.order2} col-lg-6 col-sm-6 team`}>
                <img src={e.imageSrc} alt="" />
              </div>
            </div>        
        </>
      })
    }
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
    <Join />
  </div>
  </>
}

export default AboutUs


