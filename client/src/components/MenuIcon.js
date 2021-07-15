/** @jsxImportSource @emotion/react */

import React from 'react'
import { AiOutlineMenu } from "react-icons/ai";
import {css} from '@emotion/react'

const style = css`
    display: flex;
    justify-content: center
    padding: 2px;
    &:hover {
        box-shadow: 5px 6px 15px 5px #999999;
    }
`
function MenuIcon() {
    return (
        <div >
            <AiOutlineMenu css={style}/>
        </div>
        
    )
}

export default MenuIcon
