import Menupage from '@amirmahdion/components/templete/Menupage';
import React from 'react';

const Menu = ({data}) => {
    return (
        <div>
          <Menupage data={data}/>
        </div>
    );
};

export default Menu;




export async function getStaticProps(){
    const res = await fetch("http://localhost:4000/data")
    const data = await res.json()


    return{
        props:{
            data
           
        },
        revalidate: 3600
    }
}