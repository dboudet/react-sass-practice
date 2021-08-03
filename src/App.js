import { Route, Switch, Redirect } from 'react-router-dom'
import Layout from './components/layout/'
import Home from './scenes/Home'
import About from './scenes/About'
import Services from './scenes/Services'
import './styles/_main.scss'

export default function App() {
  return (
      <Layout>
        <Switch>
          <Route exact path ='/about' component={About} />
          <Route exact path ='/services' component={Services} />
          <Route exact path='/home' component={Home} />
          <Route exact path ='/'>
            <Redirect to='/home' />
          </Route>
          <Route path='*'>
            <h2>Sorry, page could not be found.</h2>
          </Route>
        </Switch>
      </Layout>
  )
}