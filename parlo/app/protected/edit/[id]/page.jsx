
import { createClient } from "@/utils/supabase/server";
import styles from "../../protected.module.css"
import Link from "next/link"
import { notFound } from "next/navigation";
import AuthButton from "@/components/AuthButton";
import BackButton from "@/components/backButton";
import CreateFolder from "@/components/createFolder";
import CreateList from "@/components/createList";
import DeleteList from "@/components/DeleteList";
import DeleteFolder from "@/components/DeleteFolder";



async function getGroup(id){

    const supabase = createClient()

    let { data: group, groupError } = await supabase
    .from('group')
    .select('*')
    .eq("parentid", id)
    .neq("group_id",id)

    if(!group){
        
        notFound();
    }
    return group;
}
async function getList(id){

    const supabase = createClient()

    let { data: list, listError } = await supabase
    .from('list')
    .select('*')
    .eq("group_id", id)

    if(!list){
        
        notFound();
    }
    return list;
}

export default async function Groupstuff({params}){
    const group = await getGroup(params.id)
    const list = await getList(params.id)
    //const supabase = createClient()
    //const {data} = await supabase.auth.getUser()
    console.log("id " + params.id)

return (
    <div className="flex-1 w-full flex flex-col gap-20 items-center">
        <div className="w-full">
        <nav className="w-full flex justify-center border-b border-b-foreground/10 h-16">
          <div className="w-full max-w-4xl flex justify-between items-center p-3 text-sm">
          <BackButton/>
            <AuthButton />
          </div>
        </nav>
        </div>
        <div className={styles.editModeContainer}>
          <div className={styles.editModeGroup}>
          <div className={styles.editModeFolderContainer}>
            {group.map((groups)=>(
                <div key={groups.group_id}  className={styles.editModeMain}>
                  <Link  href={`/protected/edit/${groups.group_id}`}>
                    <div className={styles.editModeFolder}>
                        
                        {/* <img src="https://ycyphowutdosebffyzaq.supabase.co/storage/v1/object/public/perlo/man_eating_food.png?t=2024-07-23T16%3A18%3A59.374Z" alt="" /> */}
                        <img alt="svgImg" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4IiB3aWR0aD0iMjU2IiBoZWlnaHQ9IjI1NiIgdmlld0JveD0iMCAwIDMyIDMyIj4KPGxpbmVhckdyYWRpZW50IGlkPSJLQTNpUG5KRjJscXQ3VTItVy1Wb25hX29pQ0EzMjdSOEFEcV9ncjEiIHgxPSIxNiIgeDI9IjE2IiB5MT0iNC45MDUiIHkyPSIyNy4wMSIgZ3JhZGllbnRVbml0cz0idXNlclNwYWNlT25Vc2UiPjxzdG9wIG9mZnNldD0iMCIgc3RvcC1jb2xvcj0iIzAwYjVmMCI+PC9zdG9wPjxzdG9wIG9mZnNldD0iMSIgc3RvcC1jb2xvcj0iIzAwOGNjNyI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNLQTNpUG5KRjJscXQ3VTItVy1Wb25hX29pQ0EzMjdSOEFEcV9ncjEpIiBkPSJNMjYsMjdINmMtMS4xMDUsMC0yLTAuODk1LTItMlY3YzAtMS4xMDUsMC44OTUtMiwyLTJoNC4wMjdjMC42MjMsMCwxLjIyLDAuMjQ3LDEuNjYsMC42ODgJbDAuNjI0LDAuNjI0QzEyLjc1Myw2Ljc1MywxMy4zNSw3LDEzLjk3Myw3SDI2YzEuMTA1LDAsMiwwLjg5NSwyLDJ2MTZDMjgsMjYuMTA1LDI3LjEwNSwyNywyNiwyN3oiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IktBM2lQbkpGMmxxdDdVMi1XLVZvbmJfb2lDQTMyN1I4QURxX2dyMiIgeDE9IjE2IiB4Mj0iMTYiIHkxPSI1IiB5Mj0iMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3Atb3BhY2l0eT0iLjAyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9Ii4xNSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNLQTNpUG5KRjJscXQ3VTItVy1Wb25iX29pQ0EzMjdSOEFEcV9ncjIpIiBkPSJNMjYsN0gxMy45NzMJYy0wLjYyMywwLTEuMjItMC4yNDctMS42Ni0wLjY4OGwtMC42MjUtMC42MjVDMTEuMjQ3LDUuMjQ3LDEwLjY1LDUsMTAuMDI3LDVINkM0Ljg5NSw1LDQsNS44OTUsNCw3djE4YzAsMS4xMDUsMC44OTUsMiwyLDJoMjAJYzEuMTA1LDAsMi0wLjg5NSwyLTJWOUMyOCw3Ljg5NSwyNy4xMDUsNywyNiw3eiBNMjcuNzUsMjVjMCwwLjk2NS0wLjc4NSwxLjc1LTEuNzUsMS43NUg2Yy0wLjk2NSwwLTEuNzUtMC43ODUtMS43NS0xLjc1VjcJYzAtMC45NjUsMC43ODUtMS43NSwxLjc1LTEuNzVoNC4wMjdjMC41NiwwLDEuMDg3LDAuMjE4LDEuNDg0LDAuNjE1bDAuNjI1LDAuNjI1YzAuNDkxLDAuNDkxLDEuMTQzLDAuNzYxLDEuODM3LDAuNzYxSDI2CWMwLjk2NSwwLDEuNzUsMC43ODUsMS43NSwxLjc1VjI1eiI+PC9wYXRoPjxsaW5lYXJHcmFkaWVudCBpZD0iS0EzaVBuSkYybHF0N1UyLVctVm9uY19vaUNBMzI3UjhBRHFfZ3IzIiB4MT0iMTYiIHgyPSIxNiIgeTE9IjguOTIyIiB5Mj0iMjcuMDA4IiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdG9wLWNvbG9yPSIjMDBkY2ZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIuODU5IiBzdG9wLWNvbG9yPSIjMDBiZmZmIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLWNvbG9yPSIjMDBhOGUwIj48L3N0b3A+PC9saW5lYXJHcmFkaWVudD48cGF0aCBmaWxsPSJ1cmwoI0tBM2lQbkpGMmxxdDdVMi1XLVZvbmNfb2lDQTMyN1I4QURxX2dyMykiIGQ9Ik0yNywyN0g1Yy0xLjEwNSwwLTItMC44OTUtMi0yVjExCWMwLTEuMTA1LDAuODk1LTIsMi0yaDIyYzEuMTA1LDAsMiwwLjg5NSwyLDJ2MTRDMjksMjYuMTA1LDI4LjEwNSwyNywyNywyN3oiPjwvcGF0aD48bGluZWFyR3JhZGllbnQgaWQ9IktBM2lQbkpGMmxxdDdVMi1XLVZvbmRfb2lDQTMyN1I4QURxX2dyNCIgeDE9IjE2IiB4Mj0iMTYiIHkxPSI5IiB5Mj0iMjciIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIj48c3RvcCBvZmZzZXQ9IjAiIHN0b3Atb3BhY2l0eT0iLjAyIj48L3N0b3A+PHN0b3Agb2Zmc2V0PSIxIiBzdG9wLW9wYWNpdHk9Ii4xNSI+PC9zdG9wPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggZmlsbD0idXJsKCNLQTNpUG5KRjJscXQ3VTItVy1Wb25kX29pQ0EzMjdSOEFEcV9ncjQpIiBkPSJNMjcsOUg1Yy0xLjEwNSwwLTIsMC44OTUtMiwydjE0CWMwLDEuMTA1LDAuODk1LDIsMiwyaDIyYzEuMTA1LDAsMi0wLjg5NSwyLTJWMTFDMjksOS44OTUsMjguMTA1LDksMjcsOXogTTI4Ljc1LDI1YzAsMC45NjUtMC43ODUsMS43NS0xLjc1LDEuNzVINQljLTAuOTY1LDAtMS43NS0wLjc4NS0xLjc1LTEuNzVWMTFjMC0wLjk2NSwwLjc4NS0xLjc1LDEuNzUtMS43NWgyMmMwLjk2NSwwLDEuNzUsMC43ODUsMS43NSwxLjc1VjI1eiI+PC9wYXRoPgo8L3N2Zz4="/>
                        <h2 className={styles.editModeh2}>{groups.name}</h2>
                    </div>
       
                    {/* <Group groupid={groups.id}/> */}
                    
                  </Link>
                  <DeleteFolder id = {groups.group_id}/>
                </div>
                    
            ))}
            </div>
             <div className={styles.editModeFolderContainer}>
            {list.map((lists)=>(
                <div key={lists.id} className={styles.editModeMain}>
                  <Link  href={`/protected/edit/${params.id}/${lists.id}`}>
                    <div className={styles.editModeFolder}>
                        <img alt="svgImg" src="/list.svg"/>
                        <h2 className={styles.editModeh2}>{lists.name}</h2>
                    </div>
                   
                    </Link>
                    <DeleteList id ={lists.id}/>
       
                </div>
                    
            ))}
          </div>
          </div>
          <div className={styles.editModeSearch}>
                  <CreateFolder  id={params.id}/>
                  <CreateList id={params.id}/>
          </div>
        </div>
       
        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Friendship
          </a>
        </p>
      </footer>
    </div>
)
}