import "./globals.css"

export const metadata = {
  title: "New Highlight School - CBC Primary Education",
  description:
    "New Highlight School - A modern primary school following the Competency-Based Curriculum (CBC) model. Nurturing young minds for a bright future.",
  generator: "New Highlight School",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
