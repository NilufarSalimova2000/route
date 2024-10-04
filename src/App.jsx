import { Route, Routes } from 'react-router-dom';
import './App.scss';
import { Home } from './pages/home';
import { User } from './pages/user';
import { Profile } from './pages/profile';
import { MainLayout } from './layout/main-layout';
import { UserDetail } from './pages/user-detail';
import { ProfileLayout } from './layout/profile-layout';
import { ChangeAddress } from './pages/profile-change/change-address';
import { ChangeProfile } from './pages/profile-change/change-profile';
import {CreateAddress} from "./pages/profile-change/create-address"

function App() {


  return (
    <div>
      <Routes>
        <Route path='/' element={<MainLayout />} >
          <Route index element={<Home />} />
          <Route path='user' element={<User />} />
          <Route path='profile' element={<ProfileLayout/>} >
            <Route index element={<Profile />} />
            <Route path='change-address' element={<ChangeAddress />} />
            <Route path='create-address' element={<CreateAddress />} />
            <Route path='change-profile' element={<ChangeProfile />} />
          </Route>
          <Route path='user/detail/:userId' element={<UserDetail />}/>
          <Route path='*' element={<h2>Page not found !</h2>} />
        </Route>

      </Routes>
    </div>
  )
}

export default App
