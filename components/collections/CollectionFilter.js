import React from 'react'


import Styles from '../../styles/TopNav.module.css'
import style from '../../styles/collection.module.css'
export default function CollectionFilter(props) {
    return (
        <div >

            <div className="desktop_container">
                <div className="desktop_signup">
                    <div className={style.collectionFilter}>

                        <div class="register">
                            <h3>FILTER</h3>
                            <img
                                className={Styles.flip_on_hover}
                                onClick={()=>props.setFilterDrawerOpen(false)}
                                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdmlld0JveD0iMCAwIDIwIDIwIj48ZGVmcz48c3R5bGU+LmF7ZmlsbDojZmZmO29wYWNpdHk6MDt9LmJ7ZmlsbDojMmYyZjJmO308L3N0eWxlPjwvZGVmcz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxNzggLTg5KSI+PHJlY3QgY2xhc3M9ImEiIHdpZHRoPSIyMCIgaGVpZ2h0PSIyMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTE3OCA4OSkiLz48ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgtMTc3IDkwKSI+PHBhdGggY2xhc3M9ImIiIGQ9Ik0xOSwxLjksMTcuMSwwLDkuNSw3LjYsMS45LDAsMCwxLjksNy42LDkuNSwwLDE3LjEsMS45LDE5bDcuNi03LjZMMTcuMSwxOSwxOSwxNy4xLDExLjQsOS41WiIvPjwvZz48L2c+PC9zdmc+"
                            />
                        </div>
                        <hr />

                        <div>
                            <p>Availability</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
