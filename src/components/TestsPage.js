import React, { Component } from 'react'
import TestBox from "./TestBox"


class TestsPage extends Component {
    render() {
        const tests = [
            { title: "פגיעות אקלים", image: '/images/dehydration.png' },
            { title: "פגיעות בעלי חיים", image: '/images/animalsTest.gif' },
            { title: "עצירת דימומים וחבישות", image: '/images/head_dressing.jpg' },
            { title: "החייאות וחנק", image: '/images/cpr_adult.jpg' }
        ]
        return (
            <div className="ContentBody2">
              <h1>תרגול מבחנים</h1>
                <p>בחר קטגוריה עליה תרצה להיבחן</p>
                <ul>
                    {
                        tests.map((box) =>
                            <li key={box.title}> <TestBox  title={box.title} image={box.image} /> </li>)
                    }
                </ul>
            </div>
        )
    }
}
export default TestsPage