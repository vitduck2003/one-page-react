import React from 'react';
import Card from './card';

export default function Discover() {
    return (
        <div>
            <section className="px-[32px] bg-gray-300 pt-[64px] mx-auto" style={{ fontFamily: 'italic' }}>
                <h2 className="text-black text-center text-[60px] font-bold mb-[64px]">Discover our live classes</h2>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center text-center w-fit md:w-full lg:w-fit m-auto">
                <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/h.jpg"
                    title="Personal Training"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/jjjjj.jpg"
                    title="Fitness Classes"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/hhhh.jpg"
                    title="Combine activities"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/vvv.jpg"
                    title="Boxing Classes"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/hhhh-16.jpg"
                    title="Trx Training"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/ffff.jpg"
                    title="Pilates and Yoga"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/full-shot-people-barre-group-cla.jpg"
                    title="Barre"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/9067.jpg"
                    title="Cycling"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                    <Card 
                    imageUrl="https://assets.nicepagecdn.com/d2cc3eaa/2602318/images/765.jpg"
                    title="Strength"
                    description="This apartment features a electric kettle, sofa and private entrance."
                    />
                </div>
            </section>
        </div>
    );
}
