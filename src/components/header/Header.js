import React from 'react'
import BedIcon from '@mui/icons-material/Bed';
import headerTitles from '../../maps';

const Header = () => {
  return (
    <header className='bg-white py-3'>
      <div className='w-4/5 mx-auto px-5 flex justify-between items-center'>
<h2 className='uppercase font-titleFont font-semibold'><span><BedIcon/> </span> rentrooms</h2>
<div className='flex justify-center items-center gap-10'>
    {
        headerTitles.map(headertitle => (
            <span className='text-base font-medium' key={headertitle.id}>{headertitle.title}</span>
        ))
    }
</div>
<div className='flex items-center justify-center gap-10'>
    <p className='text-base font-medium'>Login</p>
  <button  className='text-base font-medium bg-buttonColor p-3 rounded-md text-white'>
   Post Property
  </button>
</div>
      </div>
    </header>
  )
}

export default Header
