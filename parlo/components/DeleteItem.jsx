import style from "./component.module.css"
import {DeleteItemAction} from "./actions"

export default function DeleteItem({id}){
    return(
        <form  action="submit" className={style.formEditMode}>
            <input type="hidden" id="itemid" name="itemid" value={id} />
            <button formAction={DeleteItemAction}>Delete Item</button>
        </form>
    )
}
