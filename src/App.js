import Header from './Header/Header';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Post from './Post/Post';
import Detail from './Details/Detail';
import Add from './Add/Add';
import { useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const detailLink = data.map((post) => {
    const link = '/detail-' + post.id
    
    return(
        {
          path:link,
          element: <Detail data={data[post.id]}/>,
        }
    )
  })

  console.log(detailLink)

  const route = createBrowserRouter([
    ...detailLink,
    {
      path:'/',
      element: <Post data={data}/>,
    },
    {
      path:'/add',
      element: <Add dataHook={data} setData={setData}/>,
    }
  ])
  
    return(
      <div>
        <Header />
        <RouterProvider router={route} />
      </div>
    )
}

export default App;
