"use client"

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { db, storage } from "@/firebase"
import { useAppStore } from "@/store/store"
import { useUser } from "@clerk/nextjs"
import { deleteDoc, doc } from "firebase/firestore"
import { ref , deleteObject} from "firebase/storage"
import { toast } from "react-hot-toast"

export function DeleteModal() {
    const {user} = useUser();
    const [isDeleteModalOpen , setIsDeleteModalOpen , fileId , setFileId] = 
     useAppStore((state) =>[
        state.isDeleteModalOpen,
        state.setIsDeleteModalOpen,
        state.fileId,
        state.setFileId
     ])

     async function deleteFile() {
        if(!user || !fileId) return;

        const toastId = toast.loading("Deleting...");
        const fileRef = ref(storage , `users/${user.id}/files/${fileId}`);

        try{

            deleteObject(fileRef) .then(async () => {
                deleteDoc(doc(db , "users", user.id , "files" , fileId)).then(() =>{

                toast.success("Deleted Successfully" , {
                     id:toastId,
                });

               });
            })
            .finally(()=>{
                 setIsDeleteModalOpen(false);
            })

        } catch(error){
         setIsDeleteModalOpen(false);

         toast.error("Something went wrong" , {
            id:toastId,
         });
         
        }
     }


  return (
    <Dialog
         open={isDeleteModalOpen}
           onOpenChange = {(isOpen: boolean) => {
                setIsDeleteModalOpen(isOpen)
           }}
     >
     <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Are you sure want to delete?</DialogTitle>
          <DialogDescription>
            This action can&apos;t be undone.This will permanantly delete your file!
          </DialogDescription>
        </DialogHeader>


        <div className="flex space-x-2 py-3">
        <Button
            size="sm"
            className="px-3 flex-1"
            variant={"ghost"}
            onClick={()=> setIsDeleteModalOpen(false)}
            >
                <span className="sr-only">Cancel</span>
                <span>Cancel</span>
             </Button>

             <Button
            type="submit"
            size="sm"
            className="px-3 flex-1"
            variant={"destructive"}
            onClick={()=> deleteFile()}
            >
                <span className="sr-only">Delete</span>
                <span>Delete</span>
             </Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

export default DeleteModal

