import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import ChiSono from './pages/ChiSono'
import NotFound from './pages/NotFound'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Switch>
          <Route path="/" component={Home} />
          <Route path="/chi-sono" component={ChiSono} />
          <Route component={NotFound} />
        </Switch>
      </main>
      <Footer />
    </div>
  )
}

export default App
