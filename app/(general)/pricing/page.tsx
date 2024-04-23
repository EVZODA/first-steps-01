import type { Metadata } from "next";

export const metadata:Metadata = {
 title: 'SEO Title',
 description: 'SEO Description',
 keywords:['Pricing page', 'Enzo', 'Informacion']
};

export default function pricingPage () {
    return (

        <span className="text-7xl">pricing Page</span>

    )
}