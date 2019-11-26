import '../css/style.css';
import '../css/bootstrap.css';
import Circles from '../js/circles';
class Home extends React.Component {
	
	componentDidMount(){
		let IonicCircle=new Circles({
			id:         "IonicCircle",
			percentage: 10,
			radius:     80,
			width:      10,
			number:   	10 / 1,
			text:       '%',
			colors:     ['#6ed4c0', '#ffffff']
		});
		let CAKEPHPCircle=new Circles({
			id:         "CAKEPHPCircle",
			percentage: 20,
			radius:     80,
			width:      10,
			number:   	20 / 1,
			text:       '%',
			colors:     ['#6ed4c0', '#ffffff']
		});
		let SpringCircle=new Circles({
			id:         "SpringCircle",
			percentage: 30,
			radius:     80,
			width:      10,
			number:   	30 / 1,
			text:       '%',
			colors:     ['#6ed4c0', '#ffffff']
		});
		let ReactCircle=new Circles({
			id:         "ReactCircle",
			percentage: 50,
			radius:     80,
			width:      10,
			number:   	50 / 1,
			text:       '%',
			colors:     ['#6ed4c0', '#ffffff']
		});
		let HTMLCircle=new Circles({
			id:         "HTMLCircle",
			percentage: 60,
			radius:     80,
			width:      10,
			number:   	60 / 1,
			text:       '%',
			colors:     ['#6ed4c0', '#ffffff']
		});
		let BootstrapCircle=new Circles({
			id:         "BootstrapCircle",
			percentage: 70,
			radius:     80,
			width:      10,
			number:   	70 / 1,
			text:       '%',
			colors:     ['#6ed4c0', '#ffffff']
		});
	}
    render (){
		return (
<React.Fragment>
<head>
	<title>Kashyap Ashara</title>
	{/* fonts */}
		<link href='http://fonts.googleapis.com/css?family=Raleway:400,100,200,300,500,600,700,800,900' rel='stylesheet' type='text/css'/>
		<link href='http://fonts.googleapis.com/css?family=Lato:100,300,400,700,900,100italic,300italic,400italic,700italic,900italic' rel='stylesheet' type='text/css'/>
	{/* <!--//fonts--> */}
		{/* <link href="../css/bootstrap.css" rel="stylesheet" type="text/css" media="all" /> */}
		{/* <link href="../css/style.css" rel="stylesheet" type="text/css" media="all" /> */}
	{/* <!-- for-mobile-apps --> */}
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
		<meta name="keywords" content="Kong Responsive web template, Bootstrap Web Templates, Flat Web Templates, Andriod Compatible web template, 
		Smartphone Compatible web template, free webdesigns for Nokia, Samsung, LG, SonyErricsson, Motorola web design" />
		{/* <script type="application/x-javascript"> addEventListener("load", function() { setTimeout(hideURLbar, 0); }, false); function hideURLbar(){ window.scrollTo(0,1); } </script> */}
	{/* <!-- //for-mobile-apps -->
	<!-- js --> */}
		<script type="text/javascript" src="js/jquery.min.js"></script>
	{/* <!-- js -->
	<!-- start-smooth-scrolling --> */}
		<script type="text/javascript" src="js/move-top.js"></script>
		<script type="text/javascript" src="js/easing.js"></script>
		{/* <script type="text/javascript">
			jQuery(document).ready(function($) {
				$(".scroll").click(function(event){		
					event.preventDefault();
					$('html,body').animate({scrollTop:$(this.hash).offset().top},1000);
				})
			});
		</script> */}
	{/* <!-- start-smooth-scrolling --> */}

</head>
<body>
{/* <!-- banner --> */}
<div className="banner" id="home">
	<div className="container"> 
		<div className="top-header row">
			<script src="js/classie.js"></script>
			{/* <!--top-nav----> */}
			{/* <!-- <div className="logo">
				<a href="index.html"><img src="images/logo.png" alt=""/></a>
			</div> --> */}
			<div className="top-nav">
				<div className="nav-icon">
					    <a href="#" className="right_bt" id="activator"><span> </span> </a>
				</div>
				<div className="box" id="box">
					<div className="box_content">        					                         
						<div className="box_content_center">
							<div className="form_content">
								<div className="menu_box_list">
									<ul>
										<li><a className="scroll" href="#home"><span>home</span></a></li>
										<li><a className="scroll" href="#education"><span>education</span></a></li>
										<li><a className="scroll" href="#services"><span>services</span></a></li>
										<li><a className="scroll" href="#contact"><span>Contact</span></a></li>
										<div className="clearfix"> </div>
									</ul>
								</div>
								<a className="boxclose" id="boxclose"> <span> </span></a>
							</div>                                  
						</div> 	
					</div> 
				</div>       	  
			</div>
			{/* <!--start-click-drop-down-menu-->
			        <!--start-dropdown--> */}
			         {/* <script type="text/javascript">
						var $ = jQuery.noConflict();
							$(function() {
								$('#activator').click(function(){
									$('#box').animate({'top':'0px'},900);
								});
								$('#boxclose').click(function(){
								$('#box').animate({'top':'-1000px'},900);
								});
							});
							$(document).ready(function(){
							//Hide (Collapse) the toggle containers on load
							$(".toggle_container").hide(); 
							//Switch the "Open" and "Close" state per click then slide up/down (depending on open/close state)
							$(".trigger").click(function(){
								$(this).toggleClass("active").next().slideToggle("slow");
									return false; //Prevent the browser jump to the link anchor
							});
												
						});
					</script> */}
			{/* <!--//End-click-drop-down-menu--> */}
			<div className="clearfix"> </div>
		</div>
		<div className="banner-info">
			<div className="banner-left" style={{width: "100%"}}>
				<img src="./images/bg-photo.jpg" alt="" style={{borderRadius: "350px", height: "30%"}}/>
			</div>
			<div className="banner-right" style={{width: "100%"}}>
				<h1>I’M KASHYAP ASHARA</h1>
				<div className="border"></div>
				<h2>SOFTWARE ENGINEER</h2>
				{/* <!-- <a href="#">DOWNLOAD MY RESUME</a> --> */}
			</div>
			<div className="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--/header-banner-->
<!--about--> */}
{/* <!-- <div className="about text-center" id="about">
	<div className="container">
		<h3>ABOUT ME</h3>
		<div className="strip text-center"><img src="images/about.png" alt=" "/></div>
		<p>Dyin' ain't much of a livin', boy. here. put that in your report!" and "i may have found 
		a way out of here. you want a guarantee, buy a toaster. here. put that in your report!" and 
		"i may have found a way out of here. this is the ak-47 assault rifle, the preferred weapon of 
		your enemy; and it makes a distinctive sound when fired at you, so remember it. this is the ak-47 
		assault rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at 
		you, so remember it. don't p!ss down my back and tell me it's raining. this is the ak-47 assault 
		rifle, the preferred weapon of your enemy; and it makes a distinctive sound when fired at you, 
		so remember it. don't p!ss down my back and tell me it's raining. this is my gun, clyde! man's 
		gotta know his limitations. ever notice how sometimes you come across somebody you shouldn't have 
		f**ked with? well, i'm that guy.</p>
	</div>
</div> --> */}
{/* <!--//about--> */}
{/* <!-- <div className="about-back"></div> -->
<!--my skill--> */}
<div className="my-skills text-center">
	<div className="container">
		<h3>MY SKILLS</h3>
		<div className="strip text-center"><img src="./images/skill.png" alt=" "/></div>
		<div className="skill-grids">
					<div className="col-md-2 skills-grid text-center">
						<div className="circle" id="IonicCircle"></div>
						<p>IONIC</p>
					</div>
					<div className="col-md-2 skills-grid text-center">
						<div className="circle" id="CAKEPHPCircle"></div>
						<p>CAKE PHP</p>
					</div>
					<div className="col-md-2 skills-grid text-center">
						<div className="circle" id="SpringCircle"></div>
						<p>Spring Boot</p>
					</div>
					<div className="col-md-2 skills-grid text-center">
						<div className="circle" id="ReactCircle"></div>
						<p>React Js</p>
					</div>
					<div className="col-md-2 skills-grid text-center">
						<div className="circle" id="HTMLCircle"></div>
						<p>Html 5 / CSS 3</p>
					</div>
					<div className="col-md-2 skills-grid text-center">
						<div className="circle" id="BootstrapCircle"></div>
						<p>Bootstrap</p>
					</div>
					<div className="clearfix"> </div>
				 {/* <script type="text/javascript" src="js/circles.js"></script> */}
					         {/* <script type="text/javascript">
								
								for (var i = 1; i <= 7; i++) {
									var child = document.getElementById('circles-' + i),
										percentage = 10 + (i * 10);
										
									
								}
						
                            </script> */}
		</div>
	</div>	
</div>
{/* <!--//my skill--> */}
<div className="my-skill-back"></div>
{/* <!--education--> */}
<div className="education text-center" id="education">
	<div className="container">
		<div className="edu-info">
			<h3>EDUCATION</h3>
		</div>
		<div className="strip text-center"><img src="./images/edu.png" alt=" "/></div>
		<div className="edu-grids">
			<div className="col-md-3 edu-grid">
				<p>2014 - 2016</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div className="edu-border">
					<div className="edu-grid-master">
						<h3>M. Sc. In INFORMATION TECHNOLOGY</h3>
						<h4>DA-IICT <br/>(GANDHINAGAR)</h4>
					</div>
					<div className="edu-grid-info">
						<h5><b>CPGA </b>: 6.13</h5>
					</div>
				</div>
			</div>
			<div className="col-md-3 edu-grid">
				<p>2011 - 2014</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div className="edu-border">
					<div className="edu-grid-master">
						<h3>BACHELOR OF COMPUTER APPLICATION</h3>
						<h4>H.L.I.C.A - AHMEDABAD UNIVERSITY</h4>
					</div>
					<div className="edu-grid-info">
						<h5><b>CPGA </b>: 7.22</h5>
					</div>
				</div>
			</div>
			<div className="col-md-3 edu-grid">
				<p>2010 - 2011</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div className="edu-border">
					<div className="edu-grid-master">
						<h3>12TH <br/>(H.S.C - GUJARAT BOARD)</h3>
						<h4>L. G. HARIA HIGH SCHOOL - JAMNAGAR</h4>
					</div>
					<div className="edu-grid-info">
						<h5><b>PERCENTAGE </b>: 71.47%</h5>
					</div>
				</div>
			</div>
			<div className="col-md-3 edu-grid">
				<p>2008 - 2009</p><span>Graduated</span>
				<img src="./images/arrow.png" alt=""/>
				<div className="edu-border">
					<div className="edu-grid-master">
						<h3>10TH <br/>(S.S.C. - GUJARAT BOARD)</h3>
						<h4>L. G. HARIA HIGH SCHOOL - JAMNAGAR</h4>
					</div>
					<div className="edu-grid-info">
						<h5><b>PERCENTAGE </b>: 74.15%</h5>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
	</div>
	
</div>
{/* <!--//education--> */}
<div className="strip-border"><p></p></div>
{/* <!--work--> */}
<div className="work-experience text-center">
	
	<div className="container">
		<div className="work-info">
			<h3>EXPERIENCE / PROJECTS</h3>
		</div>
		<div className="strip text-center"><img src="./images/work.png" alt=" "/></div>
		<div className="work-grids">
			<div className="col-md-12 w-grid">
				<div className="work-grid">
					<h3>Aug, 2015 - Nov, 2015</h3>
					<div className="work-grid-info">
						<h4>TRANSPORT-IT</h4>
						<h5>UI DEVELOPER, FRONTEND DEVELOPER</h5>
						<p>Transport IT is a platform, that will enable you to book trucks and tempos for your goods transportation. We aim at building high services for the users and truck service providers. Our main aim is to make users life easy by providing quick transport access and also to enhance productivity of service provider.</p>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
		<div className="work-grids">
			<div className="col-md-12 w-grid">
				<div className="work-grid">
					<h3>June, 2014 - Sep, 2014</h3>
					<div className="work-grid-info">
						<h4>DATABASE OF ONLINE CHAT APPLICATION</h4>
						<h5>DATABASE DESIGNER</h5>
						<p>The Database that give you facility to record every details of Chat application in Perfect Manner so any one can do dynamic programming using our database. We had use PostgreSQL for making Tables, views, Trigger, Procedures.</p>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
		<div className="work-grids">	
			<div className="col-md-12 w-grid">
				<div className="work-grid">
					<h3>May, 15 - Now</h3>
					<div className="work-grid-info">
						<h4>E-VIDYALAY EDUCATION SITE</h4>
						<h5>UI DEVELOPER, CORE DEVELOPER</h5>
						<p>Worked on developing e-learning based website for E-Vidyalay in Gujarati Language. In which I contribute as a UI developer for the website and even as Core Developer for developing the Website.</p>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
		<div className="work-grids">
			<div className="col-md-12 w-grid">
				<div className="work-grid">
					<h3>4th Jan 2016 – 15th Jan 2016</h3>
					<div className="work-grid-info">
						<h4>WHITEPANDA</h4>
						<h5>WEB DEVELOPER</h5>
						<p>Worked on Content Writing Management System I am Contributing as a Core Developer for the System. Created the Backend of the Website in CakePhp. Also Created the new Database Design according to the requirements. </p>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//work--> */}
<div className="services-back"></div>

{/* <!--services--> */}
<div className="services text-center" id="services">
	<div className="container">
		<div className="ser-info">
			<h3>SERVICES</h3>
		</div>
		<div className="strip text-center"><img src="./images/ser.png" alt=" "/></div>
		<div className="ser-grids">
			<div className="col-md-6 ser-grid">
				<div className="ser-imagea"></div>
				<h3>Web Design</h3>
				{/* <!-- <p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p> --> */}
			</div>
			{/* <!-- <div className="col-md-3 ser-grid">
				<div className="ser-imageb"></div>
				<h3>Graphic Design</h3>
				<p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p>
			</div> --> */}
			{/* <!-- <div className="col-md-3 ser-grid">
				<div className="ser-imagec"></div>
				<h3>Content Writer</h3>
				<p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p>
			</div> --> */}
			<div className="col-md-6 ser-grid">
				<div className="ser-imaged"></div>
				<h3>APP Development</h3>
				{/* <!-- <p>I'm gonna shoot you in the head
				then and there. Then I'm gonna shoot 
				that bitch in the kneecaps.</p> --> */}
			</div>
			<div className="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//services--> */}
{/* <!--portfolio--> */}
{/* <!-- <div className="gallery-section text-center" id="portfolio">
	<div className="container">
		<h3>PORTFOLIO</h3>
		<div className="strip text-center"><img src="images/port.png" alt=" "/></div>
		<p>You think water moves fast? You should see ice. It moves like it has a mind. 
		Like it knows it killed the world once and got a taste for murder. After the avalanche, 
		it took us a week to climb out. Now, I don't know exactly when we turned on each other, 
		but I know that seven of us survived the slide and only five made it out. Now we took an 
		oath, that I'm breaking now. We said we'd say it was the snow that killed the other two, 
		but it wasn't. Nature is lethal but it doesn't hold a candle to man.</p>
		<div className="gallery-grids">
			<div className="top-gallery">
				<div className="col-md-4 gallery-grid gallery1">
					<a href="images/p1.jpg" className="swipebox"><img src="images/p1.jpg" className="img-responsive" alt="/">
						<div className="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div className="button"><a href="images/p1.jpg" className="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>	
				<div className="col-md-4 gallery-grid gallery1">
					<a href="images/p2.jpg" className="swipebox"><img src="images/p2.jpg" className="img-responsive" alt="/">
						<div className="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div className="button"><a href="images/p2.jpg" className="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div className="col-md-4 gallery-grid gallery1">
					<a href="images/p3.jpg" className="swipebox"><img src="images/p3.jpg" className="img-responsive" alt="/">
						<div className="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div className="button"><a href="images/p3.jpg" className="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div className="col-md-4 gallery-grid gallery1">
					<a href="images/p4.jpg" className="swipebox"><img src="images/p4.jpg" className="img-responsive" alt="/">
						<div className="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div className="button"><a href="images/p4.jpg" className="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div className="col-md-4 gallery-grid gallery1">
					<a href="images/p5.jpg" className="swipebox"><img src="images/p5.jpg" className="img-responsive" alt="/">
						<div className="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div className="button"><a href="images/p5.jpg" className="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div className="col-md-4 gallery-grid gallery1">
					<a href="images/p6.jpg" className="swipebox"><img src="images/p6.jpg" className="img-responsive" alt="/">
						<div className="textbox">
							<h4>Project Name</h4>
							<p>WEB DESIGN</p>
							<div className="button"><a href="images/p6.jpg" className="swipebox">VIEW</a></div>
						</div>
					</a>
				</div>
				<div className="clearfix"> </div>
			</div>
				<link rel="stylesheet" href="css/swipebox.css">
				<script src="js/jquery.swipebox.min.js"></script> 
					<script type="text/javascript">
						jQuery(function($) {
							$(".swipebox").swipebox();
						});
					</script>
		</div>
	</div>
</div> --> */}
{/* <!--//portfolio-->
<!--process--> */}
<div className="process text-center">
	<div className="container">
		<h3>PROCESS</h3>
		<div className="strip text-center"><img src="./images/pro.png" alt=" "/></div>
		<div className="process-girds">
			<div className="col-md-2 process-pad">
				<div className="process-gird">
					<div className="process-imagea"></div>
					<p>IDEA</p>
					<img src="./images/6.png" alt=""/>
				</div>
			</div>
			<div className="col-md-2 process-pad">
				<div className="process-gird">
					<div className="process-imageb"></div>
					<p>CONCEPT</p>
					<img className="pro-imga" src="./images/6.png" alt=""/>
				</div>
			</div>
			<div className="col-md-2 process-pad">
				<div className="process-gird">
					<div className="process-imagec"></div>
					<p>DESIGN</p>
					<img className="pro-img" src="./images/6.png" alt=""/>
				</div>
			</div>
			<div className="col-md-2 process-pad">
				<div className="process-gird">
					<div className="process-imaged"></div>
					<p>DEVELOP</p>
					<img className="pro-imgb" src="./images/6.png" alt=""/>
				</div>
			</div>
			<div className="col-md-2 process-pad">
				<div className="process-gird">
					<div className="process-imagee"></div>
					<p>TEST</p>
					<img src="./images/6.png" alt=""/>
				</div>
			</div>
			<div className="col-md-2 process-pad">
				<div className="process-gird">
					<div className="process-imagef"></div>
					<p>LAUNCH</p>
					
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//process-->
<!-- <div className="process-back"></div> -->
<!--testimonials--> */}
{/* <!-- <div className="testimonials" id="testimonial">
	<div className="container">
		<h3>TESTIMONIAL</h3>
		<div className="strip text-center"><img src="images/test.png" alt=" "/></div> --> */}
			{/* <!-- responsiveslides --> */}
					{/* <script src="js/responsiveslides.min.js"></script>
						<script>
							// You can also use "$(window).load(function() {"
							// $(function () {
							//  // Slideshow 4
							// $("#slider3").responsiveSlides({
							// 	auto: true,
							// 	pager: false,
							// 	nav: true,
							// 	speed: 500,
							// 	namespace: "callbacks",
							// 	before: function () {
							// $('.events').append("<li>before event fired.</li>");
							// },
							// after: function () {
							// 	$('.events').append("<li>after event fired.</li>");
							// 	}
							// 	});
							// 	});
						</script> */}
			{/* <!-- responsiveslides --> */}
			{/* <!-- <div  id="top" className="callbacks_container">
					<ul className="rslides" id="slider3">
						<li>
							<div className="test-banner">
								<img className="quoa" src="images/quo2.png" alt=""/>
								<div className="test-left">
									<img src="images/7.png" alt=""/>
								</div>
								<div className="test-right">
									<p>However unreal it may seem, we are connected, 
									you and I. We're on the same curve, just on opposite ends.</p>
									<h4>Sam L. J. - Pulp Fiction</h4>
								</div>
								<div className="clearfix"></div>
								<img className="quo" src="images/quo1.png" alt=""/>
							</div>
						</li>
						<li>
							<div className="test-banner">
								<img className="quoa" src="images/quo2.png" alt=""/>
								<div className="test-left">
									<img src="images/eee.png" alt=""/>
								</div>
								<div className="test-right">
									<p>However unreal it may seem, we are connected, 
									you and I. We're on the same curve, just on opposite ends.</p>
									<h4>Sam L. J. - Pulp Fiction</h4>
								</div>
								<div className="clearfix"></div>
								<img className="quo" src="images/quo1.png" alt=""/>
							</div>
						</li>
					</ul>
			</div>		 */}
	{/* </div>
</div> --> */}
{/* <!--testimonials-->
<!--clients--> */}
{/* <!-- <div className="clients text-center">
	<div className="container">
		<h4>Clients</h4>
		<div className="strip-line"></div>
		<div className="client-grids">
			<div className="col-md-4 cl-grid">
				<div className="client-grid">
					<img src="images/10.png" alt=""/>
				</div>
			</div>
			<div className="col-md-4 cl-grid">
				<div className="client-grid">
					<img src="images/11.png" alt=""/>
				</div>
			</div>
			<div className="col-md-4 cl-grid">
				<div className="client-grid">
					<img src="images/12.png" alt=""/>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
	</div>
</div> --> */}
{/* <!--clients--> */}
{/* <!-- <div className="client-back"></div> --> */}
{/* <!--blog--> */}
{/* <!-- <div className="blog" id="blog">
	<div className="container">
		<div className="blog-info text-center">
			<h3>BLOG</h3>
			<div className="strip text-center"><img src="images/blog.png" alt=" "/></div>
		</div>
		<div className="blog-grids">
			<div className="col-md-4 blog-text-info">
				<div className="blog-grid">
					<a href="single.html"><img src="images/a.jpg" alt=""/></a>
					<div className="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div className="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div className="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>	
					<div className="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div className="col-md-4 blog-text-info">
				<div className="blog-grid">
					<a href="single.html"><img src="images/b.jpg" alt=""/></a>
					<div className="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div className="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div className="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div className="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div className="col-md-4 blog-text-info">
				<div className="blog-grid">
					<a href="single.html"><img src="images/c.jpg" alt=""/></a>
					<div className="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div className="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div className="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div className="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div className="col-md-4 blog-text-info">
				<div className="blog-grid">
					<a href="single.html"><img src="images/a.jpg" alt=""/></a>
					<div className="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div className="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div className="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div className="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div className="col-md-4 blog-text-info">
				<div className="blog-grid">
					<a href="single.html"><img src="images/b.jpg" alt=""/></a>
					<div className="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div className="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div className="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div className="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div className="col-md-4 blog-text-info">
				<div className="blog-grid">
					<a href="single.html"><img src="images/c.jpg" alt=""/></a>
					<div className="blog-text">
						<a href="single.html">Nature is lethal but it doesn't hold a candle to man.</a>
						<div className="stripa"></div>
						<p>Your bones don't break, mine do. That's clear. Your cells react to bacteria 
						and viruses differently than mine. You don't get sick, I do.</p>
					</div>
				
					<div className="blog-para">
							<ul>
								<li><a href="#">3 Comments</a></li>
								<li><a href="#">8 Share</a></li>
							</ul>
					</div>
					<div className="blog-pos">
						<p>5<span>May</span></p>
					</div>
				</div>
			</div>
			<div className="clearfix"></div>
		</div>
	</div>
</div> --> */}
{/* <!--//blog--> */}
<div className="contact-back"></div>
{/* <!--contact--> */}
<div className="contact" id="contact">
	<div className="container">
		<div className="contact-info text-center">
			<h3>CONTACT</h3>
			<div className="strip text-center"><img src="./images/con1.png" alt=" "/></div>
		</div>
		<div className="contact-grids">
			<div className="col-md-12 about text-center">
				<h3>Say Hi to Me</h3>
				<div className="stripb"></div>
				<ul>
					<li>Call me on:</li>
					<li><b>+91 95581 55635</b></li>
					<br/>
					<li>Email me:</li>
					<li><b><a href="mailto:kashyap.dj9350@gmail.com">kashyap.dj9350@gmail.com</a></b></li>
				</ul>
				<ul>
					<li><a className="fb" href="https://www.facebook.com/kashyap.ashara"></a></li>
					<li><a className="twit" href="https://twitter.com/asharakashyap"></a></li>
					<li><a className="in" href="https://www.linkedin.com/in/kash9350"></a></li>
					{/* <!-- <li><a className="drib" href="#"></a></li> --> */}
					<li><a className="goog" href="https://plus.google.com/u/0/110582429209385754541"></a></li>
					{/* <!-- <li><a className="pin" href="#"></a></li> --> */}
				</ul>
			</div>
			{/* <!-- <div className="col-md-7 contact-right">
				<h3>Drop Me A Line</h3>
				<div className="stripb"></div>
				<form>
					<input type="text" value="Name" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Name';}" required="">
					<input type="text" value="E-mail" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'E-mail';}" required="">
					<textarea type="text" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Message';}" required="">Message</textarea>
					<input type="submit" value="SEND">
				</form>
			</div> --> */}
			<div className="clearfix"></div>
		</div>
	</div>
</div>
{/* <!--//contact--> */}
<div className="footer-top"></div>
{/* <!--resume-->
<!-- <div className="resume text-center">
	<div className="container">
		<div className="strip text-center"><a href="#"><img src="images/down.png" alt=" "/></a></div>
		<div className="down"><a href="#">Download My Resume</a></div>
	</div>
</div> -->
<!--//resume-->

<!--footer--> */}
<div className="footer">
	{/* <!-- <div className="container">
		<p>Copyright &copy; 2015 Kong. Template by <a href="http://w3layouts.com/"> W3layouts</a></p>
	</div> --> */}
</div>
{/* <!--//footer-->
<!-- here stars scrolling icon --> */}
	{/* <script type="text/javascript">
		$(document).ready(function() {
			/*
				var defaults = {
				containerID: 'toTop', // fading element id
				containerHoverID: 'toTopHover', // fading element hover id
				scrollSpeed: 1200,
				easingType: 'linear' 
				};
			
								
			$().UItoTop({ easingType: 'easeOutQuart' });
								
			});
	</script> */}
{/* <!-- //here ends scrolling icon --> */}
</body>
</React.Fragment>
    )
  }
}
  
  export default Home