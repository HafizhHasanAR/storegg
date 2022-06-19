interface inputProps {
  label: string;
  label2: string;
}
export default function Input(props: inputProps) {
  const { label, label2, ...nativeProps } = props;
  return (
    <>
      <label
        htmlFor="name"
        className="form-label text-lg fw-medium color-palette-1 mb-10"
      >
        {label}
      </label>
      <input
        type="text"
        className="form-control rounded-pill text-lg"
        id="name"
        name="name"
        aria-describedby="name"
        placeholder={label2}
        {...nativeProps}
      />
    </>
  );
}
