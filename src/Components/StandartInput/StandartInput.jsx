import s from "./StandartInput.module.css"

function StandartInput({children, ...props}) {
    return (
      <div className={s.inputWrapper}>
        <input className={s.input} type="text" {...props}></input>
      </div>
    );
  }

export default StandartInput;