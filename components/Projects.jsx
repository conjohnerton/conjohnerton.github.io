import styles from '../styles/Projects.module.css'

const projects = [
  {
    title: 'Streats: Where food meets',
    link: 'https://www.gostreats.com/',
    description:
      'A marketplace connecting food trucks to both diners and property owners.',
    usedTech: ['Go', 'React', 'Docker', 'Flutter']
  },
  {
    title: 'The Watchful Eye',
    link: 'https://github.com/conjohnerton/watchful-eye',
    description:
      'A dashboard that uses Aave flashloans to protect against loan liquidation in multiple DeFi protocols.',
    video: 'https://www.youtube.com/watch?v=Rm3d8jyxarc',
    usedTech: ['React', 'Solidity', 'Ethereum'],
    imageLoc: '/images/WatchfulEye.png'
  }
]

const Projects = () => {
  const projectCards = projects.map((proj) => (
    <a href={proj.link} target="_blank" style={{ textDecoration: 'none' }}>
      <div className={styles.card}>
        <h3>{proj.title}</h3>
        <p style={{ color: 'slategray' }}>{proj.description}</p>
        {proj.video ? (
          <a
            href={proj.video}
            target="_blank"
            style={{ textDecoration: 'none' }}
          >
            <p style={{ marginBottom: '4px' }}>Demo</p>
          </a>
        ) : null}
      </div>
    </a>
  ))

  return (
    <div>
      <h2>Projects (that I'm proud to show off)</h2>
      {projectCards}
    </div>
  )
}

export default Projects
