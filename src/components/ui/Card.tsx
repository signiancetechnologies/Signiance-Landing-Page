import type { HTMLAttributes } from "react";
import styles from "./Card.module.css";

type CardProps = HTMLAttributes<HTMLDivElement> & {
  kicker?: string;
  title?: string;
  body?: string;
  hero?: boolean;
};

/** Signiance DS Card: kicker, title and body on a bordered surface. */
export function Card({ kicker, title, body, hero = false, className, children, ...rest }: CardProps) {
  const cls = [styles.card, hero ? styles.hero : "", className ?? ""].filter(Boolean).join(" ");
  return (
    <div className={cls} {...rest}>
      {kicker ? <div className={styles.kicker}>{kicker}</div> : null}
      {title ? <h3 className={styles.title}>{title}</h3> : null}
      {body ? <p className={styles.body}>{body}</p> : null}
      {children}
    </div>
  );
}
