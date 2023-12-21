const SlideNextButton = ({handle})  => {
    return (
        <button className="rotate-180" onClick={() => handle()}>
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow-right-circle">
                    <path id="Vector"
                          d="M15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 22.4036 8.09644 28 15 28C21.9036 28 27.5 22.4036 27.5 15.5C27.5 8.59644 21.9036 3 15 3Z"
                          stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M20 15.5L10 15.5" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path id="Vector_3" d="M15 10.5L10 15.5L15 20.5" stroke="#7E7E7E" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
        </button>
    );
}
const SlidePrevButton = ({handle}) => {
    return (
        <button onClick={() => handle()}>
            <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="arrow-right-circle">
                    <path id="Vector"
                          d="M15 3C8.09644 3 2.5 8.59644 2.5 15.5C2.5 22.4036 8.09644 28 15 28C21.9036 28 27.5 22.4036 27.5 15.5C27.5 8.59644 21.9036 3 15 3Z"
                          stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path id="Vector_2" d="M20 15.5L10 15.5" stroke="#7E7E7E" strokeWidth="2" strokeLinecap="round"
                          strokeLinejoin="round"/>
                    <path id="Vector_3" d="M15 10.5L10 15.5L15 20.5" stroke="#7E7E7E" strokeWidth="2"
                          strokeLinecap="round" strokeLinejoin="round"/>
                </g>
            </svg>
        </button>
    );
}

export {
    SlideNextButton,
    SlidePrevButton
}
