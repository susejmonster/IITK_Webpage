import React, { FC } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Toast from 'react-bootstrap/Toast';
import Accordion from 'react-bootstrap/Accordion';
import Carousel from 'react-bootstrap/Carousel';
import './ResearchPublications.css';

import iitk1 from './Images/iitk1.jpg';
import iitk2 from './Images/iitk2.jpg';
import iitk3 from './Images/iitk3.jpg';


const ResearchPublications: FC = () => {
  return (
    <Container fluid className="RP-container ">
      <Row >
        {/* Left Column: Toasts */}
        <Col md={6} className="RP-col">
           <Accordion className ="accordion-container">
      <Accordion.Item className = "accordion" eventKey="0">
        <Accordion.Header>Journal Publications list</Accordion.Header>
        <Accordion.Body>
         S. A. Qasim and N. Gupta, "Computation of Effective Properties of Graded and Layered Dielectrics," IEEE Transactions on Dielectrics and Electrical Insulation, vol. 28, no. 2, pp. 460-467, April 2021
Romana Zafar and Nandini Gupta, Estimation of Interface properties in epoxy-based Barium Titanate Nanocomposites,2021 Journal of Physics Communications IOP Science(in press).
Romana Zafar and Nandini Gupta, "Time-domain characterisation of epoxy-based barium titanate nanocomposites", IET Nanodielectrics, v4n1, p1-10, https://doi.org/10.1049/nde2.12002(2021)
A Sharma, S Basu, N Gupta, Detection of charge around a nanoparticle in a nanocomposite using electrostatic force microscopy, ,IEEE Transactions on Dielectrics and Electrical Insulation 27 (3), 866-872, 2020.
Asha Sharma; Sumit Basu; Nandini Gupta, Title: Investigation of the Interface in Nanodielectrics using Electrostatic Force Microscopy, IEEE Transactions on Dielectrics and Electrical Insulation, IEEE Transactions on Dielectrics and Electrical Insulation 27 (2), 433-441, 2020.
Romana Zafar, Nandini Gupta, Dielectric characterisation of epoxy nanocomposite with barium titanate fillers, IET Nanodielectrics, Volume 3, Issue 2, 2020 , p. 53 – 61, 2020.
Zafar, R., & Gupta, N. (2020). Dielectric spectroscopy of epoxy-based barium titanate nanocomposites: effect of temperature and humidity. IET Nanodielectrics, 3(1), 20-27. of temperature and humidity. IET Nanodielectrics, 3(1), 20-27, 2020.
Qasim, Syed Abdullah, and Nandini Gupta. "Comparison of the dielectric properties of functionally graded material dielectrics and layered dielectrics used for electric stress control." IET Science, Measurement & Technology 14 (4), 471-477, 2020.
Qasim, Syed Abdullah, and Nandini Gupta, : 2D spatial optimisation of functionally graded materials used as insulators for field stress control, IET Science, Measurement & Technology,V13, n 8, 1203-1211,2019.
JC Pandey, Nandini Gupta, Study of treeing in epoxy-alumina nanocomposites using electroluminescence, IEEE Transactions on Dielectrics and Electrical Insulation,V26, n2, 648-654, 2019.
J C Pandey and N Gupta, Charge behavior at interfaces involving nanocomposites, IEEE Transactions on Dielectrics and Electrical Insulation V2 5 n 1,pp 73-83, Feb 2018.
E Kasinathan, A Mahajan, N Gupta, Phase resolved PD patterns in treeing in the presence of voids, Journal of Electrostatics 87, pp45-50, 2017.
Thomas, A. J., Gupta, N. (2017). Dielectric properties of silicone rubber based composites with nano-sized fillers. Power Research, 13(1), 85-90.
J C Pandey and N Gupta , Estimation of Interphase Thickness in Epoxy-Based Nanocomposites, IEEE Transactions on Dielectrics and Electrical Insulation, Vol. 23, Issue 5, pp. 2747-2756, October 2016.
S Das and N Gupta, Effect of ageing on space charge distribution in homogeneous and composite dielectrics, IEEE Transactions on Dielectrics and Electrical Insulation, v 22, n 1, p 541-7, Feb. 2015.
Supriyo Das and Nandini Gupta , Charge trapping and transport phenomenon in aged and unaged epoxy resin and polyethylene, International Transactions on Electrical Energy Systems, Volume 25, Issue 6, June 2015, Pages: 948–957.
S Das and N Gupta, Interfacial charge behaviour at dielectric-dielectric interfaces, Dielectrics and Electrical Insulation, IEEE Transactions on DEIS 21 (3), 1302-1311. 2014.
R .R. Patel, Nandini Gupta and Sumit Basu , “A quantitative method for characterizing dispersion in nanocomposites” , Journal of Nanostructured Polymers and Nanocomposites 9(4):108-113 · January 2014
R R Patel and Nandini Gupta, Effect of humidity on the complex permittivity of epoxy‐based nanodielectrics with metal oxide fillers, International Transactions on Electrical Energy Systems 23 (6), 846-852, 2013.
P Maity , Nandini Gupta, V Parameswaran, S Basu , “On the Size and Dielectric Properties of the Interphase in Epoxy-alumina Nanocomposite” , IEEE Transactions on Dielectrics and Electrical Insulation,, 17 (6): 1665-1675, December 2010.
Alireza A Ganjovi, Nandini Gupta, Gorur R Govinda Raju, “A kinetic model of a PD pulse within narrow dielectric channels,”IEEE Transactions on Dielectrics and Electrical Insulation, Vol. 16, Issue 6, pp. 1743-1754, December 2009.
Parimal Maity, P K Poovamma, S Basu, V Parameswaran, Nandini Gupta, “Dielectric Spectroscopy Measurements of Epoxy Resin with and without Nanometric Alumina Fillers”, IEEE Transactions on Dielectrics and Electrical Insulation, Vol. 16, Issue 5, pp. 1481-1488, October 2009.
Alireza A. Ganjovi and Nandini Gupta, “Parametric investigation of stationary plasma thruster performance”, Electrical Engineering: Volume 90, Issue8 (2009),Page551.
Parimal Maity and Nandini Gupta, “Role of the interface in improving surface degradation properties of epoxy nanocomposites”, The Journal of CPRI, v4 n2 (2008) 179-184 (invited paper).
Parimal Maity, Sumit Basu, Venkitanarayanan Parameswaran and Nandini Gupta, “Surface Degradation Studies in Polymer Dielectrics with Nano-sized Fillers”, IEEE Trans. on Dielectric and Electric Insulation, Vol. 15, No. 1, pp. 52-62, February 2008.
Parimal Maity, S. V. Kasisomayajula Sumit Basu, Venkitanarayanan Parameswaran and Nandini Gupta, “Improvement in Surface Degradation Properties of Polymer Composites due to Pre-processed Nanometric Alumina Fillers”, IEEE Trans. on Dielectric and Electrical Insulation, Vol. 15, No. 1, pp. 63-72, February 2008.
Elan Seralathan K , Amit Mahajan and Nandini Gupta “ Modeling of electric tree progression due to space charge modified fields”, J. Phys. D: Appl. Phys. 41 (2008) 551 – 559.
Nandini Gupta, W. W. Stoffels and G.M.W. Kroesen, “Numerical simulation of primary cluster formation in Silane plasmas”, Journal of Physics D: Applied Physics V36 (2003), pp.837.
Nandini Gupta and T. S. Ramu, “Estimation of partial discharge parameters in GIS using acoustic emission techniques”, Journal of Sound and Vibrations, V247 n2 (2001), pp.243
Nandini Gupta and G.R.G. Raju, “Dissipated Power in a Radio-frequency Discharge in Oxygen”, Journal of Physics D: Applied Physics V33 (2000), pp. 2949.
Nandini Gupta and G.R.G. Raju, “Numerical and Analytic Techniques to Study Capacitive rf Discharges”, IEEE Transactions on Dielectrics and Electrical Insulation, (2000), V7, pp. 708.
Nandini Gupta and T. S. Ramu, “Estimation of partial discharge parameters in GIS using acoustic emission techniques: a theoretical approach”, Journal of Computational Acoustics, Vol. 6, No. 4, pp. 416
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className = "accordion" eventKey="1">
        <Accordion.Header>Non Researched Publications(I am also a published translator)</Accordion.Header>
        <Accordion.Body>
          “The Land Where I Found It All”, by Buddhadeva Basu, translated by Nandini Gupta, published by Parabaas (1 January 2018) The above book was translated into Gujarati by Jayant Meghani from the English translation.
Translations of Bengali poetry into English have been included in the following anthologies:
“The Oxford India Anthology of Bengali LiteratureVolume II: 1941-1991”,edited by Kalpana Bardhan.
"Contemporary Voices from the East: An anthology of poems", Edited by Ravi Shankar, W.W.Norton, 2007.
"The Poetry of Men's Lives: An International Anthology", Edited by Fred Moramarco and Al Zolynas, The University of Georgia Press, 2004.
“Cells:2001 Annual Volume of Two Lines”, Published by the Center for the art of Translation, San Francisco, USA.
Poems of Sunil Gangopadhyaya, Chandrabaga:A Journal of Translation, Edited and Published by Jayanta Mahapatra, 2003.
Poems of Sunil Kumar Nandi, Chandrabaga:A Journal of Translation, Edited and Published by Jayanta Mahapatra, 2004.
List of Publications in Parabaas Translations at 
http://parabaas.com/translation/database
/translators/index.html#NandiniGupta
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className = "accordion" eventKey="2">
        <Accordion.Header>Student Achievments</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item className = "accordion" eventKey="3">
        <Accordion.Header>Accordion Item #4</Accordion.Header>
        <Accordion.Body>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
        </Col>

        {/* Right Column: Carousel */}
        <Col md={6} className="RP-col">
          <Carousel fade>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={iitk1}
                alt="First slide"
              />
              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={iitk2}
                alt="Second slide"
              />
              <Carousel.Caption>
                <h3>Second slide label</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                className="d-block w-100"
                src={iitk3}
                alt="Third slide"
              />
              <Carousel.Caption>
                <h3>Third slide label</h3>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                </p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
  );
};

export default ResearchPublications;