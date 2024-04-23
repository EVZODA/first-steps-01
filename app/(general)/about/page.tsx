import type { Metadata } from "next";

export const metadata: Metadata = {
    title: 'SEO Title',
    description: 'SEO Description',
    keywords: ['About page', 'Enzo', 'Informacion']
};



export default function aboutPage() {
    return (
       
           
            <span className="text-7xl">About page</span>
     
    )
}