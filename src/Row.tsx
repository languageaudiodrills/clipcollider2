import "./Row.css";

const Row = (p: { name: string; children: React.ReactNode; id?: string }) => {
  const { name, children, id } = p;

  return (
    <div className="Row" id={id}>
      <div className="column">{name}</div>
      <div className="column">{children}</div>
    </div>
  );
};

export default Row;
