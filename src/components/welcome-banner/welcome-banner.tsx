import { useState, useEffect } from "react"

export default function CSSGeneration() {
    const [state, setState] = useState(false)

    useEffect(() => {
        // Trigger animation when component mounts
        setState(true)
    }, [])

    return (
        <div className=" welcome-banner flex justify-center items-center text-left pt-45 pb-30 ">
            <div className="flex flex-col justify-center items-center pt-25">
                <h1 className=' h1 text-7xl font-bold px-3 pb-25 pt-10' style={{color: 'var(--color-main-text-white)'}} data-state={state}> Welcome to Skrydrop Studios</h1>
            
            </div>

            <style>
                {`
                    .welcome-banner {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        width: 100%;
                        height: 20vh;
                        padding-left: 10px;
                        padding-right: 10px;
                       
                        
                    }

                    .welcome-banner .h1 {
                        transition: opacity 3s ease-in-out;
                        opacity: 0;
                    }

                    .welcome-banner .h1[data-state="true"] {
                        opacity: 1;
                    }
                `}
            </style>
        </div>
    )
}