type Props = {
  onPlay: () => void;
  onPause: () => void;
  onNext: () => void;
  onPrev: () => void;
  onReset: () => void;
  isPlaying: boolean;
  disabled?: boolean;
};

export function Controls({
  onPlay,
  onPause,
  onNext,
  onPrev,
  onReset,
  isPlaying,
  disabled,
}: Props) {
  const handlePlayPause = isPlaying ? onPause : onPlay;
  const playPauseLabel = isPlaying ? "Pause" : "Play";

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", gap: 10, alignItems: "center" }}
    >
      <button type="button" onClick={onPrev} disabled={disabled}>
        Prev
      </button>
      <button
        type="button"
        onClick={handlePlayPause}
        aria-pressed={isPlaying}
        disabled={disabled}
      >
        {playPauseLabel}
      </button>
      <button type="button" onClick={onNext} disabled={disabled}>
        Next
      </button>
      <button type="button" onClick={onReset} disabled={disabled}>
        Reset
      </button>
    </div>
  );
}
