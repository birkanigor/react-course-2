import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import {BrowserRouter,Route} from "react-router-dom";


const App = (props) =>{
  console.log(props);
  debugger;
  return (
      <div className='app-wrapper'>
        <Header/>
        <Navbar state={props.state.sideBar}/>
        <div className="app-wrapper-content">
          <Route path='/dialogs' render={ () => <Dialogs dialogsPage={props.state.dialogsPage}
                                                         updateMessageTextArea={props.updateMessageTextArea}
                                                         addMessage={props.addMessage}/> }
                                        /> {/*exact*/}

          <Route path='/profile' render={ () => <Profile profilePage={props.state.profilePage}
                                                         updatePostTextArea={props.updatePostTextArea}
                                                         addPost={props.addPost} />
                                        } />
          <Route path='/news' component={News} />
          <Route path='/music' component={Music} />
          <Route path='/settings' component={Settings} />
        </div>
      </div>
  )
}

export default App;
