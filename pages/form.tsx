import Image from 'next/image'
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';

const form = () => {

  

 

  const { register, handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = handleSubmit((data) => {
    toast.success('Form success ');
    console.log(data)
  })

  return (
    <main
      className='flex items-center justify-center w-screen bg-zinc-50 h-screen w-full '
    >
      <div>
        <form onSubmit={onSubmit} className='flex flex-col space-y-4 p-5 text-zinc-800 text-medium bg-zinc-200 rounded-xl'>

          <span className='flex flex-col'>
            <label>
              Name
            </label>
            <input type="text" className='rounded-lg p-1' placeholder='Pepito Pérez'
              {...register('name', {
                required: {
                  value: true,
                  message: 'The name is required'
                }
              })}
            />
            {
              errors.name && errors.name.message ? (
                <span className='block text-red-400 text-xs'>{String(errors.name.message)}</span>
              ) : null
            }
          </span>

          <span className='flex flex-col'>
            <label>
              Email
            </label>
            <input type="email" className='rounded-lg p-1'
              {...register('email', {
                required: {
                  value: true,
                  message: 'the email is required'
                }
              })}
            />
            {
              errors.email && errors.email.message ? (
                <span className='block text-red-400 text-xs'>{String(errors.email.message)}</span>
              ) : null
            }
          </span>

          <span className='flex flex-col'>
            <label>
              Phone
            </label>
            <input type="number" className='rounded-lg p-1'
              {...register('phone', {
                required: {
                  value: true,
                  message: 'the email is required'
                }
              })}
            />
            {
              errors.phone && errors.phone.message ? (
                <span className='block text-red-400 text-xs'>{String(errors.phone.message)}</span>
              ) : null
            }
          </span>

          <span className='flex flex-col justify-center items-center'>
            <input type="submit" name="Submit" value="send" className='rounded-xl bg-zinc-500 w-1/3 p-1 text-white  hover:bg-sky-700' />
          </span>

        </form>
      </div>
    </main>
  )
}

export default form