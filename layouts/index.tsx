import React from 'react';



interface LayoutProps {
  children: React.ReactNode;
}

const Layout = ({ children }: LayoutProps) => {


    return (

      <main className='flex '>
        {children}
      </main>

    )
  }





export { Layout }




