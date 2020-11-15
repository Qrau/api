import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SearchSeaction from './components/SearchSeaction'
import ResultsSection from './components/ResultsSection'



function App () {


  return (
    <>
      <Router>
        <Switch>
          <Route path='/' component={SearchSeaction} exact />
          <Route path="/code/:code" component={ResultsSection} exact />
        </Switch>
      </Router>
    </>
  )
}

export default App
