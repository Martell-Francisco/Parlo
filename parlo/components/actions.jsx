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

  export async function search(formData) {
    const supabase = createClient()
    
    const data = {
        listName: formData.get('listName')
      }

    const { addData, error } = await supabase
    .from('list')
    .insert([
    { name: data.listName, group_id: data.group_id },
    ])
    .select()
    revalidatePath('/')
  }