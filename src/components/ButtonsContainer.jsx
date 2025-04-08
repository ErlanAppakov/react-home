export default function ButtonsContainer({
  setError,
  setValue,
  addToList,
  value,
}) {
  function handleClick() {
    const enterValue = prompt("введите название");
    if (enterValue && enterValue.length >= 3) {
      setValue(enterValue);
      setError("");
    } else {
      setError("Введенное значение должно содержать минимум 3 символа");
    }
  }
  
  return (
    <div className="buttons-container">
      <button className="button" onClick={handleClick}>
        Ввести новое
      </button>
      <button
        className="button"
        onClick={addToList}
        disabled={value.length < 3}
      >
        Добавить в список
      </button>
    </div>
  );
}
