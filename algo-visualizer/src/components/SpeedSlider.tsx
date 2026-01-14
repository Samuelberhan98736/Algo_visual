import { ChangeEvent, useId } from "react";

type Props = {
  speed: number;
  onChange: (speed: number) => void;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
};

export function SpeedSlider({
  speed,
  onChange,
  min = 100,
  max = 2000,
  step = 50,
  label = "Speed",
  disabled,
}: Props) {
  const sliderId = useId();

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(Number(event.target.value));
  };

  return (
    <div style={{ display: "grid", gap: 6 }}>
      <label
        htmlFor={sliderId}
        style={{ display: "flex", justifyContent: "space-between", gap: 12 }}
      >
        <span>{label}</span>
        <span>{speed} ms</span>
      </label>
      <input
        id={sliderId}
        type="range"
        min={min}
        max={max}
        step={step}
        value={speed}
        onChange={handleChange}
        disabled={disabled}
      />
    </div>
  );
}
