import React from 'react'
import './topicbox.css'

export default function TopicBox(props) {

    // dynamic components
    const topic = "My favatote food is koththu"
    const item = "and rice"
    const a = 350
    const b = 300
    const c = a + b
    const foodPrices = { "koththu": 350, "rice": 250 } // can not render objects

    //props-properties

    return (
        <div>
            <div className="topicBox">
                <span className='text'>
                    My favarite food is {props.food} and its price is {props.price}
                </span>
                {props.children}
                {/* {foodPrices} object and boolean values can not render from react */}
                {/* {alert("Thank you!")} */}
                {/* {[10,20,30,40]} */}
                {/* {topic} {item} and total price is {c} */}

            </div>
        </div>
    )
}
