import React, { useState } from 'react'
import useWindowSize from "./WindowSize";

export default React.memo(() => {
    console.log('rendered')
    const [windowWidth, windowHeight] = useWindowSize()
    const [name, setName] = useState('')
    return (
        <label className="header-name">
            <input
                value={name}
                onChange={e => setName(e.target.value)}
                onClick={e => e.target.setSelectionRange(0, e.target.value.length)}
                placeholder="Untitled"
            />
        </label>
    )
})