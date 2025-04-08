export default function ListContainer({ list }) {
  return (
    <div className="list-container">
      <h2 className="list-heading">Список:</h2>
      {list.length === 0 ? (
        <p className="no-margin-text">Нет добавленных элементов</p>
      ) : (
        <ul className="list">
          {list.map((item, index) => (
            <li key={index} className="list-item">
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
