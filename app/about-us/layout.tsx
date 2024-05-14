//괄호 폴더는 URL에 아무런 영향을 미치지 않는다.

export default function Layout({children} : {children: React.ReactNode}) {
  return (
    <div>
        {children}
        &copy; Next JS is great!
    </div>
  )
}
