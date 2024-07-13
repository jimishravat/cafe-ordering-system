import React, { useEffect, useRef } from 'react'
import "./ComingSoon.css"

const COMING_SOON_DATE = "Dec 31, 2024 11:59:59"

const ComingSoon = () => {

    const dayRef = useRef(0)
    const hrsRef = useRef(0)
    const minRef = useRef(0)
    const secRef = useRef(0)
    let comingDate = new Date(COMING_SOON_DATE)

    // let d = document.getElementById('days')
    // let h = document.getElementById('hours')
    // let m = document.getElementById('minutes')
    // let s = document.getElementById('seconds')

    useEffect(() => {
        let x = setInterval(function () {
            let now = new Date()
            let selisih = comingDate.getTime() - now.getTime()
    
            let days = Math.floor(selisih / (1000 * 60 * 60 * 24))
            let hours = Math.floor(selisih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
            let minutes = Math.floor(selisih % (1000 * 60 * 60) / (1000 * 60))
            let seconds = Math.floor(selisih % (1000 * 60) / 1000)
    
            dayRef.current.innerHTML = getTrueNumber(days)
            hrsRef.current.innerHTML = getTrueNumber(hours)
            minRef.current.innerHTML = getTrueNumber(minutes)
            secRef.current.innerHTML = getTrueNumber(seconds)
    
            if (selisih < 0) {
                clearInterval(x)
                dayRef.current.innerHTML = '00'
                hrsRef.current.innerHTML = '00'
                minRef.current.innerHTML = '00'
                secRef.current.innerHTML = '00'
            }
        }, 1000)

    })

   

    const getTrueNumber = (x) => {
        if (x < 10) return '0' + x
        else return x
    }

    return (
        <div className="page">
            <div className="countdown-col col">
                <div className="time middle">
                    <span><div ref={dayRef} id="days">00</div> Days</span>
                    <span><div ref={hrsRef} id="hours">00</div> Hours</span>
                    <span><div ref={minRef} id="minutes">00</div> Minutes</span>
                    <span><div ref={secRef} id="seconds">00</div> Seconds</span>
                </div>
            </div>
            <div className="newsletter-col col">
                <div className="newslatter middle">
                    <h2>We Will Coming Soon</h2>


                </div>
            </div>
        </div>
    )
}

export default ComingSoon