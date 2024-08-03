import style from "./component.module.css"
import {DeleteListAction} from "./actions"

export default function DeleteList({id}){
    console.log("List Id: "+ id)
return(
    <form  action="submit" className={style.formEditMode}>
        <input type="hidden" id="listid" name="listid" value={id} />
        <button formAction={DeleteListAction}>Delete List</button>
    </form>
)
}