type Props = {
    onPlay: () => void;
    onPause: () => void;
    onNext: () => void;
    onPrev: () => void;
    onReset: () => void;
    isPlaying: () => boolean;
    
};


export function Controls({

    onPlay,
    onPause,
    onNext,
    onPrev,
    onReset,
    isPlaying,

}:Props

){
    return(
        <div style = {{display: "flex", gap: 10}}>
            <button onClick={onPrev}> ◀ PREV</button>
            {isPlaying ? (
                <button onClick={onPause}> ⏸ Pause</button>
            ):(
                <button onClick = {onPlay}> ▶ Play</button>
            )}

            <button onClick = {onNext}>Next</button>
            <button onClick = {onReset}>Reset </button>

        </div>
    );
}



