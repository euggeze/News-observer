import React from 'react'
import '../../styles/Pagination.css'

const BlockPagination = (change_page) => {
    return <div>
        <button className='PaginateButton' onClick={() => change_page.change_page('Previous')}>
            Previous
        </button>
        <button className='PaginateButton' onClick={() => change_page.change_page('Next')}>
            Next
        </button>
    </div>
}

export default BlockPagination;