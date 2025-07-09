import React, { useState } from 'react';

export default function Editor() {
    const [text, setText] = useState('');

    return (
        <textarea
            style={{ width: '100%', height: '300px' }}
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder='Start typing...'

        />
    )
}