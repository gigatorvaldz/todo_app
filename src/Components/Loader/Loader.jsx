import s from './Loader.module.css'

function Loader() {
    return (
        <div className={s.loaderWrapper}>
            <div className={s.loader}>
            </div>
        </div>

    );
}

export default Loader;