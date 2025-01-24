import {useState,useEffect} from "react";
import { IProduct } from "@/interface/iproducts";
const Login = () => {

        const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {

         try {
            fetch('https://fakestoreapi.com/auth/login',{
                method:'POST',
                body:JSON.stringify({
                    username: "mor_2314",
                    password: "83r5^_"
                })
            })
                .then(res=>res.json())
                .then(data => {
                    setProducts(data)
                })
         }catch (err) {
            console.error(err);
        }
     }, [products])
    return(
         

<body className="bg-gray-200 h-screen flex justify-center items-center">
    <div className="bg-white w-1/3 shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <form>
            <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
                    Username
                </label>
                <input className="shadow appearance-none border 
                rounded w-full py-2 
                px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username"
                 type="text" placeholder="Username"/>
            </div>
            <div className="mb-6">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                </label>
                <input className="shadow appearance-none border rounded w-full py-2
                 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" 
                 id="password" type="password" placeholder="******************"/>
            </div>
            <div className="flex items-center justify-between">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                    Login
                </button>
                <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
                    Forgot Password?
                </a>
            </div>
        </form>
        <p className="text-center text-gray-500 text-xs">
            &copy;2025 DEE_LEGENDS. All rights reserved.
        </p>
    </div>
</body>

    )
    }

    export default Login;