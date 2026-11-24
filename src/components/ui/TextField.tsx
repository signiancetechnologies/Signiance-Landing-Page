import { useId, type InputHTMLAttributes, type SelectHTMLAttributes } from "react";
import styles from "./TextField.module.css";

type Common = {
  label: string;
  hint?: string;
  error?: string;
};

type InputProps = Common & { as?: "input" } & InputHTMLAttributes<HTMLInputElement>;
type SelectProps = Common & { as: "select"; options: string[] } & SelectHTMLAttributes<HTMLSelectElement>;

/** Signiance DS TextField: label + input/select + hint or error. */
export function TextField(props: InputProps | SelectProps) {
  const autoId = useId();
  const { label, hint, error, id = autoId } = props;
  const describedBy = error || hint ? `${id}-desc` : undefined;
  const controlCls = [styles.control, error ? styles.invalid : ""].filter(Boolean).join(" ");

  let control;
  if (props.as === "select") {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, options, label: _l, hint: _h, error: _e, ...rest } = props;
    control = (
      <select {...rest} id={id} className={controlCls} aria-describedby={describedBy}>
        {options.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    );
  } else {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { as, label: _l, hint: _h, error: _e, ...rest } = props;
    control = (
      <input
        {...rest}
        id={id}
        className={controlCls}
        aria-invalid={error ? true : undefined}
        aria-describedby={describedBy}
      />
    );
  }

  return (
    <div className={styles.field}>
      <label htmlFor={id} className={styles.label}>
        {label}
      </label>
      {control}
      {error ? (
        <div id={describedBy} className={styles.error}>
          {error}
        </div>
      ) : hint ? (
        <div id={describedBy} className={styles.hint}>
          {hint}
        </div>
      ) : null}
    </div>
  );
}
