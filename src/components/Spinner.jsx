import React from 'react'

const Spinner = () => {
    return (
        <div className="Spinner">
            <button class="btn btn-primary btn-lg " type="button" disabled>
                <span class="spinner-border "  aria-hidden="true"></span>
                Loading...
            </button>
        </div>
    )
}

export default Spinner
