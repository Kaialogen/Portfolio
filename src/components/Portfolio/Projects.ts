export type Project = {
    title: string
    images: string[]
    description: string
  }
  
  export const projects: Project[] = [
    {
      title: "Movie Pad",
      images: [
        "/images/Moviepad.jpeg"
      ],
      description: "A full-stack movie database app with a React frontend and Express backend, featuring user authentication and a PostgreSQL database. Github: https://github.com/Kaialogen/Movie-Pad"
    },
    {
      title: "Hurst Chat",
      images: [
        "/images/project2-1.png"
      ],
      description: "A social media app design for school communities, built with React and Express. It includes user authentication, real-time chat, and a PostgreSQL database."
    },
    {
      title: "Warwick Car Finance",
      images: [
        "/images/project3-1.png"
      ],
      description: "A car finance website built with PHP, bootstrap and MySQL, featuring a user-friendly interface for car finance calculations and comparisons."
    }
  ]
  