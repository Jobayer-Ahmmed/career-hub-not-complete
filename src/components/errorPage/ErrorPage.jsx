import {Link, useNavigate} from "react-router-dom"

const ErrorPage = () => {
    const homeNavigate = useNavigate()
  return (
    <div className="w-fit mt-10 mx-auto  text-center">
        <h1 className="text-5xl font-extrabold my-4">Oops !!!</h1>
        <h3 className="text-3xl font-bold">404, Page not found</h3>
        <Link to="/" onClick={()=>homeNavigate("/")} className="btn btn-ghost border border-gray-600  mt-4">Go Home</Link>
    </div>
  )
}

export default ErrorPage