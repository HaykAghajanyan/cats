import React, {useEffect, useRef, useState} from "react";
import {connect, useDispatch, useSelector} from "react-redux";
import {request} from "../../helpers";
import {setAllCategories, setCategory} from "../../redux/ducks/catReducerDuck";

const SideBar = () => {
    const [isOpen, setIsOpen] = useState(false)
    const dispatch = useDispatch()
    const sidebarRef = useRef()

    const {categories} = useSelector(({catReducer}) => catReducer)

    const toggleSidebar = () => {
        setIsOpen(val => !val)
    }
    const closeSideBar = (e) => {
        if(!e.path.includes(sidebarRef.current)) {
            e.stopPropagation()
            setIsOpen(false)
        }
    }

    const setCurrentCategory = (data) => {
        dispatch(setCategory(data))
    }

    useEffect(() => {
        request('categories', dispatch, setAllCategories)
        document.body.addEventListener('click', closeSideBar)

        return () => {
            document.body.removeEventListener('click', closeSideBar)
        }
    },[])

    return (
        <>
            <div className={`sidebar-container${isOpen? ' active' : ''}`}>
                <div style={{position: 'relative'}}>
                    <button className='sidebar-toggler' ref={sidebarRef} onClick={toggleSidebar}>{isOpen ? 'close menu' : 'open menu'}</button>
                </div>

                {
                    categories?.map(category => {
                            return (
                                <button
                                    onClick={() => setCurrentCategory(category.id)}
                                    className='sidebar-container-button'
                                >{category.name.toUpperCase()}</button>)
                        }
                    )
                }
            </div>
        </>
    )
}

export default connect()(SideBar)