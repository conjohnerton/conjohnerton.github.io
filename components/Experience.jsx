import styles from '../styles/Projects.module.css'

const experiences = [
  {
    title: 'Softare Engineer Intern at AWS AppSync',
    link: 'https://aws.amazon.com/blogs/mobile/appsync-direct-lambda/',
    description:
      'My intern project was to bring the Direct Lambda feature to AWS AppSync.\n Along the way, I also worked on documentation for internal software in order to help other engineers get up to speed, faster.'
  },
  {
    title: 'CS Teaching Assistant at University of Central Florida',
    description:
      'Peer tutor and teaching assistant at UCF. I helped a TON of students and loved every minute of it. (It reflects on how I like to work now too)\n I was part of a one-of-a-kind grassroots team with the goal of supporting the next generation of great Computer Scientests.',
    link: 'https://www.ucf.edu/'
  }
]

const Experience = () => {
  const projectCards = experiences.map((exp) => {
    const expInfo = (
      <div className={styles.card}>
        <h3>{exp.title}</h3>
        <p style={{ color: 'slategray' }}>{exp.description}</p>
      </div>
    )

    return exp.link ? (
      <a href={exp.link} target="_blank" style={{ textDecoration: 'none' }}>
        {expInfo}
      </a>
    ) : (
      expInfo
    )
  })

  return (
    <div>
      <h2>Experience</h2>
      {projectCards}
    </div>
  )
}

export default Experience
