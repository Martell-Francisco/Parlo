'use server'

import { revalidatePath } from 'next/cache'
import { createClient } from '@/utils/supabase/server'



export async function addFolder(formData) {
    const supabase = createClient()
    
    const data = {
        folderName: formData.get('folderName'),
        parentID: formData.get('parentid')
      }

    const { addData, error } = await supabase
    .from('group')
    .insert([
    { name: data.folderName, parentid: data.parentID },
    ])
    .select()
    revalidatePath('/')
  }


export async function addList(formData) {
    const supabase = createClient()
    
    const data = {
        listName: formData.get('listName'),
        group_id: formData.get('parentid')
      }

    const { addData, error } = await supabase
    .from('list')
    .insert([
    { name: data.listName, group_id: data.group_id },
    ])
    .select()
    revalidatePath('/')
  }

  export async function LinkItems(formData) {
    const supabase = createClient()
    
    const data = {
        listid: formData.get('listid'),
        itemid: formData.get('itemid')
      }
      console.log("ListID: " + data.listid + "    ItemID: " + data.itemid)
    
    const { error } = await supabase
    .from('list_item')
    .upsert({ itemid: data.itemid, listid: data.listid })
    .select()
            
    revalidatePath('/')
  }

  export async function DeleteItemAction(formData) {
    const supabase = createClient()
    
    const data = {
        itemid: formData.get('itemid')
      }
      console.log("ListID: " + data.listid + "    ItemID: " + data.itemid)
      const { error } = await supabase
      .from('list_item')
      .delete()
      .eq('id', data.itemid)
              
            
    revalidatePath('/')
  }

  export async function DeleteListAction(formData) {
    const supabase = createClient()
    
    const data = {
        listid: formData.get('listid')
      }
      const { error } = await supabase
      .from('list')
      .delete()
      .eq('id', data.listid)
              
              
            
    revalidatePath('/')
  }

  export async function DeleteFolderAction(formData) {
    const supabase = createClient()
    
    const data = {
        group_id: formData.get('folderid')
      }
      const { error } = await supabase
      .from('group')
      .delete()
      .eq('group_id', data.group_id)
              
              
            
    revalidatePath('/')
  }