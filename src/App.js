import logo from './image/asset 0.svg';
import flogo from './image/asset 33.svg';
import video from './image/v1.mp4';
import design from './image/v2.mp4';
import cprog from './image/v3.mp4';
import trendy from './image/v4.mp4';
import civil from './image/v5.mp4';
import develop from './image/v6.mp4';
import './App.css';

function App() {
  return (
    <div class="main-section">
      <div class="nav-bar">
          <div class="container flex justify-content">
          <div class="left flex">
            <div class="mail">
              <img src={require('./image/gmail.png')}></img>
              <span>info@cdmi.in</span>
            </div>
            <div class="certi">
              <img src={require('./image/certi.webp')}></img>
              <span> Verify Certificate</span>
            </div>
          </div>
          <div class="middle">
            <span>have any question ? +91 90333 16003</span>
          </div>
          <div class="right">
            <img src={require('./image/facebook.png')}></img>
            <img src={require('./image/instagram.png')}></img>
            <img src={require('./image/google-plus.png')}></img>
            <img src={require('./image/linked-in.png')}></img>
            <img src={require('./image/twitter.png')}></img>
            <img src={require('./image/youtube.jpg')}></img>
            <img src={require('./image/wtsp.png')}></img>
          </div>
          </div>
        </div>
      <div class="container">
        <div class="header">
          <header class="flex justify-content">
            <div class="logo">
              <img src={logo}></img>
            </div>
            <div class="navigation">
              <div class="main-menu flex align-item">
                <li><a href="#" class="active">home</a></li>
                <li><a href="#">courses</a></li>
                <li><a href="#">college cources</a></li>
                <li><a href="#">activities</a></li>
                <li><a href="#">blog</a></li>
                <li><a href="#">known as</a></li>
                <li><a href="#">get in touch</a></li>
                <li><a href="#">student zone</a></li>
              </div>
            </div>
          </header>
        </div>
      </div>
      <div class="section">
        <section class="slider-image">
          <img src={require('./image/asset 8.jpeg')}></img>
        </section>
      </div>
      <div class="container">
        <div class="section-heading">
          <section class="heading-part">
            <span class="sub-heading">Creative Course</span>
            <h2>Offered Courses</h2>
          </section>
        </div>
        <div class="content">
          <div class="content-image">
            <div class="top flex justify-content">
              <div class="shadow br-10px">
                <video src={video} autoPlay muted loop={20}></video>
                <div class="content_desc">
                  <h4 class="content_title">
                    <a href="#">Multimedia Courses</a>
                  </h4>
                </div>
                <div class="content_footer">
                  <div class="price">
                    <a href="#" class="btn btn-theme-blue bg-theme-blue  btn-sm text-white">know more..!</a>
                  </div>
                </div>
              </div>
              <div class="shadow br-10px">
                <video src={design} autoPlay muted loop={20}></video>
                <div class="content_desc">
                  <h4 class="content_title">
                    <a href="#">Multimedia Courses</a>
                  </h4>
                </div>
                <div class="content_footer">
                  <div class="price">
                    <a href="#" class="btn btn-theme-blue bg-theme-blue  btn-sm text-white">know more..!</a>
                  </div>
                </div>
              </div>
              <div class="shadow br-10px">
              <video src={cprog} autoPlay muted loop={20}></video>
                <div class="content_desc">
                  <h4 class="content_title">
                    <a href="#">Multimedia Courses</a>
                  </h4>
                </div>
                <div class="content_footer">
                  <div class="price">
                    <a href="#" class="btn btn-theme-blue bg-theme-blue  btn-sm text-white">know more..!</a>
                  </div>
                </div>
              </div>
            </div>
            <div class="bottom flex justify-content">
              <div class="shadow br-10px">
                <video src={trendy} autoPlay muted loop={20}></video>
                <div class="content_desc">
                  <h4 class="content_title">
                    <a href="#">Multimedia Courses</a>
                  </h4>
                </div>
                <div class="content_footer">
                  <div class="price">
                    <a href="#" class="btn btn-theme-blue bg-theme-blue  btn-sm text-white">know more..!</a>
                  </div>
                </div>
              </div>
              <div class="shadow br-10px">
                <video src={civil} autoPlay muted loop={20}></video>
                <div class="content_desc">
                  <h4 class="content_title">
                    <a href="#">Multimedia Courses</a>
                  </h4>
                </div>
                <div class="content_footer">
                  <div class="price">
                    <a href="#" class="btn btn-theme-blue bg-theme-blue  btn-sm text-white">know more..!</a>
                  </div>
                </div>
              </div>
              <div class="shadow br-10px">
                <video src={develop} autoPlay muted loop={20}></video>
                <div class="content_desc">
                  <h4 class="content_title">
                    <a href="#">Multimedia Courses</a>
                  </h4>
                </div>
                <div class="content_footer">
                  <div class="price">
                    <a href="#" class="btn btn-theme-blue bg-theme-blue  btn-sm text-white">know more..!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="container">
        <div class="hgt-50px"></div>
        <div class="source">
          <span>
            <a href="#" class="btn btn-default">View All Courses 	<span class="larw">&#8594;</span></a>
          </span>
        </div>
        <div class="hgt-100px"></div>
      </div>
      <section class="enroll flex">
        <div class="enroll-left">
          <div class="box_shadow1 bg-white overlap_section padding_eight_all ">
          <div class="heading_s1"> 
            <span class="sub_heading">About Us</span>
            <h6>IT Career in Surat, moving towards the better Tomorrow!</h6>
          </div>
          <p class="text-justify pr-4">
            Creative Design &amp; Multimedia Institute(CDMI)  is a reputed training institute in Surat for web design, Game design,Mobile App Development, Game Development ,Video Editing &amp; All types of IT Courses with 8 years of full-fledged, result-oriented training experience. We stepped in the market in 2014 with the goal to help students, working professionals and other interested candidates get that dream job or open that desired freelance business in some of the most popular Computer / IT fields. Our aim is to ease the hiring process for businesses and organizations by providing work-ready professionals who can contribute greatly to their success. Since then, we have worked hard to achieve this goal and dedicated our time and resources to train students extensively.
          </p>
          <span class="enroll-btn">
            <a href="#" class="btn btn-default">enroll now..!<span class="larw">&#8594;</span></a>
          </span>
          </div>
        </div>
        <div class="enroll-right bg-layer">
          <img src={require('./image/asset 11.jpeg')}></img>
          <div class="video">
            <img src={require('./image/video.jpg')}></img>
          </div>
        </div>
      </section>
      <section class="parallex">
        <div class="parallex-image"></div>
        <div class="parallex-content">
          <div class="icon"></div>
        </div>
      </section>
      <section class="testimonial">
        <div class="container flex">
          <div class="testimonial-left">
            <div class="heading_s1">
              <span class="sub_heading">HAPPY STUDENTS</span>
              <h2>ALUMNI SPEAK</h2>
            </div>
            <div class="space"></div>
            <div class="testimonial-box">
              <p class="justify-content">
                I really enjoyed learning Game Development at Creative Design and Multimedia Institute(CDMI). The faculties here helped me gain knowledge and guided me to improve my skills. The Placement department and management made sure that all the students got placed in good jobs. Thanks to Creative Design and Multimedia Institute(CDMI). 
              </p>
            </div>
            <div class="testimonial-image">
              <div class="image">
                <img src={require('./image/asset 12.jpeg')}></img>
              </div>
              <div class="testi_user">
                <h6 class="mb-1 font-theme-blue">Raj Patel</h6>
                <span class="text_default text-capitalize">Android Developer </span>
                <span> 	&#x40; </span> 
                <span class="text-muted text-capitalize">Diversity Infotech</span>
              </div>
            </div>
          </div>
          <div class="testimonial-right">
            <div class="testimonial-shape">
              <img src={require('./image/asset 22.png')}></img>
            </div>
          </div>
        </div>
      </section>
      <section class="support">
        <div class="container">
          <div class="heading_s1 text-center">
            <span class="sub_heading">Read our difference</span>
            <h2>Why Choose creative</h2>
          </div>
          <div class="icon-box">
            <div class="icon-box-top flex margin">
              <div class="intro-desc one box_shadow2">
                <h5 class="text-capitalize">Industry experts as Trainers</h5>
                <p>Our trainers have 5+ years of industry experience coupled with extensive research and analysis.</p>
              </div>
              <div class="intro-desc two box_shadow2">
                <h5 class="text-capitalize">Latest Curriculum</h5>
                <p>We Provides latest curriculum for all courses which designed in such a way that Students will get full knowledge within a short time.</p>
              </div>
              <div class="intro-desc three box_shadow2">
                <h5 class="text-capitalize">Latest Technology</h5>
                <p>We strive to let you have a solid foundational knowledge of technologies shaping the IT World today.</p>
              </div>
            </div>
            <div class="icon-box-bottom flex margin">
              <div class="intro-desc one box_shadow2">
                <h5 class="text-capitalize">Interview Assistance</h5>
                <p>At the end of each training,our training instructor will go through the possible technical questions you may be asked.</p>
              </div>
              <div class="intro-desc two box_shadow2">
                <h5 class="text-capitalize">Free Upgradation</h5>
                <p>We will be provided free upgradation for any newer version of the course you have.</p>
              </div>
              <div class="intro-desc three box_shadow2">
                <h5 class="text-capitalize">Lifetime Support</h5>
                <p>We will provide you lifetime support on all the courses you learned from us.45</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section class="partner">
        <div class="container">
          <div class="heading_s1 text-center">
            <span class="sub_heading">Creative Course</span>
            <h2>Offered Courses</h2>
          </div>
          <div class="company flex justify-content">
            <div class="com-1">
              <img src={require('./image/asset 26.png')}></img>
            </div>
            <div class="com-2">
              <img src={require('./image/asset 27.png')}></img>
            </div>
            <div class="com-3">
              <img src={require('./image/asset 28.png')}></img>
            </div>
            <div class="com-4">
              <img src={require('./image/asset 29.png')}></img>
            </div>
            <div class="com-5">
              <img src={require('./image/asset 30.png')}></img>
            </div>
            <div class="com-6">
              <img src={require('./image/asset 31.png')}></img>
            </div>
          </div>
        </div>
      </section>
      <section class="ftr">
        <div class="container">
          <div class="footer">
            <h5 class="widget_title d-inline-block">Our Demanded Course - </h5>
            <div class="tags foot-tags hide-foot-tags">
              <a href="#" class="text-capitalize">flutter training institute in varachha</a>
              <a href="#" class="text-capitalize">coreldraw training institute in varachha</a>
              <a href="#" class="text-capitalize">Best Photoshop training institute</a>
              <a href="#" class="text-capitalize">game development training institute</a>
              <a href="#" class="text-capitalize">game design class in adajan</a>
              <a href="#" class="text-capitalize">Tally training institute in surat</a>
              <a href="#" class="text-capitalize">Maya animation course</a>
              <a href="#" class="text-capitalize">Latest technology course training institute in varachha</a>
              <a href="#" class="text-capitalize">Best solidworks training institute</a>
              <a href="#" class="text-capitalize">Video editing training institute</a>
              <a href="#" class="text-capitalize">Android training course institute</a>
              <a href="#" class="text-capitalize">Web design training institute in katargam</a>
            </div>
            <div class="show">
              <a href="#">show more</a>
            </div>
          </div>
        </div>
      </section>
      <footer class="bg-theme pt-100">
        <div class="container flex">
          <div class="footer-left">
            <div class="footer-left-logo">
              <img src={flogo}></img>
            </div>
            <div class="footer-content">
              <p class="text-justify">Creative Design and Multimedia Institute is leading computer training institute in surat. We offers government approved computer training courses in Surat.</p>
              <h6 class="widget_title font-theme-yellow pt-3">Follow Us On</h6>
              <ul class="footer-icon-image">
                <img src={require('./image/facebook.png')}></img>
                <img src={require('./image/instagram.png')}></img>
                <img src={require('./image/google-plus.png')}></img>
                <img src={require('./image/linked-in.png')}></img>
                <img src={require('./image/twitter.png')}></img>
                <img src={require('./image/youtube.jpg')}></img>
                <img src={require('./image/wtsp.png')}></img>
              </ul>
            </div>
          </div>
          <div class="footer-right flex">
            <div class="feature">
              <h6 class="widget_title">Feature Links</h6>
              <ul class="widget_links">
                <li>About Us</li>
                <li>Blogs</li>
                <li>Join Us</li>
                <li>Company Login</li>
                <li>Certificate Verification</li>
              </ul>
            </div>
            <div class="trendy-course">
              <h6 class="widget_title">trendy courses</h6>
              <ul class="widget_links">
                <li>Python course training</li>
                <li>Node JS course training</li>
                <li>Angular JS course training</li>
                <li>React JS course training</li>
                <li>Unity 3D course training</li>
                <li>Ethical Hacking course training</li>
                <li>React Native course training</li>
                <li>Desktop App Development course training</li>
                <li>Advanced ASP.net development course training</li>
              </ul>
            </div>
            <div class="address">
              <h6 class="widget_title">our branches</h6>
              <div class="address-nested">
                <h6 class="widget_title">head-office yogichowk</h6>
                <p>401-404, 4th Floor, City Center Complex, Nr. Yogichowk, Varachha, Surat<br></br> Mo : <span class="c-yellow">+91 90333 16003</span></p>
                <h6 class="widget_title">branch1-katargam</h6>
                <p>327-334, 3rd Floor, Laxmi Enclave, Opp. Gajera School, Katargam, Surat <br></br>Mo :<span class="c-yellow">+91 90 3333 5009</span></p>
                <h6 class="widget_title">branch2-mota varachha</h6>
                <p>B 201-203, 2nd Floor, Aditya Complex, VIP Circle, Utran Mota Varachha,Surat<br></br> Mo :<span class="c-yellow">+91 90333 16003,</span></p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div class="copy">
      <div class="bottom_footer">
        <div class="container">
            <div class="row align-items-center">
              <p class="copyright m-md-0 text-center text-md-left">© 2022 All Rights Reserved by Creative Design &amp; Multimedia Institute.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;