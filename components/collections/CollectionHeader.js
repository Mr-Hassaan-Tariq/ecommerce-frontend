import React from 'react'
import style from '../../styles/collection.module.css'
export default function CollectionHeader(props) {
    return (
        <div>

            <div class="d-flex justify-content-between pt-5">
                <div onClick={() => props.setFilterDrawerOpen(!props.filterDrawerOpen)}>
                    <p >Filter</p>
                </div>
                <div className='flex gap-2'>
                    <p onClick={() => props.setGridView(false)} className={`${style.viewLabel} ${!props.gridView && style.viewLabelSelected}`}>List view</p>
                    <p onClick={() => props.setGridView(true)} className={`${style.viewLabel} ${props.gridView && style.viewLabelSelected}`}>Grid view</p>
                </div>
                <div>
                    <select class={`form-select ${style.collectionSelect}`} aria-label="Default select example">
                        <option selected>Sorted by</option>
                        <option value="1">A-Z</option>
                        <option value="2">Z-A</option>
                    </select>
                </div>
            </div>
        </div>
    )
}
