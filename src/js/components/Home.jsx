import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap'; 

import NavigationBar from './NavBar.jsx';
import About from './About';
import Services from './Services';
import Contact from './Contact';
import Footer from './Footer';

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<Container id="home" className="text-center"> 
		<NavigationBar />
		<About />
		<Services />
		<Contact />
		<Footer />
	</Container>
			
	);
};

export default Home;