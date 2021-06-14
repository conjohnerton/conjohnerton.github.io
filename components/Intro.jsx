import styles from '../styles/Projects.module.css'

const Intro = () => (
  <div>
    <p>Welcome to my electronic corner... </p>
    <p>
      A place filled with <em>repetitive</em> beep-boops and clickety-snaps of
      keys; a slight smell of aromatic angst, and a waft of savory{' '}
      <em>(mmm...) </em>
      words of knowledge.
    </p>{' '}
    <img
      src="/images/mePic.jpg"
      alt="John with a cat in a basket on his head."
      height={500}
      width={500}
      style={{ borderRadius: '10%' }}
    />
    <em style={{ textAlign: 'center' }}>
      I am no cat in a hat, though I'm a lad with a <b>cat as a hat :)</b>
    </em>
    <br />
    <p>
      Feel free to peruse this corner as if it were your home too. All we have
      right now is some blogs I've written in the past. There might be something
      there to interest you. Take a look.
    </p>
  </div>
)

export default Intro
