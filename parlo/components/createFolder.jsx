import style from "./component.module.css"
import {addFolder} from "./actions"


export default function CreateFolder({id}){

    return(
        // <div onClick={() => router.back()}>Go Back</div>
        <form  action="submit" className={style.form}>
            <label className={style.label} htmlFor="folderName">Add Folder: </label>
            <input id="folderName" name="folderName" type="text" placeholder={"Folder Name"} required />
            <input type="hidden" id="parentid" name="parentid" value={id} />
            <button formAction={addFolder}>add</button>
        </form>
    )
}