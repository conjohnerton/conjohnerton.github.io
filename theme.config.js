const YEAR = new Date().getFullYear()

export default {
  footer: (
    <small style={{ display: 'block', marginTop: '8rem' }}>
      <div className="container">
        <time>{YEAR}</time> © John Connerton.
        <img
          className="image"
          height="100"
          width="100"
          src="/images/apple-touch-icon.png"
        />
        <a href="/feed.xml" target="_blank">
          RSS
        </a>
      </div>
      <style jsx>{`
        .container {
          display: flex;
          align-items: center;
          justify-content: space-evenly;
        }
        .image {
          padding-bottom: 7em;
        }
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
