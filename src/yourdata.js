// Skills Icons
import htmlIcon from "./images/html.svg"
import cssIcon from "./images/css.svg"
import reactIcon from "./images/react.svg"
import jsIcon from "./images/javascript.svg"
import designIcon from "./images/design.svg"
import codeIcon from "./images/code.svg"
import awsIcon from "./images/aws.svg"
import salesforceIcon from "./images/salesforce.svg"
import mysqlIcon from "./images/mysql.svg"
import microsoftIcon from "./images/microsoft.svg"
import linuxIcon  from "./images/linux.svg"
import seoIcon from "./images/seo.svg"
// Social Icon
import githubIcon from "./images/github.svg"
import codepenIcon from "./images/codepen.svg"
import dribbbleIcon from "./images/dribbble.svg"
import instagramIcon from "./images/instagram.svg"
import youtubeIcon from "./images/youtube.svg"
import linkedinIcon from "./images/linkedin.svg"
import laptopIcon from "./images/laptop.svg"

export default {
  //(Please Do Not Remove The comma(,) after every variable)
  //Change The Website Template

  //   Header Details ---------------------
  name: "Knox-nethan",
  headerTagline: [
    //Line 1 For Header
    "Providing cloud",
    //Line 2 For Header
    "solutions, services,",
    //Line 3 For Header
    "and automation",
  ],
  //   Header Paragraph
  headerParagraph:
    " ",

  //Contact Email
  contactEmail: "knox.soto1205@gmail.com",
 

  // End Header Details -----------------------

  // Work Section ------------------------
  
    aboutParaOne:
    "I am a Salesforce Certified Administrator with a passion for efficiency and creating systems that solve complex business problems. Having spent 3 years working in a non-profit environment, I have a strong ability to understand data, learn multi-tiered processes and identify needs based on an organization’s operations.",
  aboutParaTwo:
    "In my free time, I enjoy participating in Salesforce Community groups to learn and support others seeking to leverage Salesforce to improve productivity and efficiency for their organizations! I am also a member of a Salesforce Professional Development Program to fully understand the Salesforce Ecosystem and network to build valuable relationships in the Salesforce space..",
  aboutParaThree:
    "Outside of my passion for Salesforce I enjoy spending time with family and playing basketball. I love to read and reflect on my day. I love trying new things and stepping out of my comfort. I’m a very out-going person and love to converse with people of all kinds.",
  aboutImage:
    "https://personalknoxnethan.s3.us-east-2.amazonaws.com/Optimized-IMG_3012.jpeg",

  projects: [
    {
      title: "AWS static website Resume", //Project Title - Add Your Project Title Here
      para:
        "I created a S3 bucket for personal files and make it accessible via static website. This will display my resume.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1523474253046-8cd2748b5fd2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://personalknoxnethan.s3.us-east-2.amazonaws.com/Knoxnethanresume.docx+(8).pdf",
    },
    {
      title: "Salesforce portfolio experience", //Project Title - Add Your Project Title Here
      para:
        " This is a great example of how Salesforce experience allows you to create customer portal or static websites.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1555371363-27a37f8e8c46?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1500&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://knoxnethan-developer-edition.na162.force.com/s/",
    },

      {
      title: "Gallery of my Daily Life", //Project Title - Add Your Project Title Here
      para:
        "Instead of using social media, I decide to display photos I take in my personal gallery page. You can view photos of what I'm interested in.", // Add Your Service Type Here
      //Project Image - Add Your Project Image Here
      imageSrc:
        "https://images.unsplash.com/photo-1495707902641-75cac588d2e9?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
      //Project URL - Add Your Project Url Here
      url: "https://personalknoxnethan.s3.us-east-2.amazonaws.com/Knoxnethanresume.docx+(8).pdf",
    },

    /*
    If You Want To Add More Project just Copy and Paste This At The End
    ,{
        title: 'Project Five',
        para: 'Something Amazing',
        imageSrc: "",
        url: ''
    }
    */
  ],

  // End Work Section -----------------------





  skills: [
    {
      img: awsIcon,
      para:
        "AWS services: S3,EC2,EFS,RDS,VPC,IAM,CloudWatch,route 53, cloudfront",
    },
    {
      img: salesforceIcon,
      para:
        "Certified Salesforce administrator: strong in creating,protecting, and automating business processes. I continune to learn everyday through trailhead and keeping up to date with the latest updates.",
    },
    {
      img: mysqlIcon,
      para:
        "Mysql: RDS.DDL.DML.DCL.TCL.Azure SQL. BI. Tabular. Triggers.",
    },
    {
      img: microsoftIcon,
      para:
        "Microsoft: Project experience in Migration from Windows 7 - Windows 10. Intune MDM. Windows server 2016. Windows Active Directory. Azure. SCCM. Patching.",
    },
    {
      img: linuxIcon,
      para:
        "Linux: Ubuntu. KDE. Linux Commands. Linux Security. Linux Network. I use linux for fun and I love the open source apsect of it.",
    },
    {
      img: seoIcon,
      para:
        "SEO: Wordpress. Onpage SEO. offpage SEO. Link building.User Experience. Google Ads.",
    },
  ],

 

  contactSubHeading: "Let's work together",
  social: [
    // Add Or Remove The Link Accordingly
    { img: githubIcon, url: "https://github.com/knoxnethan" },
    {
      img: youtubeIcon,
      url: "https://www.youtube.com/channel/UCWr4tqmzejgdS4tbhia_bSQ",
    },
    {
      img: linkedinIcon,
      url: "https://www.linkedin.com/in/knox-nethan-aviles/",
    },
    
     {
      img: laptopIcon,
      url: "https://www.linkedin.com/in/knox-nethan-aviles/",
    },
    
  ],

}


