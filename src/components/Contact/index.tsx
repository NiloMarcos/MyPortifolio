import { useForm } from "react-hook-form";

import { MdAttachEmail } from "react-icons/md";

export function Contact() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = ({ data }: any) => console.log(data);;

  return (
    <div className="flex items-center justify-center flex-col w-full max-w-[1240px] mx-auto mt-[60px] px-[20px] lg:mt-[105px]">
      <p className="text-[20px] font-extrabold text-[white] font-[inter] uppercase lg:text-[40px] leading-none">Contatos</p>
      
      <p className="text-transparent bg-clip-text bg-gradient-to-r from-[#9C83FF] via-[#9C83FF] to-[#FF9051] text-[14px] font-semibold uppercase">
        My contacts
      </p>

      <div className="flex w-full gap-5">
        <div className="flex items-center flex-col justify-between w-full max-w-[350px] gap-4 my-5">
          <div className="flex flex-col gap-3 border border-light-gray rounded-md p-4 w-full max-w-[350px]">
            <MdAttachEmail size={30} color="#FFF" />

            <p className="text-[16px] font-medium text-[white] font-[inter] uppercase leading-none">Email</p>
            <p className="text-white">nilofmarcos@gmail.com</p>
          </div>

          <div className="flex flex-col gap-3 border border-light-gray rounded-md p-4 w-full max-w-[350px]">
            <MdAttachEmail size={30} color="#FFF" />

            <p className="text-[16px] font-medium text-[white] font-[inter] uppercase leading-none">Email</p>
            <p className="text-white">nilofmarcos@gmail.com</p>
          </div>

          <div className="flex flex-col gap-3 border border-light-gray rounded-md p-4 w-full max-w-[350px]">
            <MdAttachEmail size={30} color="#FFF" />

            <p className="text-[16px] font-medium text-[white] font-[inter] uppercase leading-none">Email</p>
            <p className="text-white">nilofmarcos@gmail.com</p>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col items-center justify-center gap-4 w-full max-w-[800px] p-3">
          <input
            placeholder="Nome Completo"
            className="w-full h-10 border p-2 outline-none border-light-gray text-[14px] rounded-md bg-transparent text-white placeholder-[#949494]"
            defaultValue=""
            {...register("name", { required: true } )}
          />
          
          {errors.name && <span className="w-full text-red-600">Name is required</span>}

          <input
            placeholder="Email"
            className="w-full h-10 border p-2 outline-none border-light-gray text-[14px] rounded-md bg-transparent text-white placeholder-[#949494]"
            defaultValue=""
            {...register("email", { required: true } )}
          />
          
          {errors.email && <span className="w-full text-red-600">Email is required</span>}

          <input
            placeholder="Descrição"
            className="w-full h-10 border p-2 outline-none border-light-gray text-[14px] rounded-md bg-transparent text-white placeholder-[#949494]"
            defaultValue=""
            {...register("description", { required: true } )}
          />
          
          {errors.description && <span className="w-full text-red-600">description is required</span>}
          
          <input 
            type="submit"
            className="w-full max-w-[250px] h-10 rounded-md cursor-pointer text-white border border-white color-white"
            
          />
        </form>
      </div>
    </div>
  );
}