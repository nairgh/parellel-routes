export default function ComplexDashboardLayout({
  children,
  users,
  revenue,
  notifications,
}: {
  children: React.ReactNode;
  users: React.ReactNode;
  revenue: React.ReactNode;
  notifications: React.ReactNode;
  login: React.ReactNode;
}) {
 return (
  <html>
   <body>
      <header
          style={{
            backgroundColor: "lightorenge",
            padding: ".5rem",
          }}
        >
       <h1>{children}</h1>
      </header>
      <div style={{ display: "flex" }}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div>{users}</div>
          <div>{revenue}</div>
        </div>
        <div style={{ display: "flex", flex: 1 }}>{notifications}</div>
     
    </div>
   </body>
  </html>
  );
}
