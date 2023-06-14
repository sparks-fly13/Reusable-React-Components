import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: "owueo11",
            label: "Heyo it's a project of mine",
            content: "Yes you got it right. Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
        },
        {
            id: "212ssaa",
            label: "Tbh i think it's fun",
            content: "You don't think so? Well Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
        },
        {
            id: "1i9sha",
            label: "And yeah i guess that's it",
            content: "Buhbye, Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum."
        }
    ];
    return <Accordion items={items} />
}

export default AccordionPage;
