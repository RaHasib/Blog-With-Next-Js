import Script from "next/script"
import Link from "next/link";
import "../styles/globals.css";
import Image from "next/image";




export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    let logo;
    const header = (
      <header>
        <div className="text-center bg-orange-500 p-8 my-6 rounded-md">
            <Image  alt="logo" src="/logo.png" width={40} height={40} className="mx-auto"/>
           <Link href="/"><h1 className="text-2xl font-bold  text-white font-bold mt-4">Hasib's Blog</h1></Link>
           <p className="text-white">🐝 Welcome to my Tech Blog.💻</p>
        </div>
      </header>
  )

  const footer = (
      <footer>
        <div className="border-t border-orange-500 mt-12 py-6 text-center text-orange-400">
          <script>document.write(new Date().getFullYear())</script> &copy; Raisul Amin Hasib
        </div>
      </footer>
  )
  return (
    <html lang="en">
    <title>Hasib's Blog</title>
    <Script/>
      <body>
      <div className="mx-auto max-w-2xl px-6">
      {header}
      {children}
      {footer}
      </div>
      </body>
    </html>
  )
}
