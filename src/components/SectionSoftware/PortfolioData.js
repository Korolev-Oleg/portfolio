import tendmanagerImg from "./images/tendmanager.png";
import prodlogisticaMobileImg from "./images/prodlogisticaMobile.png";
import priceOfferGeneratorImg from "./images/priceOfferGenerator.png";
import zenMoneyImg from "./images/zenMoney.png";
import titanControlBackend from "./images/titanControlBackend.png";

export default [
  {
    title: 'Tend manager 2021-2022',
    image: tendmanagerImg,
    description: 'Tend manager is a web application that allows you to manage your tenders. ' +
      'You can create tenders, add tenders to your cart, and pay for them.',
    githubLink: '',
    stack: ['Python', 'PyQt5', 'OpenPyxl', "python-docx", "Autoit"]
  },
  {
    title: 'Prodlogistica Mobile App 2021-2022',
    image: prodlogisticaMobileImg,
    description: 'A mobile application for the sales department employees of the "Prologistics" company' +
      'The application allows employees to create orders in 1C7.7 while on the move. ' +
      'A significant amount of work was done in the design and development of the backend API of the mobile application, ' +
      'as well as in the integration with the old version of 1C7.7',
    githubLink: '',
    stack: ['Python', 'Django', 'Django REST Framework', 'PostgreSQL', "Celery", 'Redis', 'Git']
  },
  {
    title: 'Price Offer Generator 2021',
    image: priceOfferGeneratorImg,
    description: 'An internal application with a graphical interface (PyQt5) for generating commercial proposals. ' +
      'The application parses an Excel file database and, based on it, generates a commercial offer using a Word template, ' +
      'allowing for a search and processing of all extracted products beforehand',
    githubLink: '',
    stack: ['Python', 'PyQt5', 'OpenPyxl', "python-docx"]
  },
  {
    title: 'ZenMoney 2021',
    image: zenMoneyImg,
    description: 'Integration of the ZenMoney financial accounting system with Google Sheets for analytics and reporting.',
    githubLink: '',
    stack: ['Python', 'ZenMoney API', 'Google Sheets API', 'Git']
  },
  {
    title: "TitanControl Backend 2022-2023",
    image: titanControlBackend,
    description: 'Participation in the development of a distributed backend and REST API for TitanControl - a management and control system ' +
      'for railway security services. The application suite includes: ' +
      'a web application for system administration and management, a mobile application for security service employees, ' +
      'and an application for smartwatches. The system serves up to 5k users simultaneously.',
    githubLink: "",
    stack: ['Python', 'SQL', 'Django', 'Django REST Framework', 'PostgreSQL', 'Redis', 'Docker', 'Git']
  }
]
