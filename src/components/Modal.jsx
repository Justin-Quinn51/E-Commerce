const Modal = ({ clickedImg, handleChangeRight, handleChangeLeft, setClickedImg }) => {

    const handleClick = (e) => {
        if(e.target.classList.contains('dismiss')) {
            setClickedImg(null)
        }
    }

    return (
        <>
            <div className='dismiss' onclick={handleClick}>
                <img src={clickedImg}/>
                <span className='dismiss' onclick={handleClick}></span>
                {/* <div onClick={handleChangeRight}>
                    <button>
                        <svg width="13" height="18" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="m2 1 8 8-8 8"
                                stroke="#1D2026"
                                stroke-width="3"
                                fill="none"
                                fill-rule="evenodd"
                            />
                        </svg>
                    </button>
                </div> */}
            </div>
        </>
    )
}

export default Modal