export type Project = {
    title: string
    images: string[]
    description: string
    link: string
  }
  
  export const projects: Project[] = [
    {
      title: "Movie Pad",
      images: [
        "/images/Moviepad.jpeg"
      ],
      description: "A full-stack movie database app with a React frontend and Express backend, featuring user authentication and a PostgreSQL database.",
      link: "https://github.com/Kaialogen/Movie-Pad"
    },
    {
      title: "Hurst Chat",
      images: [
        "/images/project2-1.png"
      ],
      description: "A social media app design for school communities, built with React and Express. It includes user authentication, real-time chat, and a PostgreSQL database.",
      link: "https://github.com/Kaialogen/Hurst-Chat"
    },
    {
      title: "Warwick Car Finance",
      images: [
        "/images/CarFinance.png"
      ],
      description: "A car finance website built with PHP, bootstrap and MySQL, featuring a user-friendly interface for car finance calculations and comparisons.",
      link: "https://github.com/Kaialogen/car_rental"
    }
  ]
  