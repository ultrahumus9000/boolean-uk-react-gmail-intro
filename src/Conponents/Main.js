import MainArticle from './MainConponents/MainArticle'
import MainNav from './MainConponents/MainNav'

function Main() {
  return (
    <main className="email-view">
      <MainNav />
      <MainArticle />
      <section className="reply-email">
        <button> send </button>
      </section>
    </main>
  )
}

export default Main
