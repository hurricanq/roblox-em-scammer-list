import Header from './components/Header'
import Hero from './components/Hero'
import Card from './components/Card'
import Footer from './components/Footer'
import data from "./data"

function App() {
  const cards = data.map(item => {
    return (
      <Card key={item.id} {...item} />
    )
  })

  return (
    <>
      <div className="font-poppins bg-dark text-white">
        <Header />
        <div className="px-8 pb-5">
          <Hero />
          <div className="grid lg:grid-cols-4 sm:grid-cols-2 gap-5">
            {cards}
          </div>
        </div>
        <Footer />
      </div>
    </>
  )
}

export default App
