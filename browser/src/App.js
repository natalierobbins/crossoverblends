import { Link } from 'react-router-dom'
import { Venn } from './components/venn'
import { Header } from './components/header'
import { Dash } from './components/dash'

export const Landing = () => {
  return (
    <div id='landing-wrapper'>
      <Venn type='landing' />
      <div id='log-in-wrapper' className='-flex -col'>
        <Link to='http://localhost:400/api/login/spotify-redirect' className='log-in-link'>- log in with apple music</Link>
        <Link to='http://localhost:400/api/login/spotify-redirect' className='log-in-link'>- log in with spotify</Link>
      </div>
    </div>
  );
}

export const Dashboard = (props) => {
  return (
    <div id='dashboard-wrapper'>
      <Header />
      <Dash page={props.page} />
    </div>
  );
}
