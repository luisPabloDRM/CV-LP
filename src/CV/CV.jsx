import { FormattedMessage  as T} from 'react-intl';

export const CV = {
  me: {
    name: "Luis Pablo del Rio ",
    adress: "Arroyo de la Encomienda",
    city: "Valladolid",
    email: "lp.delriom@gmail.com",
    birthDate: "20/07/1985",
    phone: "(+34) 685148169",
    image: "https://media-exp1.licdn.com/dms/image/C4D03AQG1ah6QXnZuqQ/profile-displayphoto-shrink_200_200/0/1642159068823?e=1655942400&v=beta&t=AW-Zgh4dJia27QMnaFmUT8qCAjr-VSly3b8lhN84MKE",
    GitHub: "https://github.com/luisPabloDRM",
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
  portfolio:[
    {
      image:"https://media.discordapp.net/attachments/965645891820212318/965648489394602024/Js_-Rick_And_Morty.png?width=923&height=277",
      tech:"JavaScript",
      description:< T id='port.desc1'/>
    },
    {
      image:"https://media.discordapp.net/attachments/965645891820212318/965648489080037527/Angular_FreeGames.png?width=923&height=492",
      tech:"Angular",
      description:< T id='port.desc2'/>
    },
    {
      image:"https://media.discordapp.net/attachments/965645891820212318/965648488358621254/React_Nba_Api.png",
      tech:"React",
      description:< T id='port.desc3'/>
    },
    {
      image:"https://media.discordapp.net/attachments/965645891820212318/965648489583374406/React_ItunesClone.png?width=923&height=506",
      tech:"React",
      description:< T id='port.desc4'/>
    },
    {
      image:"https://media.discordapp.net/attachments/965645891820212318/965648488740306954/React_Zarando.png?width=923&height=493",
      tech:"React",
      description:< T id='port.desc5'/>
    }

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