import * as React from 'react'
import { useCallback } from 'react'
import { useState } from 'react'
import './css/sidebar.css'
import Information from './Information'

const SideBar = () => {
    const [opened, setOpened] = useState(true)

    const onClickClose = useCallback(()=> {
        setOpened(opened ? false : true)
    }, [opened])

    return (
        <>
            <div className={`sidebar ${opened ? 'opened' : 'closed'}`}>
                <Information/>
            </div>
            <div className={`closeBtn ${opened ? 'opened' : 'closed'}`} onClick={onClickClose}>Close Button</div>
        </>
    )
}

export default SideBar