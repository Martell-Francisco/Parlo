import style from "./component.module.css"
import {DeleteFolderAction} from "./actions"


export default function DeleteFolder({id}){
    console.log("Folder Id Delete: "+ id)
return(
    <form  action="submit" className={style.formEditMode}>
        <input type="hidden" id="folderid" name="folderid" value={id} />
        <button formAction={DeleteFolderAction}>Delete Folder</button>
    </form>
)
}

