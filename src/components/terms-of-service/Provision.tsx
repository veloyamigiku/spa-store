import React from "react";

interface ProvisionProps {
  title: string
  children: React.ReactNode  
}

const Provisions: React.FC<ProvisionProps> = ({ title, children }) => {
  return (
    <div className="mt-6 mb-6">
      <div>{title}</div>
      <div>{children}</div>
    </div>
  )

}

export default Provisions