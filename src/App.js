import './App.css';
import RootLayout from './RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Home';
import Login from './Login/Login';
import Student from './Student/Student';
import Mentor from './Mentor/Mentor';
import Admin from './Admin/Admin';
import Profile from './SideBar/Profile/Profile';
import Assignments from './SideBar/Assignments/Assignments';
import Attendance from './SideBar/Attendance/Attendance';
import BatchReport from './SideBar/BatchReport/BatchReport';

function App() {
  const router= createBrowserRouter([
    {
      path:"/",
      element:<RootLayout />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/login",
          element:<Login />,
        },
        {   
          path:"/Student",
          element:<Student />,
        },
        {
          path:"/Mentor",
          element:<Mentor />,
        },
        {
          path:"/Admin",
          element:<Admin />,
          children:[
            {
              path:'profile',
              element:<Profile />
            },{
              path:'assignments',
              element:<Assignments />
            },
            {
              path:'attendance',
              element:<Attendance />
            },
            {
              path:'batch-report',
              element:<BatchReport />
            }
          ]
        }
      ]
    }
  ])
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;