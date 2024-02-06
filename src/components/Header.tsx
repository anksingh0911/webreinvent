import { useSelector } from 'react-redux';
import { RootState } from '../utils/appStore'

const Header = () => {
  const isLogin = useSelector((store:RootState)=> store.user?.isLogin)
  const userInfo = useSelector((store:RootState)=> store.user?.userInfo)

  return (
    <div className='flex flex-wrap justify-end p-4 bg-slate-400 shadow-lg'>
      <ul className='list-none flex flex-wrap'>
        <li className='px-2 text-white cursor-pointer'>
          <a href={userInfo.token !== "" ? "/dashboard" : "/"} className='cursor-pointer'>Dashboard</a> 
        </li>
        {!isLogin && (
          <li className='px-2 text-white'>
            <a href='/register' className='cursor-pointer'>Register</a> 
          </li>
        )}
        <li className='px-2 text-white'>
          <a href='/' className='cursor-pointer'>
            {isLogin ? "Logout" : "Login"}
          </a>
        </li>
        
      </ul>
    </div>
  )
}

export default Header