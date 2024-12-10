const background = [
  {
    eduCards: [
      {
        id: 0,
        title: "ADP-CS",
        degree: "BS, Computer Science",
        detail:
          "Bachelor's Degree in Computer System Engineering from NCBA&E Lahore.",
        year: "2022-2024",
      },
      {
        id: 2,
        title: "PNY Training Arfa Kareem",
        degree: "D-SE",
        detail: "Completed Diploma of Software Engineering from Lahore.",
        year: "2021-2022",
      },
      {
        id: 3,
        title: "Punjab Board Lahore",
        degree: "I.COM",
        detail: "Completed Icom part 1 and part 2 from Lahore.",
        year: "2019-2021",
      },
      {
        id: 4,
        title: "Punjab Board",
        degree: "Computer Science",
        detail:
          "Completed Computer Science part 1 and part 2 in Computer Science subjects from Punjab Board Lahore",
        year: "2015-2017",
      },
      {
        id: 5,
        title: "Short Course",
        degree: "Computer Science",
        detail:
          "Brains College offers a 3-month Office Work Course covering Microsoft Office, Google Workspace, administrative skills, office organization, communication, and hands-on experience for real-world office environments.",
        year: "2015",
      },
    ],
  },
  {
    expCards: [
      {
        id: 1,
        title: "Techbucks",
        role: "Frontend Developer",
        url: "https://thetechbucks.com/",
        desc: "As a frontend developer, I use React, Next & JavaScript to build user interfaces for web applications.",
        year: "02/2022 - Present",
        location: "Lahore, Pakistan",
      },
      //       {
      //         id: 2,
      //         title: "HauzaTech",
      //         role: "Internee",
      //         url: "no website",
      //         desc: "As an Internee, I learned how to use React & JavaScript to build interactive websites.",
      //         year: "02/2023 - Present",
      //         location: "Peshawar, Pakistan",
      //       },
      //       {
      //         id: 3,
      //         title: "Encoder Bytes",
      //         role: "PHP Developer",
      //         url: "https://www.encoderbytes.com/",
      //         desc: "I work there as a PHP developer, there I learned how to do CRUD'S operations in PHP, also I worked on Firebase",
      //         year: "09/2020 - 02/2021",
      //         location: "Peshawar, Pakistan",
      //       },
    ],
  },
];

export default function handler(req, res) {
  res.status(200).json(background);
}
