import '../src/index.css'
import '../src/views/Home/index.css'
import '../src/views/Projects/index.css'
import '../src/views/Contact/index.css'
import '../src/components/Project/index.css'
import '../src/components/Modal/index.css'
import DesktopNavbar from '../src/components/DesktopNavbar'

export const metadata = {
  title: "Jola Ajayi's Portfolio",
  description: 'Portfolio Website',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <DesktopNavbar />
        {children}
        <div id="modal" />
      </body>
    </html>
  )
}