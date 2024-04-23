import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords:['Contact page', 'Enzo', 'Informacion']
};

export default function contactPage () {
    return (
        <span className="text-7xl">contact Page</span>
    )
}