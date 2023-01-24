import s from "./StandartButton.module.css"

function StandartButton({children, ...props}) {
    return (
      <div className={s.buttonWrapper}>
        <button className={s.standartButton} {...props}>
            {children}
        </button>
      </div>
    );
  }

export default StandartButton;