import React from 'react'
import Header from './Header'
import { Outlet } from 'react-router-dom'

const UserLayout = () => {
    return (
        <>
            <Header />
            <Outlet></Outlet>
        </>
    )
}

export default UserLayout