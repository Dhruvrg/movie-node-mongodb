"use client"

import React, { useState } from 'react'
import ImageUpload from './ImageUpload'
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Modal from './Modal';
import CreateModal from './CreateModel';
import Input from './Input';
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import axios from "axios";

const Add = () => {
    const [isLoading, setIsLoading] = useState(false);
    const createModal = CreateModal();
    const router = useRouter();

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
        reset,
      } = useForm<FieldValues>({
        defaultValues: {
          title: "",
          image: "",
          rating: 1,
          color:"rgba(61, 71, 99, 0.6)"
        },
      });
    
      const image = watch("image");

      const setCustomValue = (id: string, value: any) => {
        setValue(id, value, {
          shouldDirty: true,
          shouldTouch: true,
          shouldValidate: true,
        });
      };

      const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        axios
          .post("/api/movie", data)
          .then(() => {
            toast.success("Listing created!");
            router.refresh();
            reset();
            createModal.onClose();
          })
          .catch(() => {
            toast.error("Something went wrong.");
          })
          .finally(() => {
            setIsLoading(false);
          });
      };

      const bodyContent =(
      <div className="flex flex-col gap-5">
        <Input
          id="title"
          label="Title"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
        <Input
          id="rating"
          label="Rating"
          type="number"
          disabled={isLoading}
          register={register}
          errors={errors}
          required
        />
      <ImageUpload
       onChange={(value) => setCustomValue("image", value)}
       value={image}
     />
    </div>)

  return (<Modal
    disabled={isLoading}
    isOpen={createModal.isOpen}
    title="Add Movie!"
    actionLabel="Create"
    onSubmit={handleSubmit(onSubmit)}
    onClose={createModal.onClose}
    body={bodyContent}
  />)
}

export default Add
