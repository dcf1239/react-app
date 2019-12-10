import React from 'react'
import { BrowserRouter as Router, NavLink } from 'react-router-dom'
const MenuList = props => {
    let {
        filter,
        children
    } = props
    return (
        <li className='menu-list'>
            <NavLink
                to={filter === 'SHOW_ALL' ? '/' : `/${filter}`}
                activeStyle={{
                    textDecoration: 'none',
                    color: 'red'
                }}
            >
                {children}
            </NavLink>
        </li>
    )
}

MenuList.propTypes = {
	
}

export default MenuList
