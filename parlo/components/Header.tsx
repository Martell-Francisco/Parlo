import Image from 'next/image'

export default function Header() {
  return (
    <div className="flex flex-col gap-16 items-center">
      <div className="flex gap-8 justify-center items-center">
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >honjknk
        </a> */}
        {/* <span className="border-l rotate-45 h-6" /> */}
        <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Ease Communication with visual representation 
        </p>
        <Image
        src="/landing_Example.png"
        width={500}
        height={500}
        alt="Picture of the author"
        />
      </div>

      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <div className="flex gap-8 justify-center items-center">
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >honjknk
        </a> */}
        {/* <span className="border-l rotate-45 h-6" /> */}

      <Image
      src="/landing_Folder.png"
      width={500}
      height={500}
      alt="Picture of Folders"
    />
            <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Organize everything into folders
      </p>
      </div>


      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
      <div className="flex gap-8 justify-center items-center">
        {/* <a
          href="https://supabase.com/?utm_source=create-next-app&utm_medium=template&utm_term=nextjs"
          target="_blank"
          rel="noreferrer"
        >honjknk
        </a> */}
        {/* <span className="border-l rotate-45 h-6" /> */}
        <p className="text-3xl lg:text-4xl !leading-tight mx-auto max-w-xl text-center">
        Add List with board items
      </p>
      <Image
      src="/landing_List.png"
      width={500}
      height={500}
      alt="Picture of Folders"
      />

      </div>
      
      
      <div className="w-full p-[1px] bg-gradient-to-r from-transparent via-foreground/10 to-transparent my-8" />
    </div>
  );
}
