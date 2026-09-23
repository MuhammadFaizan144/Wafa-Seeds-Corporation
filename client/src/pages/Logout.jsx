import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Navigate } from 'react-router-dom'
import {logout} from '../redux/authSlice'
import { toast } from 'react-toastify'
const Logout = () => {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(logout())
        toast.success("Logout")
    },[dispatch])

  return <Navigate to="/login" replace/>
}

export default Logout
