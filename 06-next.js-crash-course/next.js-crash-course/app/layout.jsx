import './globals.css'
import { Inter } from 'next/font/google'
import { Poppins } from 'next/font/google'
import Header from './components/Header';

const poppins = Poppins({
  weight: ['400', "700"],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Next.js-13 Course',
  description: 'Web development',
  keywords: "web development,web design,javascript,react,html,css,nextjs,front-end development"
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}