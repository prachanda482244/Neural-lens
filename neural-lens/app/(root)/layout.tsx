
const layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <main className="root">
                  <div className="container">
                        <div className="wrapper">
                              {children}
                        </div>
                  </div>
            </main>
      )
}

export default layout
