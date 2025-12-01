/** biome-ignore-all lint/suspicious/noArrayIndexKey: <> */
export function FormError({ error }: { error?: string[] }) {
  if (!error) return null

  return error.map((err, index) => (
    <div key={index} className='text-red-400 text-sm italic mt-1 py-2'>
      {err}
    </div>
  ))
}
