import Navigation from "../components/navigation"

export const metadata = {
  title: {
    template: "%s | Next Movies",
    default: "Loding...",
  },
  description: "The best movies on the best framwork",
}

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  )
}
