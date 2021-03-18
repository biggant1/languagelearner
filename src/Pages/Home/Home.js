import { groups } from 'Util/map'
import './Home.css'

function Home(props) {
  let handleSubmit = (e) => {
    e.preventDefault();
    let selected = e.target.querySelectorAll('input:checked')
    let values = Array.from(selected).map(val => val.id)
    props.history.push({pathname: '/game', data: values})
  }

  return (
    <div className="homePage">
      <form id="characters" onSubmit={handleSubmit}>
        {groups.map(group => {
          let char = group[0]
          let characters = group.join(' ')
          return (
            <div key={char} className="checkbox">
              <input type="checkbox" name={char} id={char}/>
              <label htmlFor={char}>{characters}</label><br/>
            </div>
          )
        })}
        <button type="submit">Study!</button>
      </form>
    </div>
  );
}

export default Home;