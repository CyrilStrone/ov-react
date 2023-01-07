import "../Styles/Help.css";

export const Help = () => {
  return (
    <div className="Help">
      <div className="Help__Top">
        <div className="Help__Top__Title">
        Если вы что-то не нашли, то мы сможем вам помочь:

        </div>
        <input type="text" />
      </div>
      <div className="Help__Button">
        <button>Искать</button>
      </div>
    </div>
  );
};
