import PaymentCard from "@/components/student/payment/card"

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <>
      {children}
      <PaymentCard />
    </>        
)};
