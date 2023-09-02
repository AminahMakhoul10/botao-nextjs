import style from "./styles.module.css"


export default function Botao({children, ...props}){
    return(
        <>
            <button type="submit" className={style.botao} {...props}>
                {children}
            </button>
        </>
    )
}