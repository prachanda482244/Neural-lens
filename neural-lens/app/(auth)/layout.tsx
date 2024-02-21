const layout = ({ children }: { children: React.ReactNode }) => {
      return (
            <main className="auth">
                  Authentication
                  {children}
            </main>
      )
}

export default layout
