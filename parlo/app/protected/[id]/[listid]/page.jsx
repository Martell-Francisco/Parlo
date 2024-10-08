import { createClient } from "@/utils/supabase/server";
import styles from "../../protected.module.css"
import { notFound } from "next/navigation";
import AuthButton from "@/components/AuthButton";
import Speak from "../../../../components/speak";
//import Speak from "@/components/Speak";
import BackButton from "@/components/backButton";

async function getList(id){

    const supabase = createClient()

    let { data: list_item, error } = await supabase
    .from('list_item')
    .select(`
            *,
            items (
              *
            )
        `)
    .eq("listid", id)

    if(!list_item){
        
        notFound();
    }
    return list_item;
}

export default async function Groupstuff({params}){
    const list = await getList(params.listid)
    console.log(list)

    console.log("listid: " + params.listid)
    const text="hello People"


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

        
        <div className={styles.listContainer}>
            {list.map((lists)=>(
                  <div className={styles.cont} key={lists.id} >
                    
                    <div className={styles.listItem}>
                      <div className={styles.imgIconList}>
                        <img src={lists.items.image}/>
                        <Speak text={lists.items.name}/>
                        
                      </div>
                      <h1 className={styles.h1}>{lists.items.name}</h1>
                      
                    </div>
                    
                    {/* <Group groupid={groups.id}/> */}
                    </div>
                    
                    
            ))}
        </div>
        
        <p>Testing Owner Stuff</p>

        <footer className="w-full border-t border-t-foreground/10 p-8 flex justify-center text-center text-xs">
        <p>
          Powered by{" "}
          <a
            href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
            target="_blank"
            className="font-bold hover:underline"
            rel="noreferrer"
          >
            Supabase
          </a>
        </p>
      </footer>
    </div>
)
}