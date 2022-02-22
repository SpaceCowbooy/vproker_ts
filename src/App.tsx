import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import Orders from './components/pages/Orders'
import Clients from './components/pages/Clients'
import Tools from './components/pages/Tools'
import Rigs from './components/pages/Rigs'
import Inventory from './components/pages/Inventory'
import Maintain from './components/pages/Maintain'
import Login from './components/pages/Login'
import Discounts from './components/pages/Discounts'
import Consumables from './components/pages/Consumables'

//import Header from './components/Header'
//import Footer from './components/Footer'
import { ThemeProvider } from '@material-ui/styles'
import theme from './styles/theme'
import api from './api'
class App extends React.Component {
  // componentDidMount() {
  //   let preloader = document.getElementsByClassName('preloader')[0]
  //   setTimeout(() => {
  //     preloader.classList.add('loaded')
  //   }, 1000)
  //   setTimeout(() => {
  //     preloader.classList.add('loaded-none')
  //   }, 1300)
  // }f

  apiGetTools () {
    
    api.getTools().then(val => {
      alert(val.data[0].id);
    });
  }

  apiGetOrders () {
    api.getActiveOrders("", "").then(val => {
      alert(val.data);
    });
  }
  //d
  render() {
    return (
      <BrowserRouter>
        <NavigationBar />
        <Switch>
          <Route path='/' exact component={Orders} />
          <Route path='/clients' exact component={Clients} />
          <Route path='/tools' exact component={Tools} />
          <Route path='/rigs' exact component={Rigs} />
          <Route path='/consumables' exact component={Consumables} />
          <Route path='/maintain' exact component={Maintain} />
          <Route path='/discounts' exact component={Discounts} />
          <Route path='/inventory' exact component={Inventory} />
          <Route path='/login' exact component={Login} />
        </Switch>
      </BrowserRouter>
    );
  }
  //   return (
  //     <ThemeProvider theme={theme}>
  //        <NavibarComp>

  //         </NavibarComp>
  //     {/* <BrowserRouter>
  //     <Header/> */}
  //       <div className='container'>
         
  //         {/* <Route path='/' exact component={Orders} />
  //         <Route path='/clients' exact component={Clients} />
  //         <Route path='/tools' exact component={Tools} />
  //         <Route path='/rigs' exact component={Rigs} /> */}
  //         {/* <Route path='/consumables' exact component={Consumables} />
  //         <Route path='/maintain' exact component={Maintain} />
  //         <Route path='/discounts' exact component={Discounts} />
  //         <Route path='/inventory' exact component={Inventory} />
  //         <Route path='/login' exact component={Login} /> */}
  //       </div>
  //       {/* <Footer/>
  //     </BrowserRouter> */}
      
  //     <button onClick={this.apiGetTools}>
  //        тУЛЗ
  //     </button>
  //     <button onClick={this.apiGetOrders}>
  //        тУЛЗ2
  //     </button>
  //     </ThemeProvider>
  //   )
  // }
}

export default App;