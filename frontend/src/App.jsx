import './App.css'
import {BrowserRouter, Route,Routes} from 'react-router-dom'
import NavbarComponent from './shared/NavbarComponent'
import ListPersonsComponent from './components/ListPersons'
import ListGroupsComponent from './components/ListGroups'
import ListGroupPersonComponent from './components/ListGroupPerson'

function App() {

  return (
    <>
     <BrowserRouter>
      <NavbarComponent />
        <div className='container-fluid'>
            <div className='card mt-3'>
              <div className='card-body'>
                <Routes>
                  <Route exact path="/" element={<ListPersonsComponent />} />
                  <Route path="/persons" element={<ListPersonsComponent/>} />
                  <Route path="/person-group" element={<ListGroupPersonComponent/>} />
                  <Route path="/groups" element={<ListGroupsComponent/>} />

                  
                </Routes>
              </div>
            </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App