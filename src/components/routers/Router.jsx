import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layout from "../layout/Layout";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        errorElement: <h1>error Section</h1>,
        children: [
            {
                index: true, element: <App />
            },
          
        ]

    }
])
export default router;