module.exports = {
  /* Your site config here */
  siteMetadata: {
    siteUrl: `https://happynurse.love`,
    name: `Young-Mi Park`,
    role: `BSN, MSN, RN, CPN`,
    email: `happy.nurse.park@gmail.com`,
    socialMedia: [
      // {
      //   name: "github",
      //   link: "https://github.com/masoudkarimif/gatsby-starter-clean-resume",
      // },
      { name: "linkedin", link: "https://linkedin.com" },
      // { name: "facebook", link: "https://facebook.com" },
      // { name: "twitter", link: "https://twitter.com" },
      // { name: "instagram", link: "https://instagram.com" },
    ],
    about: `
      <p>Deeply committed to providing quality compassionate patient care. Background includes pediatric, labor and delivery, OBGYN, infertility in a hospital and rehabilitation setting. Expertise in charting, assessment, and wound care. Proficient in patient education, medication/treatment administration. Detail-oriented, observant, and proactive.</p>
      <hr style="margin: 2rem 0;" />
      <p>
      A team player at heart with an independent spirit, I am effective both working independently and collaboratively in a given team. Known for a strong work ethic and attention to detail, I have maintained excellent relationships with patients and their family members, as well as colleagues and medical staff. Bringing solid work experience and proven track record of professionalism with an uncompromising focus on patients to any organization. Keeping a passion for learning and training for continued growth, always seeking further education</p>
      <hr style="margin: 2rem 0;" />
      <p>See the PDF version of my resume <a href="/young-mi-park_resume.pdf">here</a>.</p>
      `,
    education: [
      {
        degree: "Master of Science",
        major: "Nursing",
        when: "2012",
        school: "Lehman College",
        where: "Bronx, NY",
        moreInfo: ``,
      },
      {
        degree: "Bachelor of Science.",
        major: "Nursing",
        when: "2009",
        school: "Lehman College",
        where: "Bronx, NY",
        moreInfo: ``,
      },
      {
        degree: "Associate's Degree",
        major: "Nursing",
        when: "2002",
        school: "Kyung Hee University",
        where: "Seoul, South Korea",
        moreInfo: ``,
      },
    ],
    experience: [
      {
        role: "Nursing Supervisor",
        when: "2017-Present",
        company: "Sunshine Children's Home & Rehab Center",
        where: "Ossining, NY",
        moreInfo: `Responsible for maintaining personnel operations including performance appraisals, time clock reports, and PTO requests.
        Coordinate required trainings and maintain the staff competencies. 
        Ensure the practice compliance with policy and procedure.
        Communicate with family and multiplinary team members for quality care, provide strong assessment skills, and respond to emergency situations.
        `,
      },
      {
        role: "Staff RN",
        when: "2012-2017",
        company: "Sunshine Children's Home & Rehab Center",
        where: "Ossining, NY",
        moreInfo: `Provide high quality care to critical patients with a ventilator.
        Assess change in condition, and report promptly to medical staff.
        Administer medication via GJ or IV 
        Provide family education and participate in care plan meetings.
        Provide wound care dressing as well as central line and Mediport care.
        Train newly hired nurses as a preceptor.`,
      },
      {
        role: "Staff RN",
        when: "2011-2012",
        company: "King’s County Hospital (Labor & Delivery Unit)",
        where: "Brooklyn, NY",
        moreInfo: `Provide care for patients requiring fetal assessment and/or fetal monitoring 
        Assist physicians during delivery, treatment, examination, and surgical procedures
        Record and communicate patient condition as appropriate utilizing computerized documentation system 
        Assess and discuss pain management 
        Assist anesthesiologist for epidural procedures.`,
      },
      {
        role: "Staff RN",
        when: "2010-2011",
        company: "Sunshine Children's Home & Rehab Center (Pediatric Rehabilitation Unit)",
        where: "Ossining, NY",
        moreInfo: `Provide tracheostomy and G-tube care 
        Monitor seizure activity and provide comfort care
        Provide culturally appropriate care
        Provide central line care and monitor patient with TPN
        Provide ileostomy care and assessment.  `,
      },
      {
        role: "Staff RN",
        when: "2009-2010",
        company: "Northwoods Health Systems (Pediatric Rehabilitation Unit)",
        where: "Albany, NY",
        moreInfo: `Manage and care for ventilated patients
        Provide specialized care for ventilated patients: including ventilator monitoring, opened- and closed-suctioning, and lung sound assessment.`,
      },
      {
        role: "Staff RN",
        when: "2005-2007",
        company: "Maria Infertility Hospital ((Women’s Health & Infertility Unit)",
        where: "Seoul, South Korea",
        moreInfo: `Help prepare patients for treatment and fertility procedures 
        Educate patients on medications, treatments, and IVF procedures 
        Perform infertility diagnostic tests on patients
        Handle patient questions both in person and over the phone`,
      },
      {
        role: "Staff RN",
        when: "2002-2004",
        company: "CHA University School of Medicine, CHA General Hospital",
        where: "Pocheon, South Korea",
        moreInfo: `Provide pre-/post-operation care 
        Monitor bleeding and infection signs after NSVD, C/S, D&E, D&C. 
        Assess fetal heart tones, monitor contractions, and pain management
        Provide IV chemotherapy and emotional support`,
      },
    ],
    skills: [
      {
        name: "Personnel operations",
        level: "87",
        experience: "4 years",
      },
      {
        name: "Supervision & management",
        level: "85",
        experience: "4 years",
      },
      {
        name: "Patient education",
        level: "90",
        experience: "15 years",
      },
      {
        name: "Charting, assessment & treatment",
        level: "90",
        experience: "15 years",
      },
      {
        name: "Wound care",
        level: "85",
        experience: "10 years",
      },
      {
        name: "Specialized care for ventilated patients",
        level: "80",
        experience: "7 years",
      },
      {
        name: "Pediatric care",
        level: "90",
        experience: "11 years",
      },
      {
        name: "Labor/delivery, infertility & OBGYN",
        level: "85",
        experience: "4 years",
      },
    ],
    credentials: [
      "Wound Care Certification (2018)",
      "Certified Pediatric Nurse (2016)",
      "Registered Nurse, State of New York",
      "Registered Nurse, South Korea",
    ],
    //available_themes: ["great-gatsby", "master-yoda", "wonder-woman", "darth-vader", "luke-lightsaber"],
    theme: "wonder-woman",
    //fonts. Available: [default, programmer, poppins]
    font: "poppins",
  },
  plugins: [
    // Make sure this plugin is first in the array of plugins
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-111111111-1",
        head: true,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-less`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `IBM Plex Mono`,
          `Poppins\:,400,600`
        ],
				display: 'swap'
      },
    },
  ],
}
