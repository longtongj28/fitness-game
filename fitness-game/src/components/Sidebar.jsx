import * as React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import './css/sidebar.css'
import Information from './Information'
import {AiOutlineRight, AiOutlineLeft} from 'react-icons/ai'

const SideBar = () => {
    const [opened, setOpened] = useState(true)
    const [icon, setIcon] = useState(<AiOutlineLeft/>)
    const onClickClose = useCallback(()=> {
        setOpened(opened ? false : true)
        setIcon(opened ? <AiOutlineRight/> : <AiOutlineLeft/>)
    }, [opened])

    return (
        <>
            <div className={`sidebar ${opened ? 'opened' : 'closed'}`}>
                <Information/>
            </div>
            <div className={`closeBtn ${opened ? 'opened' : 'closed'}`} onClick={onClickClose}>{icon}</div>
        </>
    )
}

export default SideBar