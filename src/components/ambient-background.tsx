/** Fundo decorativo: manchas suaves em salva e creme que derivam muito devagar. */
export function AmbientBackground() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="ambient-blob ambient-blob-a -right-24 -top-24 h-80 w-80 bg-sage/35" />
      <div className="ambient-blob ambient-blob-b -bottom-32 -left-28 h-96 w-96 bg-sage-subtle/60" />
      <div className="ambient-blob ambient-blob-a left-1/2 top-1/3 h-56 w-56 -translate-x-1/2 bg-creme-light/70" />
      <div className="absolute -right-32 -top-32 h-72 w-72 rounded-full border border-sage/10" />
      <div className="absolute -bottom-40 -left-32 h-80 w-80 rounded-full border border-sage/10" />
    </div>
  );
}
