"use client"
import style from "./component.module.css"
import { createClient } from "@/utils/supabase/client";
import { useState } from "react";
//import {addList} from "./actions"



export default function Search(){
    const [searchData, setSearchData] = useState("");
    const [sdata, setsData] = useState([]);
    const handleSearchChange = (e) => {
        setSearchData(e.target.value)
    }
    const handleSubmit = async ()=>{
        const supabase = createClient();
        //let { data:items, error } = await supabase.from('items').select('*').textSearch('name', searchData)
        
        let { data: items, error } = await supabase
        .from('items')
        .select('*')
        .ilike("name", `%${searchData}%`)
        //const { data: items, error } = await supabase.rpc('name', { prefix: 'sp' })

        
        setsData(items);
        console.log("search Data: "+searchData)
        console.log(items)
        return false;

    }
    return(
        <div>
            <form className={style.form} action="submit">
                <label className={style.label} htmlFor="search"></label>
                <input id="search" name="search" type="text"onChange={handleSearchChange} value={searchData} placeholder={"search items..."} required />
                <button formAction={handleSubmit}>Search</button>
            </form>

            {
            (sdata !== null) && sdata.map((sdatas)=>(
                  <div key={sdatas.id} >
                    {sdatas.name}
                    
                    </div>
                    
                    
            ))}
        </div>
        

    )
}