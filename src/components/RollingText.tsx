export default function RollingText({ children }: { children: string }) {
  return (
    <span className="roll-btn__label">
      <span className="roll-btn__text">{children}</span>
      <span className="roll-btn__text" aria-hidden="true">
        {children}
      </span>
    </span>
  );
}
