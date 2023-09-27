import { Venn } from './components/venn'
import { Header } from './components/header'
import { Dash } from './components/dash'

export const Landing = () => {
  return (
    <div id='landing-wrapper'>
      <Venn type='landing' />
      <div id='log-in-wrapper' className='-flex -col'>
        <a href='' className='log-in-link'>- log in with apple music</a>
        <a href='' className='log-in-link'>- log in with spotify</a>
      </div>
    </div>
  );
}

export const Dashboard = () => {
  return (
    <div id='dashboard-wrapper'>
      <Header />
      <Dash />
    </div>
  );
}
