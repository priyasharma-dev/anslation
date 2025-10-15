import React from 'react'
import { Rectangle82, Rectangle83, Ellipse81, Ellipse82 } from './gradienttop'

function Gradiant() {
    return (
        <div>
            <div className='border w-full h-[500px] relative overflow-hidden'>
                <div
                    // style={{
                    //     position: "absolute",
                    //     width: "2038px",
                    //     height: "1509px",
                    //     left: "calc(50% - 2038px/2 + 44px)",
                    //     //  top: "470px",
                    //     background:
                    //         "radial-gradient(50% 50% at 50% 50%, #004DFF 0%, rgba(0, 81, 255, 0.48) 49.04%, rgba(0, 111, 255, 0) 100%)",
                    //     opacity: 0.4,
                    //      filter: "blur(37.2px)",
                    //     zIndex: 0,
                    // }}

                    style={{
                        position: "absolute",
                        width: "800.38px",
                        height: "112.86px",
                        left: "951px",// shifted from left to right for responsiveness
                        top: "1.71px",
                        background:
                          "linear-gradient(90deg, rgba(2, 34, 71, 0.65) 0%, #043AAD 100%)",
                        filter: "blur(20.45px)",
                        borderRadius: "20px",
                        transform: "rotate(-33.3deg)",
                        zIndex: 0,
                      }}
                >

                </div>
                <div >
                </div>
            </div>

            {/* <Rectangle83/>
            <Rectangle82/> */}

            <div >

            </div>


        </div>
    )
}

export default Gradiant