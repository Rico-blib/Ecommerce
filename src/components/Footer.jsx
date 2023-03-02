import { EmailOutlined, Facebook, Instagram, LocalPhoneOutlined, LocationOnOutlined, Pinterest, Twitter } from '@material-ui/icons'
import React from 'react'

function Footer() {

    const social = 'm-3 rounded-full cursor-pointer p-2 text-white'
  return <div className='flex items-center justify-around p-2 mobile:flex-col mobile:item-start'>
    <div className='flex-1 flex flex-col flex-wrap p-2'>
        {/*store info*/}
        <h1 className='text-25px'>
            EricCupaCode
        </h1>
        <p>
            Lorem ipsum dolor sit amet consecutor adipising elit.Id voluptate voluptas nihil explicabo optio facilis unde out,in omnis, uem magni iure qus dollor
        </p>
        <div className='flex item-center justify-center mt-3 self-start'>
            <div className={social + ' bg-blue-700'}>
                <Facebook/>
            </div>
            <div className={social + ' bg-orange-500'}>
                <Instagram/>
            </div>
            <div className={social + ' bg-sky-400'}> 
                <Twitter/>
            </div>
            <div className={social + ' bg-red-600'}>
                <Pinterest/>
            </div>
        </div>
    </div>
    <div className='flex flex-1 flex-col p-2'>
        {/*contact info*/}
        <div className='flex m-3'>
            <LocationOnOutlined/>
            <p className='pl-3'>State of California</p>
        </div>
        <div className='flex m-3'>
            <LocalPhoneOutlined/>
            <p className='pl-3'>+254757117791</p>
        </div>
        <div className='flex m-3'>
            <EmailOutlined/>
            <p className='pl-3'>ewainaina74@gmail.com</p>
        </div>
    </div>
  </div>
}

export default Footer