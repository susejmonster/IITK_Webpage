import { FC } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Figure from 'react-bootstrap/Figure';
import './About.css';

// ✅ Import images properly
import img1 from './Images/img12_Sdas.jpg'; // Adjust the path as necessary
import img2 from './Images/img2_Maity.jpg'; // Adjust the path as necessary';
import img3 from './Images/img11_jeevan.jpg';
import img4 from './Images/img2.png';
import img5 from './Images/img10_Uday.jpg';
import img6 from './Images/img9_Varkala.jpg';
import img7 from './Images/img2.png';
import img8 from './Images/img1.jpg';
import img9 from './Images/img2.png';
import img10 from './Images/img4_balaji.jpg';
import img11 from './Images/img5_pratyasha.jpg';
import img12 from './Images/img3_Kingshuk.jpg';
import img13 from './Images/img6_Moon.jpg';
import img14 from './Images/img7_Amrendra.jpg';
import img15 from './Images/img8_Himanshu.jpg';
import img16 from './Images/img13_Aasha.jpg';
import Nandini from './Images/Nandini.jpg'; 

const About: FC = () => {
  const cards = [ 
    {
      title: 'S.Das',
      text: 'Supriyo Das (SM, IEEE) is presently working as Assistant Professor in the Department of Electrical Engineering, National Institute of Technology Jamshedpur, India. Prior to joining NIT Jamshedpur, he has served National Institute of Technology Meghalaya from Aug. 2014 to Nov. 2022 as Assistant Professor. He has received Bachelor of Engineering in Electrical Engineering from Jalpaiguri Government Engineering College (University of North Bengal) and Master of Science (by research) in Electrical Engineering with specialisation in High Voltage Engineering from Indian Institute of Technology Madras. He has obtained Ph.D. degree in Electrical Engineering from Indian Institute of Technology Kanpur and carried out his research work in the area of Electrical Insulation. His major areas of research interests include Characterisation of Electrical Insulation, Condition assessment of Power apparatus, Lighting and Switching transients in High Voltage System, Electromagnetic field analysis.',
      img: img1,
    },
    {
      title: 'Parimal Maity',
      text: 'Computational Materials Specialists@Eaton.\n Completed Phd degree in Mechanical Engineering (Impact performance of ceramics polymer composites), Master degree (detection of defects in composites) in Mechanical Engineering and Bachelors degree in Mechanical Engineering;',
      img: img2,
    },
    {
      title: 'Jeewan Pandey',
      text: 'Associate Professor:-IITBHU.Area of Interest: High Voltage and Electrical Insulation, Nanodielectrics, HVDC, Pulse Power, BMS;',
      img: img3,
    },
    {
      title: 'Ritesh Kumar',
      text: 'Professor at G. H. Patel College of Engineering and Technology, Anand, Gujarat, India. He has completed his PhD in High Voltage Engineering from IIT Kanpur. His research interests include High Voltage Engineering, Nanodielectrics, and Condition Monitoring of Power Apparatus.',
      img: img4,
    },
    {
      title: 'Uday Kiran',
      text: 'TSGENCO(telangana state power generation corporation),ASSISTANT ENGINEER, Mtech IIT Kanpur, Btech JNTU Hyderabad',
      img: img5,
    },
    {
      title: 'Vijay Kumar Varkala',
      text: 'Lead Engineer High Performance Motor Development@AVL, Mtech, IIT Kanpur, Btech, JNTU Hyderabad. He has completed his MTech in High Voltage Engineering from IIT Kanpur and is currently working as a Lead Engineer in High Performance Motor Development at AVL in Graz,Austria.',
      img: img6,
    },
    {
      title: 'Elan',
      text: 'Thesis Title: Study of Electric Tree Progression in Polymeric Dielectrics with and without voidsCurrent Position: Professor in EEE departmentResearch Interest: Modeling of PD, High frequency BD studies, Nano-Dielectricts',
      img: img7,
    },
    {
      title: 'Romana Zafar',
      text: 'Romana Zafar obtained the PHD degree in Electrical Engineering from the Indian Institute of Technology Kanpur India in 2019. She worked in the area of Electrical Characterization and Dielectric Phenomena of Insulating Materials . She published her research articles in the prestigious International Journals and also presented her research in International and National Conferences in India and USA. Her current research interests include Nanodielectrics/Polymer Nano-Composites, High Permittivity Nanocomposites and their potential applications, Finite Element Method (FEM) based modeling of Nanocomposites.',
      img: img8,
    },
    {
      title: 'Syed Abdullah Qasim',
      text: 'Syed Abdullah Qasim did his BTech and MTech from AMU Aligarh. He did his PhD from IIT Kanpur. His PhD topic was "Use of Functionally Graded Materials for efficient electric stress control in insulators." After PhD, he briefly worked as Senior Project Engineer in IIT Kanpur. Presently, he is working in the Department of Electrical Engineering of IIEST Shibpur as a faculty member."',
      img: img9,
    },
    {
      title: 'Balaji Sriram',
      text: 'Co-Founder and CTO of Simactricals @ IITK.I am a Ph.D. researcher at IIT Kanpur, working on space charge in Nanodielectrics.I have been very passionate about research and I am very keen on understanding its practical implications.As a post graduate in the domain of High Voltage Engineering, I have also gained a bit of hands-on experience in the industry.',
      img: img10,
    },
    {
      title: 'Pratyasha Das',
      text: 'PhD Scholar, IIT Kanpur | EE | High Voltage Engineering | Nanodielectrics | Molecular Modeling | Vice-Chair IEEE DEIS SBC IITK. I am Pratyasha Das, enrolled in PhD programme in 2019.B.Tech graduate(2019) in Electrical and Electronics Engineering from Institute Of Engineering & Management, Kolkata, India."My research interest is Investigation of Nanocomposite Interface layers using Molecular Dynamics Simulation',
      img: img11,
    },
    {
      title: 'Kingshuk Chatterjee',
      text: 'Im a PhD graduate in Electrical Engineering from IIT Kanpur, specializing in supercapacitor technology, electrochemical energy storage, and power electronics integration. My work bridges the gap between materials science and real-world applications in EVs and renewable energy systems, with a focus on improving reliability, ageing resilience, and condition monitoring. My recent research investigates how converter-induced ripple currents impact the ageing of supercapacitors, especially those with advanced nanomaterial-based electrodes. Im passionate about developing ripple-resilient HESS designs, accelerated ageing protocols, and real-time SoH/RUL estimation techniques—crucial for building cost-effective, robust energy storage solutions for emerging markets like India.I bring a unique blend of expertise in:Nanomaterials & Electrochemical Characterization (CV, EIS, GCD) Electrical Modeling & Accelerated Ageing Studies Power Converter-SC Interfacing in EVs and Microgrids COMSOL-based simulations and diagnostic analytics Currently exploring postdoctoral/industry opportunities where I can apply my skills to develop next-gen energy storage systems, advance battery-supercapacitor hybrid integration, and support sustainable electrification globally.',
      img: img12,
    },
    {
      title: 'Moon Moon Bordeori',
      text: 'Moon Moon Bordeori received the B.E degree in electrical engineering from the GIMT, Guwahati, India, in 2014, MS(R) degree in High Voltage Engineering from School of Energy Science and Engineering, IIT Guwahati, Guwahati, India, in 2017. She is currently a PhD candidate in High Voltage Lab of the Department of Electrical Engineering at IIT Kanpur. She works in the area of nanofluids, electrical treeing in solid insulating materials and partial discharges',
      img: img13,
    },
    {
      title: 'Amrendra Kumar',
      text: 'Amrendra Kumar received the Bachelor degree in electrical and electronics engineering from west bengal university of technology,India in 2012 and master of engineering degree with specialization in high voltage engineering from jadavpur university in 2016.currently, he is Ph.D student in indian institute of technology,Kanpur,Electrical Engineering Department.His current area of interest is space charge, Electroluminscence Measurment and condition monitoring of the solid insulation.',
      img: img14,
    },
    {
      title: 'Himanshu Gupta',
      text: 'Research Topic- Analysis and Electrical Characterization of carbon-based Composites for Electromagnetic Shielding Applications"Apart from composites my research interest includes power systems transients behaviour on overhead transmission systems. I am also interested in Photography, Music, Traveling to new places."',
      img: img15,
    },
    {
      title: 'Asha Sharma',
      text: 'Asha Sharma is a doctoral student. She is mainly focusing on " Investigation of Interfacial region in a Nanodielectric using Electrostatic Force Microscopy". She is recipient of prestigious "IEEE Graduate Student Fellowship"',
      img: img16,
    },
    
  ];

  return (
    <div className="cont">
      <Figure>
        <Figure.Image
          width={171}
          height={180}
          alt="Sample figure"
          src={Nandini} // ✅ use imported image
        />
        <Figure.Caption>
          <h3>Dr.Nandini Gupta</h3>
          <ol>
            <li>2014-date: Professor, Dept of Electrical Engng, IIT Kanpur.</li>
            <li>Summer 2007:Visiting Faculty, Department of Electrical engineering, University of Windsor, Ontario, Canada.1999-2000: Post doctoral researcher, University of Windsor, Canada.2000-2002: Post doctoral researcher, Technical University of Eindhoven, The Netherlands.</li>
            <li>Bachelor of Electrical Engg, 1991, Jadavpur University, Kolkata.Master of Science in Engineering, 1994, Indian Institute of Science, Bangalore.PhD, 1998, Indian Institute of Science, Bangalore</li>
            <li>:Insulation in power apparatus and systems, nanodielectrics, field computation, gas discharges.</li>
          </ol>
        </Figure.Caption>
      </Figure>

      <Row xs={1} md={2} className="g-4">
        {cards.map((card, idx) => (
          <Col key={idx}>
            <Card className="card">
              <Card.Img variant="top" src={card.img} alt={card.title} />
              <Card.Body>
                <Card.Title>{card.title}</Card.Title>
                <Card.Text>{card.text}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default About;
