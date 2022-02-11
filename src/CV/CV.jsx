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
      name: <T id='ExpName' />,
      date:  <T  id= 'Now' />  ,
      where: "ALDI - Supermercados",
      description: <T id='DesAld' />
       
    },
    {
      name: <T id='DecJob' />,
      date: "15/10/2015 – 15/04/2016",
      where: "Decathlon",
      description:
       <T id='DesDec' />,
    },
    {
      name: <T id='Gym' />,
      date: "20/06/2008 – 01/04/2013",
      where: "CDOM La Almendrera",
      description:
       <T id='GymDesc' />,
    },
  ],
  languages: {
    language: <T id='ln' />,
    wrlevel:  <T id='Wr' /> ,
    splevel: <T id='Sp' />,
  },
  habilities: [
   " HTML&CSS" , "JavaScript" , "Angular ", "React ", "NodeJS ", "SQL ", "PHP"]
  ,
  volunteer: [
    {
      name: <T id='Pro' />,
      where: "Caja España / Pandora Producciones",
      description: <T id='DesPro' />
        
    },
    
  ],
};