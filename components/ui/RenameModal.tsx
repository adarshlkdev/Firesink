"use client"

import { Button } from "@/components/ui/button"
import {Input} from "@/components/ui/input"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { db } from "@/firebase"
import { useAppStore } from "@/store/store"
import { useUser } from "@clerk/nextjs"
import { doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import toast from "react-hot-toast"

function RenameModal(){
    const {user} = useUser();
    const [input , setInput] = useState("")
    const [isRenameModalOpen , setIsRenameModalOpen , fileId , filename] = 
     useAppStore((state) =>[
        state.isRenameModalOpen,
        state.setIsRenameModalOpen,
        state.fileId,
        state.filename
     ]);

     const renameFile = async () => {
        if(!user || !fileId) return;

        const toastId = toast.loading("Renaming...");
       
        await updateDoc(doc(db , "users" , user.id , "files" , fileId),{
              filename : input,
              
        });

        toast.success("Renamed Successfully" , {
            id:toastId,
        });

        setInput("");
        setIsRenameModalOpen(false);
     };

    return (
        <Dialog
         open={isRenameModalOpen}
           onOpenChange = {(isOpen: boolean) => {
                setIsRenameModalOpen(isOpen)
           }}
     >
     <DialogContent>
        <DialogHeader>
          <DialogTitle className="pb-2">Rename the file</DialogTitle>
          
          <Input
            id="link"
            defaultValue={filename}
            onChange={(e) => setInput(e.target.value)}
            onKeyDownCapture={(e) => {
                if(e.key === "Enter"){
                    renameFile();
                }
            }}
            />


        <div className="flex space-x-2 py-3">
        <Button
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={()=> setIsRenameModalOpen(false)}
            >
                <span className="sr-only">Cancel</span>
                <span>Cancel</span>
             </Button>

             <Button
            type="submit"
            size="sm"
            className="px-3 flex-1"
            onClick={()=> renameFile()}
            >
                <span className="sr-only">Rename</span>
                <span>Rename</span>
             </Button>
        </div>

        </DialogHeader>
      </DialogContent>
    </Dialog>
    )
}

export default RenameModal 