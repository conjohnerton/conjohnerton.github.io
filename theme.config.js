const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
<<<<<<< HEAD
      <time>{YEAR}</time> © John Connerton.
=======
      <time>{YEAR}</time> © Your Name.
>>>>>>> parent of 6ed3af9 (Deploying to master from  @ 5fb73801630a336ddf298e263562c7238eaaa82c 🚀)
      <a href="/feed.xml">RSS</a>
      <style jsx>{`
        a {
          float: right;
        }
        @media screen and (max-width: 480px) {
          article {
            padding-top: 2rem;
            padding-bottom: 4rem;
          }
        }
      `}</style>
    </small>
  )
}
