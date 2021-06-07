import flaticonWelcomeImage from '../../assets/images/flaticon-welcome-image.png'
import ArticleHeader from './ArticleComponents/ArticleHeader'

function MainArticle() {
  return (
    <article className="email-content">
      <div className="title">
        <h1>Welcome to Flaticon</h1>
      </div>

      <ArticleHeader />

      <section className="email-body">
        <div className="content">
          <img src={flaticonWelcomeImage} alt="Flaticon welcome message" />
        </div>
      </section>
      <section className="email-actions">
        <button>Reply</button>
        <button>Forward</button>
      </section>
    </article>
  )
}

export default MainArticle
