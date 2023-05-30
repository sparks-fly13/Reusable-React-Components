import Accordion from "../components/Accordion";

function AccordionPage() {
    const items = [
        {
            id: "owueo11",
            label: "Heyo it's a project of mine",
            content: "Yes you got it right, it's really a project of mine really a project of mine really a project of mine really a project of mine really a project of mine."
        },
        {
            id: "212ssaa",
            label: "Tbh i think it's quite a hassle",
            content: "You don't think so? Well, that's great for you really a project of mine really a project of mine really a project of mine really a project of mine."
        },
        {
            id: "1i9sha",
            label: "And yeah i guess that's it",
            content: "Buhbye, i hope you can have a lot of fun with me Roya. ai shiteru"
        }
    ];
    return <Accordion items={items} />
}

export default AccordionPage;