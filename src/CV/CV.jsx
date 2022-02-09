import { FormattedMessage  as T} from 'react-intl';

export const CV = {
  me: {
    name: "Luis Pablo del Rio ",
    adress: "Arroyo de la Encomienda",
    city: "Valladolid",
    email: "lp.delriom@gmail.com",
    birthDate: "20/07/1985",
    phone: "(+34) 685148169",
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQG1ah6QXnZuqQ/profile-displayphoto-shrink_200_200/0/1642159068823?e=1648684800&v=beta&t=baWFYeUHIcfJgzq2Ns3vtU5lAyn_HOanySt34hB9DbA",
    GitLab: "https://gitlab.com/luispa23/",
    aboutMe:[
      
      <T id='AboutMe' /> ,
      

    ],
  },
  education: [
    {
      name: "FullStack developer  ",
      date: "2022",
      where: "Upgrade - HUB",
    },
    {
      name: "First Certificate in English",
      date: "2014",
      where: "Oxford University",
    },
    {
      name: "Maestro de Educacion Primaria",
      date: "2008-2012",
      where: "Universidad de Valladolid",
    },
  ],
  experience: [
    {
      name: <T  id='ExpName' />,
      date: "07/11/2017 – Nowadays",
      where: "ALDI - Supermercados",
      description:
        "'My job is team management, checking and maintaining stocks, placing orders, warehouse management, and merchandise presentation in the sales room.'",
    },
    {
      name: "Vendedor-Deportista (especialista Baloncesto)",
      date: "15/10/20015 – 15/04/2016",
      where: "Decathlon",
      description:
        "'Attention to the public, stock management, presentation of merchandise, and placing orders to the warehouse'",
    },
  ],
  languages: {
    language: " Language : English",
    wrlevel: " Write Level : B2",
    splevel: " Speak Level : B2",
  },
  habilities: [
   " HTML&CSS" , "JavaScript" , "Angular ", "React ", "NodeJS ", "SQL ", "PHP"]
  ,
  volunteer: [
    {
      name: "Envejecimiento Activo",
      where: "Caja España / Pandora Producciones",
      description:
        "In this project, what we tried was to provide the elderly with a series of physical activity resources, whether working on strength, mobility, as well as the social factor, inherent in physical activity."
        
    },
    
  ],
};