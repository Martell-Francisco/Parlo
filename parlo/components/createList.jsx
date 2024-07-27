import style from "./component.module.css"
import {addList} from "./actions"


export default function CreateList({id}){

    return(
        // <div onClick={() => router.back()}>Go Back</div>
        <form className={style.form} action="submit">
            <label className={style.label} htmlFor="folderName">Add List: </label>
            <input id="flistName" name="listName" type="text" placeholder={"list Name"} required />
            <input type="hidden" id="parentid" name="parentid" value={id} />
            <button formAction={addList}>add</button>
        </form>
    )
}