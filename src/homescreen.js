import logo from './logo.svg';
import arr from './arr.svg'
import './App.css';
import s from './s.png'
import react from 'react'
import search from './search.png'
import graphs from './gs.png'
function Homescreen() {
  return (
    <div  className='hm' >
       <div className="bg-i"></div>
       <div className='bg-w'></div>
       <div className='bg-w-t'></div>
       <div id='nav'>
           <ul >
               <li className='logo-svg'>
           <svg  viewBox="0 0 60 25" xmlns="http://www.w3.org/2000/svg" width="60" height="25" class="UserLogo variant-- "><title>Stripe logo</title><path fill="#ffffff" d="M59.64 14.28h-8.06c.19 1.93 1.6 2.55 3.2 2.55 1.64 0 2.96-.37 4.05-.95v3.32a8.33 8.33 0 0 1-4.56 1.1c-4.01 0-6.83-2.5-6.83-7.48 0-4.19 2.39-7.52 6.3-7.52 3.92 0 5.96 3.28 5.96 7.5 0 .4-.04 1.26-.06 1.48zm-5.92-5.62c-1.03 0-2.17.73-2.17 2.58h4.25c0-1.85-1.07-2.58-2.08-2.58zM40.95 20.3c-1.44 0-2.32-.6-2.9-1.04l-.02 4.63-4.12.87V5.57h3.76l.08 1.02a4.7 4.7 0 0 1 3.23-1.29c2.9 0 5.62 2.6 5.62 7.4 0 5.23-2.7 7.6-5.65 7.6zM40 8.95c-.95 0-1.54.34-1.97.81l.02 6.12c.4.44.98.78 1.95.78 1.52 0 2.54-1.65 2.54-3.87 0-2.15-1.04-3.84-2.54-3.84zM28.24 5.57h4.13v14.44h-4.13V5.57zm0-4.7L32.37 0v3.36l-4.13.88V.88zm-4.32 9.35v9.79H19.8V5.57h3.7l.12 1.22c1-1.77 3.07-1.41 3.62-1.22v3.79c-.52-.17-2.29-.43-3.32.86zm-8.55 4.72c0 2.43 2.6 1.68 3.12 1.46v3.36c-.55.3-1.54.54-2.89.54a4.15 4.15 0 0 1-4.27-4.24l.01-13.17 4.02-.86v3.54h3.14V9.1h-3.13v5.85zm-4.91.7c0 2.97-2.31 4.66-5.73 4.66a11.2 11.2 0 0 1-4.46-.93v-3.93c1.38.75 3.1 1.31 4.46 1.31.92 0 1.53-.24 1.53-1C6.26 13.77 0 14.51 0 9.95 0 7.04 2.28 5.3 5.62 5.3c1.36 0 2.72.2 4.09.75v3.88a9.23 9.23 0 0 0-4.1-1.06c-.86 0-1.44.25-1.44.9 0 1.85 6.29.97 6.29 5.88z" fill-rule="evenodd"></path></svg>
           </li>
           <li>
           <div className='ct-btn'>
               <ul>
           <li><button  className='center-btn'>Products</button></li>
           <li><button className='center-btn'>Use cases</button></li>
           <li><button  className='center-btn'>Developers</button></li>
           <li><button  className='center-btn'>Company</button></li>
           <li><button className='center-btn'>pricing</button></li>
           </ul>
           </div>
           </li>
           <li><button className='signin-btn' style={{textAlign:"center",justifyContent:"middle",display:"flex",alignContent:'center',flexDirection:"row",paddingLeft:'1em'}}>Sign In <img src={arr} id='arr'  ></img></button></li>
           </ul>
       </div>
       <div className='mainimg'>
           <img src={s}></img>
           
       </div >
       <div className='graphs'>
       <div class="DashboardGraphic__sidebar">
           
    <svg width="20" height="20" viewBox="0 0 20 20"><path fill="#FFFFFF" d="M10 0a10 10 0 1 1 0 20 10 10 0 0 1 0-20zm3.3 6.11H4.34a.41.41 0 0 0 0 .83h8.94a2.89 2.89 0 0 1 0 5.77H7.65a.41.41 0 0 0 0 .83h5.64a3.71 3.71 0 0 0 0-7.43zm0 1.65a2.06 2.06 0 1 0 2.05 2.06c0-1.13-.92-2.06-2.06-2.06zm-2.83 3.3h-4.7a.41.41 0 0 0 0 .83h4.7a.41.41 0 0 0 0-.83zM13.3 8.6a1.24 1.24 0 1 1 0 2.47 1.24 1.24 0 0 1 0-2.47zm-3.3.8H3.41a.41.41 0 1 0 0 .83h6.6c.22 0 .4-.19.4-.42a.41.41 0 0 0-.41-.4zm.47-1.65H6.24a.41.41 0 1 0 0 .83h4.23a.41.41 0 1 0 0-.83z"></path></svg>
    Rocket Rides
    <br></br>
    <svg width="10" height="4" viewBox="0 0 10 4"><polyline fill="none" stroke="#FFF" points="1 0 5 4 9 0"></polyline></svg>
  </div>
       <img className='seimg' src={search}></img>
           <img  src={graphs}></img>
           
               </div>
       <div className='maintxt'>
           <p id='watch'>Watch now • Sessions, our virtual conference, is on demand <img src={arr} id='arr'  ></img>  </p>
           <h1>Payments </h1>
           <h1>Infrastructure</h1>
           <h1>for the internet</h1>
           <p>Millions of businesses of all sizes—from startups to large enterprises—use Stripe’s software and APIs to accept payments, send payouts, and manage their businesses</p>
       </div>
    </div>
  );
}

export default Homescreen;