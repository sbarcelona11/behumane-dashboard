import classname from "classnames";

const Typography = ({ type, textColor, children }) => {
  return type === "h1" ? (
    <h1
      className={classname("text-4xl", textColor && textColor, "font-semibold")}
    >
      {children}
    </h1>
  ) : type === "h2" ? (
    <h2
      className={classname("text-3xl", textColor && textColor, "font-semibold")}
    >
      {children}
    </h2>
  ) : type === "h3" ? (
    <h3
      className={classname("text-2xl", textColor && textColor, "font-semibold")}
    >
      {children}
    </h3>
  ) : type === "h4" ? (
    <h4
      className={classname("text-xl", textColor && textColor, "font-semibold")}
    >
      {children}
    </h4>
  ) : type === "h5" ? (
    <h5
      className={classname("text-lg", textColor && textColor, "font-semibold")}
    >
      {children}
    </h5>
  ) : type === "h6" ? (
    <h6
      className={classname(
        "text-base",
        textColor && textColor,
        "font-semibold",
      )}
    >
      {children}
    </h6>
  ) : type === "p" ? (
    <p
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </p>
  ) : type === "span" ? (
    <span
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </span>
  ) : type === "small" ? (
    <small
      className={classname("text-sm", textColor && textColor, "font-normal")}
    >
      {children}
    </small>
  ) : type === "label" ? (
    <label
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </label>
  ) : type === "caption" ? (
    <caption
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </caption>
  ) : type === "blockquote" ? (
    <blockquote
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </blockquote>
  ) : type === "cite" ? (
    <cite
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </cite>
  ) : type === "pre" ? (
    <pre
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </pre>
  ) : type === "code" ? (
    <code
      className={classname("text-base", textColor && textColor, "font-normal")}
    >
      {children}
    </code>
  ) : null;
};

export default Typography;
