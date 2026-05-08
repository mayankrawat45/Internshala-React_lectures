import React from 'react'
import Header from './components/Header'
import Body from './components/Body'
import Footer from './components/Footer'
import ApiCalling from './components/ApiCalling'

const App = () => {
  return (
    <div>
       {/* <ApiCalling/> */}
       <Header/>
       <Body/>
       <Footer/>
    </div>
  )
}

export default App