// import React from 'react'
// import Ref from './components/Ref'
// import REff from './components/REff'

// const App = () => {
  
//   return (
//     <div>
//       {/* <Ref/> */}
//       <REff/>
//     </div>
//   )
// }

// export default App


// import React from 'react'
// import { Link, Route, Routes } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
// import Profile from './components/Profile'

// const App = () => {
//   return (
//     <div>
//       <Routes>
//         <Route element={<Dashboard/>} path="/dashboard" />
//         <Route element={<Profile/>} path="/profile" />
//       </Routes>
//       {/* <a href="/profile">Profile</a>
//       <a href="/dashboard">Dashboard</a> */}
//       <Link to="/dashboard">Dashboard</Link>
//       <Link to='/profile'>Profile</Link>
//     </div>
//   )
// }

// export default App


import React, { Suspense } from 'react'
import { Link, Route, Routes } from 'react-router-dom'
// import Dashboard from './components/Dashboard'
const Dashboard=React.lazy(()=>import ('./components/Dashboard'));
// import Profile from './components/Profile'
const Profile=React.lazy(()=>import('./components/Profile')) 

const App = () => {
  return (
    <div>
      <Routes>
        {/* <Route element={<Dashboard/>} path="/dashboard" /> */}
        <Route element={<Suspense fallback="loading...."><Dashboard/></Suspense>} path="/dashboard" />
        {/* <Route element={<Profile/>} path="/profile" /> */}
        <Route element={<Suspense fallback="loading...."><Profile/></Suspense>} path="/profile" />
      </Routes>
      <Link to="/dashboard">Dashboard</Link>
      <Link to='/profile'>Profile</Link>
    </div>
  )
}

export default App