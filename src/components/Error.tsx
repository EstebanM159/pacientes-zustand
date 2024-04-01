export default function Error ({ children }: { children: React.ReactNode }) {
  return (
    <div>
       <p className="bg-red-600 my-4 text-sm text-center text-white font-bold uppercase p-3">{children}</p>
    </div>
  )
}
