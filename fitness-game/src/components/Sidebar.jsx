import * as React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import './css/sidebar.css'
import Information from './Information'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'
import { changeStyle } from '../actions/types'
import { useDispatch } from 'react-redux';
import { useEffect } from 'react'

const SideBar = ({mapRef}) => {   
    const dispatch = useDispatch() 
    const [opened, setOpened] = useState(true)
    const [icon, setIcon] = useState(<AiOutlineLeft/>)

    const onClickClose = ()=> {
        setOpened(!opened)
        setIcon(opened ? <AiOutlineRight/> : <AiOutlineLeft/>)
        dispatch(changeStyle(opened ? 'map-side-closed':'map-side-open'))
    }


    return (
        <>
            <div className={`sidebar ${opened ? 'opened' : 'closed'}`}>
                <Information mapRef={mapRef}/>
            </div>
            <div className={`closeBtn ${opened ? 'opened' : 'closed'}`} onClick={() => {onClickClose()}}>{icon}</div>
        </>
    )
}

export default SideBar