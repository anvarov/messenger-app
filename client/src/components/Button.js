/** @jsxImportSource @emotion/react */

import {css} from '@emotion/react'

//eslint-disable-next-line
import React from 'react'

export default function Button({text}){
    const styles = css`
        color: red;
    `
    return <button css={styles}>{text}</button>
}