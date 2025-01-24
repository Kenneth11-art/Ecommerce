export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full h-[100vh]  text-black '>
    
      <a href="Login">
      <button className='ml-[2em] p-4 bg-[blue] mt-[2em] rounded-[15px] hover:green'>login</button>
        </a>
      {children}
    </main>
  );
}
