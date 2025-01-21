export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='w-full h-[100vh] bg-black text-white'>
      <a href="Products">
        <button>PRODUCTS</button>
        </a>
      <a href="Login">
      <button className='ml-[2em]'>SIGN IN</button>
        </a>
      {children}
    </main>
  );
}
