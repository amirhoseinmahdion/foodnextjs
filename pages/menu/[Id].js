import Detilesfoods from '@amirmahdion/components/templete/Detilesfoods';
import React from 'react';

const Detilesfood = ({data}) => {
    return (
        <div>
           <Detilesfoods data={data}/>
        </div>
    );
};

export default Detilesfood;


export async function getStaticPaths(){
    const res = await fetch("http://localhost:4000/data")
    const data = await res.json()
    const paths = data.map(food => ({params:{
        Id:food.id.toString()
    }
       
    }))

    return{
        paths,
        fallback:false
    }
}


export async function getStaticProps(context){
    const {params} = context
    const res = await fetch(`http://localhost:4000/data/${params.Id}`)
    const data = await res.json()
   
   if(!data.id){
    return{
        fallback:true
    }
   }


    return{
        props:{
            data
        },
        revalidate:3600
    }
}


