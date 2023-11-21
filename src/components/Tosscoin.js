import React, { useState } from 'react'

export default function Tosscoin() {
    const [total, setTotal] = useState(0)
    const [heads, setHeads] = useState(0)
    const [tails, setTails] = useState(0)
    const [tossresult, setTossresult] = useState('heads');

    const handleClick = () => {
        const tossResult = Math.floor(Math.random() * 2)
        const result = tossResult === 0 ? 'heads' : 'tails';
        setTossresult(result)
        setTotal((prevtotal) => prevtotal + 1)

        if (result === 'heads') {
            setHeads((prevheds) => prevheds + 1)
        } else {
            setTails((prevtails) => prevtails + 1)
        }
    }
    return (
        <div className='tossContainer'>
            <div className='tossparent'>
                <div className='toss-list'>
                    <h1>Coin Toss Game</h1>
                    <p>Heads (or) Tails</p>
                    {tossresult && (
                        <div>
                            {tossresult === 'heads' ? (
                                <img src="https://assets.ccbp.in/frontend/react-js/heads-img.png" alt="heads" style={{ width: '100px', height: '100px' }} />
                            ) : (
                                <img src="https://assets.ccbp.in/frontend/react-js/tails-img.png" alt="toss" style={{ width: '100px', height: '100px' }} />
                            )}
                        </div>
                    )}
                    <button onClick={handleClick}>Toss Coin</button>
                    <div className='coin-game'>
                        <p>Total:{total}</p>
                        <p>Heads:{heads}</p>
                        <p>Tails:{tails}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
