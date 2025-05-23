export default function Heading({ value }) {
  return (
    <>
      <h1 className="page-heading">Ввод значения</h1>
      <p className="no-margin-text">
        Текущее значение <code>value</code>: 
        <output className="current-value">"{value}"</output>
      </p>
    </>
  );
}
