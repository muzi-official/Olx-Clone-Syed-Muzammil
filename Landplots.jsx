import React from 'react';
import Sdata from './Sdata';
import Card from './Card';



const Landplots = () => {
    return (
        <>

        <div className="content-section">

<h1 className="text-left">Lands And Plots</h1>
<div className="container-fluid mb-5">
<div className="row">
    <div className="col-12 mx-auto">
        <div className="row gy-4">
            {
            Sdata.map((val, ind) => {
 return <Card key={ind} imgsrc={val.imgsrc}title={val.title}text={val.text}/>})}
        </div>
    </div>
</div>
</div>
</div>
       
        </>
    );
};

export default Landplots;