import React from 'react'
import FilterLink from './MenuList'
import { VisibilityFilters } from '../actions'
let mune_list = [
    {
        text: '首页',
        url: 'index'
    },
    {
        text: '简介',
        url: 'profiles'
    }
]
const Nav = () => (
    
    <nav className='menu'>
        {/* <FilterLink filter={VisibilityFilters.SHOW_ALL} >All</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_ACTIVE}>Active</FilterLink>
        <FilterLink filter={VisibilityFilters.SHOW_COMPLETED}>Completed</FilterLink> */}

        {
            mune_list.map((ele,idx) => (
                <FilterLink key={idx} filter={ele.url}>{ele.text}</FilterLink>
            ))
        }
    </nav>
)
export default Nav